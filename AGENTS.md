# Agent Instructions for @wearearchangel/static

This repository contains the Handcrafted Design System — a CSS baseline, tokens, and static assets.

## Architecture: ITCSS

This project follows the **Inverted Triangle CSS (ITCSS)** architecture. AI agents must respect this layering to maintain a scalable and manageable codebase:

1.  **Settings**: Global variables, design tokens, and configuration.
    -   *Located in*: `styles/tokens.css` (CSS variables and Tailwind `@theme`).
2.  **Tools**: (Currently minimal/none) Mixins and functions.
3.  **Generic**: Ground-zero styles, resets, and normalization.
    -   *Located in*: `styles/reset.vanilla.css` and `styles/reset.normalize.css`.
4.  **Base**: Unclassed HTML elements (e.g., `body`, `h1`, `a`).
    -   *Located in*: `styles/main.css` (at the bottom) and via `@layer base` in Tailwind.
5.  **Objects**: (Future) Class-based, non-cosmetic design patterns.
6.  **Components**: (Future) Designed UI components.
7.  **Utilities**: (Future/Provided by Tailwind) High-specificity helper classes.

## Repository Structure

- `styles/`: Core CSS files organized by ITCSS layers.
- `fonts/`: Variable fonts (Mona Sans, Hubot Sans).
- `index.html`: Reference page for testing and previewing the design system.

## Coding Standards

### CSS Variables (Tokens)
- Use semantic naming for tokens (e.g., `--color-text`, `--color-background`).
- Tokens are defined in `styles/tokens.css` within the `@theme` block for Tailwind v4 compatibility.

### Tailwind v4 Compatibility
- This project supports Tailwind v4. The `@theme` block in `styles/tokens.css` is crucial as it acts as the **Settings** layer for both standard CSS and Tailwind.

### Design Philosophy
- **Minimalism**: Keep the baseline stylesheet light.
- **Extensibility**: Provide tokens that are easy to override or extend.
- **Accessibility**: Maintain WCAG AA compliant color pairings.

## Maintenance Tasks

- When adding new CSS features or tokens, ensure they are placed in the correct ITCSS layer.
- Update `index.html` to provide a visual reference for any changes.
- Check `TODO.md` for known gaps before implementing new features.

## Verification

- Ensure that both `main.css` and `main.tailwind.css` are functional after changes.
