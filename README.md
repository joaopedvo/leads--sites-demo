# Website Design Concepts

A gallery of four English-language website concepts for fictional US businesses:

- Alder Accounting & Advisory — Denver, Colorado (`as7`)
- Evergreen Pest & Drain — Austin, Texas (`ebenezer`)
- Westbrook Accounting — Charlotte, North Carolina (`jvn-contabilidade`)
- Summit Auto Care — Portland, Oregon (`vsc-automotivo`)

All company identities, addresses, contact details and testimonials are demonstration content. Email addresses use reserved `.example` domains; phone numbers use the fictional 555-01xx range. The sample form does not transmit submissions. The original URL slugs remain stable so existing links continue to work.

Each `sites/<slug>/` folder is an independent Astro project. Its `demo.json` supplies the gallery card. Site asset paths use `import.meta.env.BASE_URL` so the build works under GitHub Pages subdirectories.

## Development

Run `npm ci` and `npm run dev` from the relevant site folder. Build with `npm run build`. Once each demo is built and copied to `dist/<slug>/`, run `node scripts/gerar-indice.mjs` to create the gallery.

Feature branches and pull requests run the validation workflow and upload a preview artifact. Pushes to `master` build and deploy all demos to GitHub Pages. Every page retains `noindex, nofollow`.
