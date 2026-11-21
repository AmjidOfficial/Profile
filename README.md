# Muhammad Amjid Portfolio

One master portfolio for GitHub Pages and Netlify. Both hosts should deploy the same repository and the same root-level static files.

## Default experience

- **Default colour theme:** Dark
- **Default profile design:** Gravity
- **Other colour themes:** Neumorphic, Warm Paper, Cinematic
- **Other profile designs:** Editorial, Cinematic
- Visitors can change the theme and profile from the selectors. Their choices are saved in the browser. The Dark + Gravity default is applied once as a versioned default update, then visitor choices are remembered.

## Live profiles

- **GitHub Pages:** https://amjidofficial.github.io/Profile/
- **Netlify:** https://mamjid.netlify.app/

GitHub Pages deploys on pushes to `main`. Netlify must be linked to this same GitHub repository, with the repository root as its publish directory and no build command. If the Netlify site is linked to a different repository or manual deploy source, it will not stay in sync.

## Professional and project links

- LinkedIn: https://www.linkedin.com/in/amjid1988/
- GitHub: https://github.com/AmjidOfficial/
- WhatsApp: https://wa.me/923149198403
- BAZAR360 website: https://bazar360.online/
- BAZAR360 source: https://github.com/AmjidOfficial/BAZAR360
- N-LINK360 source: https://github.com/AmjidOfficial/N-LINK360

SalesPulse is described in the portfolio as a project. Its source repository is private, so it is not presented as a public visitor link.

## Active source

The live entry point is `index.html`, which loads `premium-v3.css` and `premium-v3.js`. Both files are shared by GitHub Pages and Netlify. Theme and profile choices are stored in the visitor's browser.

## Profile assets

- Original portrait: `assets/images/Muhammad-Amjid.jpeg` (keep unchanged).
- Résumé: `assets/resume/Muhammad-Amjid-Resume.pdf`.
- Award media: add the original supplied videos and images to `assets/videos/` and `assets/images/awards/` when available. Do not use placeholders or generated replacements for real awards.

## Custom domain

A custom domain can be connected to GitHub Pages and Netlify while keeping both current hostnames available as redirects or aliases. Add the domain only after its exact name is selected and registered. Update the canonical URL, Open Graph URL, sitemap and DNS records as part of that change.


## Firebase Hosting (free Spark plan)

The site is a static portfolio and can also be deployed to Firebase Hosting. The Firebase config publishes the repository root so the existing `index.html`, scripts, styles and assets are served without a build step.

### One-time setup

1. Create a Firebase project at https://console.firebase.google.com/ and keep it on the **Spark (no-cost)** plan.
2. In Project settings, create a service account key for GitHub Actions. Give the service account the Firebase Hosting Admin role.
3. In this GitHub repository, open **Settings → Secrets and variables → Actions** and add:
   - `FIREBASE_PROJECT_ID`: the Firebase project ID.
   - `FIREBASE_SERVICE_ACCOUNT`: the full JSON key content for the service account.
4. Push to `main` or run the **Deploy to Firebase Hosting** workflow manually from the Actions tab.

After a successful deployment, Firebase provides the site's `https://PROJECT_ID.web.app` address and HTTPS certificate.

### Free-plan limits

Firebase Hosting Spark currently includes up to **10 GB stored content** and **360 MB/day data transfer** at no charge. A payment method is not needed for Spark. If the daily transfer limit is exceeded, Hosting may be disabled for the rest of that month. Keep an eye on the Firebase Hosting usage page. This is free within the published limits, not unlimited hosting.

Netlify and GitHub Pages configuration remain in place. Firebase is an additional deployment target; it does not remove the existing live sites.
