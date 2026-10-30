# Muhammad Amjid Portfolio

Three profile experiences: Executive (default), Editorial, and Cinematic. The original profile design and theme controls are preserved.

## Primary deployment

GitHub Pages: https://amjidofficial.github.io/Profile/

The static site is published from the repository root by the GitHub Actions workflow in `.github/workflows/pages.yml` whenever changes are pushed to `main`.

## Other hosting configuration

A `netlify.toml` file is retained for optional Netlify hosting. GitHub Pages is the deployment currently automated by this repository.

## Source

The main live entry point is `index.html`, which loads `premium-v3.css` and `premium-v3.js`. Update those active files when changing the default live profile. Other CSS and JavaScript files contain alternate or legacy profile implementations.
