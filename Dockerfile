# Build the site, then serve the plain files with nginx.
# The container listens on $PORT (Cloud Run sets it; 8080 when it is not set). nginx.conf.template is written by scripts/make-nginx.mjs (run again below).
# Deploy: scripts/deploy.ps1 (gcloud run deploy --source), from PowerShell.

# Stage 1: build
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
# the checks (playwright, the type checker) are dev tools: the build needs only what is in "dependencies"
RUN npm ci --omit=dev
COPY . .
ENV NODE_OPTIONS=--max-old-space-size=3072
RUN npm run build
# The server file is written again here, from src/data/site.ts, so that "noindex" can never outlive the day the site is allowed to be listed.
RUN node scripts/make-nginx.mjs
# A build that lost its pages or its photographs must stop here and not ship (18 pages: home, services, about, contact, the
# fourteen services; their own photographs).
RUN set -e; \
    test "$(wc -c < dist/index.html)" -gt 100000; \
    test -s dist/404.html; \
    test -s dist/services-2.html; \
    test -s dist/about-2.html; \
    test -s dist/contact-us.html; \
    test -s dist/deep-cleaning-service-krugersdorp.html; \
    test -s dist/after-builders-cleaning-krugersdorp.html; \
    test -s dist/window-cleaning-4.html; \
    test -s dist/hoarders-cleaning.html; \
    test "$(ls dist/*.html | wc -l)" -ge 19; \
    test -s dist/og.jpg; \
    test -s dist/favicon.ico; \
    test -s dist/robots.txt; \
    test -s dist/sitemap-index.xml; \
    test "$(ls dist/_astro | wc -l)" -gt 40

# Stage 2: serve
FROM nginx:alpine
ENV PORT=8080
ENV NGINX_ENVSUBST_FILTER=^PORT$
COPY --from=build /app/nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
