# Mahipal Singh Haritwal — portfolio

A responsive, animated static portfolio. No runtime packages or backend services required.

## Preview

Open `src/index.html` directly in a browser, or run `npm run dev` and visit http://127.0.0.1:4173.

## Check

Run `npm run build` with Node.js. It checks local asset links, section anchors, and core profile content, then copies the source into `public/`.

## Deploy to Vercel

Import this folder as a GitHub repository into Vercel. Select **Other** for framework, `npm run build` as build command, and `public` as output directory. The included `vercel.json` sets build/output configuration. To replace the existing website, use this source in the Vercel project currently assigned to `mahipal.vercel.app`; deploying into a new project will not automatically replace that address.

## Edit

- `src/index.html`: visible profile content, contact links, metadata, and section structure.
- `src/styles.css`: design, responsive layout, animations, and reduced-motion support.
- `src/script.js`: project detail content, skill tabs, navigation, and copy-email interaction.
- `src/assets/Mahipal_Singh_Haritwal_Resume.pdf`: updated downloadable resume.

Project diagrams are illustrative, not screenshots of private employer applications. No employer code, patient data, analytics, or form collection is included. Google Fonts is optional; system fonts are used as fallback. Professional metrics are supplied by Mahipal. The 99% attendance figure is omitted pending its reporting period.

## Verification

Checked JavaScript syntax, local assets and navigation anchors. Browser verified at desktop (1280px) and mobile (390px): no horizontal page overflow; mobile menu and anchor navigation, onboarding/payment dialogs, and skill tab switching worked. Resume PDF is included and linked locally. No production deployment has been performed.

## Migration from Gatsby

The former Gatsby 2 and node-sass implementation is retained under `legacy-gatsby/` for reference and excluded from the build. The new portfolio uses browser-native HTML, CSS, and JavaScript with no npm runtime dependencies. `vercel.json` explicitly overrides Gatsby detection and retains `public/` as the deployment output.

## Profile photo

The original photo is stored at `src/assets/profile.jpg` and appears in the hero avatar and About portrait. Cropping is done only through CSS `object-fit` and `object-position`; the original file is unchanged. Photo integration passed the build and asset checks; the browser preview was blocked by browser security policy during this update.
