# Muhammad Amjid | Executive Portfolio

A responsive static portfolio for Muhammad Amjid. The site uses plain HTML, CSS and modern JavaScript to stay compatible with the existing Netlify static-site setup.

## Features

- Dark executive theme by default, with one accessible dark/light toggle.
- Responsive navigation and reduced-motion support.
- Circular profile photo in the header and animated loading screen.
- Executive summary, expertise, five project cards, career timeline, recognition, education and contact links.
- Media hub with file picker, drag-and-drop, metadata, filters, preview lightbox, fullscreen viewing and HTML5 video controls.
- IndexedDB stores local media blobs in the current browser. Local uploads are not public and do not sync between devices.
- Public image, direct video and YouTube URLs can be added to the local gallery.
- Project demo buttons filter the gallery by project. If media is missing, the upload form is pre-filled for that project.
- WhatsApp, email, LinkedIn, GitHub and résumé links.

## Run locally

Open `index.html` through a local static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Media storage and publishing

Local uploads are saved in IndexedDB on the current browser and device. They are not sent to Netlify, GitHub or a cloud service. Clearing browser site data may remove them. To make gallery items visible to all visitors, upload them to public storage and add their public URLs, or connect Supabase Storage or Cloudinary in a later phase.

The site accepts JPG, PNG, WEBP, MP4 and WEBM uploads up to 150 MB each. Browser storage quotas vary by device and browser. Keep original copies of important files.

## Content notes

Career dates and titles follow the supplied portfolio brief. The Ismail Industries period is grouped into one entry with three internal roles. Education shows only the three requested qualifications. The portfolio does not expose private company data or claim that project demos exist before media is added.

## Deployment

The root remains a static site. Existing Netlify hosting can publish the repository root without a Next.js build step.
