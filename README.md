# Muhammad Amjid Portfolio

Three profile experiences: Executive (default), Editorial, and Cinematic. The existing profile structure is preserved. Neumorphic is the default colour theme, with Midnight and Warm Paper alternatives.

## Primary hosting

- GitHub Pages: https://amjidofficial.github.io/Profile/
- Netlify: deploy the repository root using the included `netlify.toml` (no build command).

GitHub Pages deploys automatically when changes are pushed to `main`. Netlify can connect to the same GitHub repository and deploy the same static files. These are the only supported hosting targets for this project. Vercel configuration and deployment files are not part of this source.

## Active source

The live entry point is `index.html`, which loads `premium-v3.css` and `premium-v3.js`. Theme and profile choices are saved in the browser.

## Media paths

- Award videos: `assets/videos/RSM-Amjid-Award-Recognition.mp4` and `assets/videos/Amjid-Award-Presentation.mp4`.
- Current résumé target: `assets/resume/Muhammad-Amjid-Resume.pdf`.

Keep media at these exact paths so the existing profile controls and links continue to work.
