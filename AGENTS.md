# Agent Instructions for @wearearchangel/static

This repository contains the Handcrafted Design System — a CSS baseline, tokens, and static assets.

## Repository Structure

- `styles/`: Core CSS files.
  - `tokens.css`: Definition of CSS variables and Tailwind v4 `@theme`.
  - `main.css`: Primary entry point for standard CSS usage.
  - `main.tailwind.css`: Entry point for Tailwind v4 usage.
  - `reset.vanilla.css`: Custom CSS reset.
  - `reset.normalize.css`: Standard normalize.css.
- `fonts/`: Variable fonts (Mona Sans, Hubot Sans).
- `index.html`: Reference page for testing and previewing the design system.

## Coding Standards

### CSS Variables (Tokens)
- Use semantic naming for tokens (e.g., `--color-text`, `--color-background`).
- Tokens are defined in `styles/tokens.css` within the `@theme` block for Tailwind v4 compatibility.
- Ensure all new tokens are also reflected in the `:root` or appropriate media queries in `styles/main.css` if they are meant to be used outside of Tailwind.

### Tailwind v4 Compatibility
- This project supports Tailwind v4. The `@theme` block in `styles/tokens.css` is crucial.
- When adding or modifying tokens, ensure they follow Tailwind v4's `@theme` syntax.

### Design Philosophy
- **Minimalism**: Keep the baseline stylesheet light.
- **Extensibility**: Provide tokens that are easy to override or extend.
- **Accessibility**: Maintain WCAG AA compliant color pairings (e.g., `--color-primary` and `--color-on-primary`).

## Maintenance Tasks

- When adding new CSS features or tokens, update `index.html` to provide a visual reference.
- Check `TODO.md` for known gaps (e.g., missing spacing, border-radius, or font-size scales) before implementing new features.

## Verification

- Always verify changes by checking the local `index.html` if possible (though agents may be limited to static analysis).
- Ensure that both `main.css` and `main.tailwind.css` are functional after changes.
