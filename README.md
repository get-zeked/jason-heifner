# jason-heifner

Jason Heifner's site, served by GitHub Pages at https://jason.thinkabstrakt.com

- `index.html` is the whole page (styles and scripts inline).
- `ai/index.html` is the AI systems page at /ai/. It is generated from the home page's shared styles, so restyle the home page first and regenerate.
- `holo.js` is the Roofcast building model, a restyled build of `give/holo` from the roofcast repo (bundles three.js r170, MIT).
- `po-*.webp` are Panel Ops screens from the example shop; `rc-*.webp` are fallback stills for the model.
- `archivo-*.woff` are the three Archivo cuts the page uses, built from the variable font (SIL Open Font License, see `ARCHIVO-OFL.txt`).
- `CNAME` sets the custom domain. Pushing to `main` redeploys.

Still to connect: `FORM_ENDPOINT` and `SOCIAL` at the top of the script in `index.html`.
