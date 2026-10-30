# Muhammad Amjid Portfolio

Three profile experiences: Executive (default), Editorial, and Cinematic. The original profile design and theme controls are preserved.

## Primary deployment

GitHub Pages: https://amjidofficial.github.io/Profile/

The static site is published from the repository root by the GitHub Actions workflow in `.github/workflows/pages.yml` whenever changes are pushed to `main`.

## Active source

The live entry point is `index.html`, which loads `premium-v3.css` and `premium-v3.js`. The Executive profile opens by default. Theme and profile choices are saved in the browser.

## Media

Award videos are stored in `assets/videos/`. The résumé is served from `assets/resume/Muhammad-Amjid-Resume.pdf`.

## Hosting

This repository uses GitHub Pages only. Vercel and Netlify configuration and the unused Next.js application scaffold have been removed.
