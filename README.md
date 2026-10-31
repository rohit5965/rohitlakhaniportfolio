# rohitlakhaniportfolio

Rohit Lakhani — AI / ML engineering portfolio.

A responsive, dependency-free portfolio built from `Rohit_Lakhani_AI_Engineer_Resume (2).pdf` (the most recently modified Rohit Lakhani resume in Downloads on 31 October 2026).

## Preview locally

Open `dist/index.html` directly in your browser. All site assets are included and the portfolio works without a server or an internet connection.

To use a local development server instead:

Run `npm run dev` from this directory and open http://127.0.0.1:4173.

No install or build step is required. Serve the `dist/` directory on any static host.

## Edit

- `dist/index.html`: portfolio content and sections.
- `dist/styles.css`: responsive layout, colours, and typography.
- `dist/script.js`: project filters, project detail dialogs, navigation, and copy email.
- `dist/assets/orbit.svg`: original, code-generated wireframe illustration.
- `dist/assets/Rohit-Lakhani-Resume.pdf`: downloadable source resume.
- `.github/workflows/pages.yml`: GitHub Pages deployment from `dist/`.
- `GITHUB-PAGES.md`: publishing instructions and custom-domain DNS records.

The site has no runtime dependencies, external font requests, analytics, contact form backend, or API keys. Project architecture sketches are illustrative and project benchmark claims retain their evaluation context. Store, GitHub, and LinkedIn links come from the resume. Typography uses native system fonts and Georgia. Includes keyboard navigation, dialog focus handling, reduced motion support, print styling, and responsive layouts.

## Check

`npm run check`

HTML structure, anchor targets, bundled asset paths, SVG files, JavaScript syntax, CSS syntax, and the resume checksum were validated. Interactive browser verification could not run because the execution sandbox blocks Chrome and local HTTP servers.

## Hosting status

GitHub Pages deployment is configured in `.github/workflows/pages.yml` for [rohit5965/rohitlakhaniportfolio](https://github.com/rohit5965/rohitlakhaniportfolio). Follow [GITHUB-PAGES.md](GITHUB-PAGES.md) to upload the repository, enable Pages, and connect your domain. The site is **not yet published**: the execution workspace cannot reach GitHub, and no custom domain was supplied. No live URL has been verified.

The original `.openai/hosting.json` identity is preserved locally and ignored by Git. The website itself remains portable; serve the `dist/` folder on any static host.
