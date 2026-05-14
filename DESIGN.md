# Handcrafted Design System Design Document

This document outlines the architecture, philosophy, and implementation details of the Handcrafted Design System.

## Philosophy

The Handcrafted Design System is built on several core principles:

1.  **Minimalist Baseline**: It provides a clean, minimal starting point for web projects, covering typography, resets, and basic element styling without imposing a heavy visual weight.
2.  **Semantic & Extensible**: We use semantic CSS custom properties (tokens) that are easy to understand and override.
3.  **Modern Defaults**: Leverages modern CSS features like variable fonts (Mona Sans & Hubot Sans) and `prefers-color-scheme` for built-in light/dark mode support.
4.  **Framework Agnostic & Tailwind Friendly**: It works as a standalone CSS baseline or as a foundation for Tailwind v4 projects.

## Architecture

The system is organized into layers:

### 1. Reset Layer
Managed by `styles/reset.vanilla.css` (or `reset.normalize.css`). It removes browser inconsistencies and sets a solid foundation.

### 2. Token Layer
Defined in `styles/tokens.css`. This layer contains all the design constants:
-   **Colors**: Semantic tokens for text, backgrounds, borders, and brand colors.
-   **Typography**: Font families and scales using variable fonts.
-   The Token layer also includes the Tailwind v4 `@theme` block, mapping our tokens to Tailwind utilities.

### 3. Base Layer
Defined in `styles/main.css` (and via `@layer base` in Tailwind). This layer applies the tokens to raw HTML elements like `<body>`, `<h1>`, `<a>`, and `<button>`.

## Token System Overview

### Color Palette
We use a semantic color naming convention:
-   `--color-background`: The primary surface color.
-   `--color-text`: The primary text color.
-   `--color-primary`: The brand action color.
-   `--color-on-primary`: Text color intended for use on top of the primary color (ensuring contrast).

### Typography
The system uses two main variable fonts:
-   **Mona Sans**: Used for body text and UI elements (`--font-sans`).
-   **Hubot Sans**: Used for headings and expressive titles (`--font-display`).

## Usage

### Standard CSS
Include `styles/main.css` in your project. It imports the reset and applies the baseline styles.

```html
<link rel="stylesheet" href="https://static.wearearchangel.com/styles/main.css">
```

### Tailwind v4
Use `styles/main.tailwind.css` as your CSS entry point. This imports Tailwind and registers the design system tokens.

```css
@import "styles/main.tailwind.css";
```

## Future Considerations

Refer to `TODO.md` for planned improvements, including:
-   Standardizing font-size, spacing, and border-radius scales.
-   Adding semantic status colors (success, error, warning, info).
-   Developing a base component layer for common UI patterns like cards and badges.
