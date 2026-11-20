# Deploys the site as the Cloud Run service "dusted-cleaning-services" (in the Client Websites project; the live address is printed at the end).
# (This kit started as a copy of Smart Mover's: every name in it is Dusted Cleaning Services' now. Never run it with another site's service name.)
#
#   powershell -File scripts\deploy.ps1          (gcloud works from PowerShell on this PC, not from Git Bash)
#
# `gcloud run deploy --source` uploads this folder (minus what .gcloudignore leaves out), builds the Dockerfile in Cloud Build and deploys the result.
# It needs the folder's own checks to have passed first: npm run check (with the dev server on 4690) and node scripts/test-nginx.mjs (after npm run build).
# The service name decides the preview address (https://dusted-cleaning-services-503426587396.europe-west1.run.app), which src/data/site.ts names as previewOrigin:
# change one, change both.
param(
  [string]$Service = 'dusted-cleaning-services',
  [string]$Region = 'europe-west1',
  [string]$Project = 'gen-lang-client-0896906225'
)
$src = Split-Path -Parent $PSScriptRoot

# gcloud writes its progress to stderr, which Windows PowerShell 5.1 turns into errors under -ErrorAction Stop: so the exit code is checked by hand.
gcloud run deploy $Service `
  --source $src `
  --project $Project `
  --region $Region `
  --allow-unauthenticated `
  --port 8080 `
  --memory 256Mi `
  --cpu 1 `
  --cpu-boost `
  --cpu-throttling `
  --concurrency 250 `
  --max-instances 10 `
  --quiet
if ($LASTEXITCODE -ne 0) { Write-Output "DEPLOY FAILED (exit $LASTEXITCODE)"; exit $LASTEXITCODE }

Write-Output 'SERVICE ADDRESS:'
gcloud run services describe $Service --project $Project --region $Region --format 'value(status.url)'
Write-Output 'TRAFFIC:'
gcloud run services describe $Service --project $Project --region $Region --format 'value(status.traffic)'
