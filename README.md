# Pratik Maligouda — Mechanical Engineering Portfolio

A responsive static portfolio website built with HTML, CSS and vanilla JavaScript from the information in the supplied CV.

## Included

- Responsive home page and mobile navigation
- Project filters: All, Automotive, CAD & Design, Simulation, Academic
- Six CV-derived workstreams, with expandable case-study notes
- Professional experience
- Skills and tools, including learning-status labels where noted in the CV
- Education and certifications
- Contact section with email and LinkedIn
- Evidence-pending notes; no unsupported performance claims
- Home address and date of birth intentionally excluded

## Preview locally

### Option 1: Open the file
Double-click `index.html` to open it in a browser. Most features should work directly.

### Option 2: Run a local web server (recommended)
If Python is installed, open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

Stop the server with `Ctrl+C`.

## Publish with GitHub Pages

1. Sign in to GitHub and create a new repository, for example `mechanical-engineering-portfolio`.
2. If you want the site at `https://YOUR-USERNAME.github.io/`, name the repository exactly `YOUR-USERNAME.github.io`. Otherwise, a normal repository will publish at a project URL.
3. Extract this ZIP file. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository root (not the ZIP itself).
4. In the repository, open **Settings → Pages**.
5. Under the build/deployment source, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)` folder, then save.
7. Wait for GitHub Pages to publish. The Pages settings screen will show the published URL.
8. Open the URL on desktop and mobile to check links, layout, filters and contact details.

GitHub's official Pages documentation: https://docs.github.com/en/pages

## Before publishing

- Check that the email and LinkedIn URL are correct.
- Only add a phone number if you deliberately want it publicly visible.
- Add a downloadable CV only after creating a public version without home address/date of birth if you prefer to keep those private.
- Replace evidence-pending notes only when you have accurate supporting materials.
- Do not publish employer drawings, proprietary vehicle data, internal project identifiers, restricted reports or confidential workflows.
- For employer work, use approved public material or a generic recreated example clearly labelled as illustrative.
- The visual illustrations are CSS-generated placeholders, not photographs of actual projects.
- Review the project wording carefully and adjust it if any CV description needs clarification.

## Project inventory in this draft

1. Vehicle weight compliance — MAN Truck & Bus
2. CoG & payload analysis — MAN Truck & Bus
3. Regulatory compliance & component integration — MAN Truck & Bus
4. Chassis frame modification support — MAN Truck & Bus
5. Automated gear inspection system — academic project
6. Multi-plunger positive displacement pump — Mecathon Engineering internship

The four MAN entries may overlap within the same projects. They are presented as workstreams because the CV does not provide enough information to establish separate project boundaries.

## Editing content

- Edit text and project cards in `index.html`.
- Change colors, spacing, typography and layout in `styles.css`.
- Change menu/filter behavior in `script.js`.
- No build tools, frameworks or package installation are required.

The stylesheet optionally loads Manrope and DM Mono from Google Fonts. If external font access is blocked, the page falls back to system fonts.
