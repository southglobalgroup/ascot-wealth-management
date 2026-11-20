/* WEBINARS & VIDEOS (/webinars): word for word from ascotwm.com/webinars (rendered 2026-11-19). No embedded players: each video shows
   its own YouTube thumbnail (self-hosted, cropped to 16:9) and opens on YouTube. */
import a from '../../assets/img/webinars/family-investment-company.jpg'
import b from '../../assets/img/webinars/isa-reforms.jpg'
import c from '../../assets/img/webinars/bloodline-planning.jpg'
import d from '../../assets/img/webinars/pension-into-paycheques.jpg'
import e from '../../assets/img/webinars/tax-year-end.jpg'
import f from '../../assets/img/webinars/november-2025.jpg'

export const meta = {
  title: 'Webinars & Videos | AWM - Ascot Wealth Management',
  description: 'Watch our educational webinars and latest video content',
}

export const intro = {
  title: 'Webinars & Videos',
  lede: 'Watch our educational webinars and latest video content',
}

export const channel = {
  title: 'Latest from Our YouTube Channel',
  text: 'Watch our recent webinars, market updates, and financial planning insights',
  cta: 'View All Videos on YouTube',
}

const yt = (id: string) => `https://www.youtube.com/watch?v=${id}`

export const videos = [
  { title: 'AWM - September Webinar - FAMILY INVESTMENT COMPANY', length: '34:08', date: 'Sep 28, 2026', href: yt('x_31cQZxTK4'), img: a },
  { title: 'AWM - August Webinar - ISA Reforms Explained: What the Changes Mean', length: '30:51', date: 'Aug 20, 2026', href: yt('5pzrFdgHspE'), img: b },
  { title: 'AWM - Webinar - Bloodline Planning: Protecting What You Pass On', length: '19:27', date: 'Jun 30, 2026', href: yt('BacUeF9Z0x0'), img: c },
  { title: 'AWM Webinar - Turning Your Pension into Paycheques - May', length: '34:14', date: 'Jun 3, 2026', href: yt('p3a_9iBtyxY'), img: d },
  { title: 'AWM - 2025/26 Tax Year End: Essential Planning with Claire', length: '36:32', date: 'Mar 2, 2026', href: yt('lCQwNcU79VQ'), img: e },
  { title: 'AWM Webinar Recording & Slides November 2025', length: '45:53', date: 'Dec 1, 2025', href: yt('nE4uSoUn_EU'), img: f },
]
