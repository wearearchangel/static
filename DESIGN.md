# Handcrafted Design System Design Document

This document outlines the architecture, philosophy, and implementation details of the Handcrafted Design System.

## Philosophy

The Handcrafted Design System is built on several core principles:

1.  **Minimalist Baseline**: It provides a clean, minimal starting point for web projects, covering typography, resets, and basic element styling.
2.  **Semantic & Extensible**: We use semantic CSS custom properties (tokens) that are easy to understand and override.
3.  **Modern Defaults**: Leverages modern CSS features like variable fonts (Mona Sans & Hubot Sans) and `prefers-color-scheme` for built-in light/dark mode support.
4.  **Framework Agnostic & Tailwind Friendly**: It works as a standalone CSS baseline or as a foundation for Tailwind v4 projects.

## Architecture: ITCSS

The codebase is organized according to the **Inverted Triangle CSS (ITCSS)** methodology. This helps in managing CSS specificity and ensures that the system is scalable and easy to maintain.

### 1. Settings
The "Settings" layer contains global variables, design tokens, and configuration.
-   **File**: `styles/tokens.css`
-   Contains: Brand colors, typography settings, and the Tailwind v4 `@theme` block.

### 2. Tools
(Currently minimal) This layer is for mixins and functions.

### 3. Generic
The "Generic" layer is for ground-zero styles, including resets and normalization.
-   **Files**: `styles/reset.vanilla.css` and `styles/reset.normalize.css`
-   Contains: Low-specificity rules that remove browser defaults.

### 4. Base
The "Base" layer styles unclassed HTML elements.
-   **File**: `styles/main.css` (Base rules applied after Generic imports).
-   Contains: Styles for `<body>`, `<h1>` to `<h6>`, `<a>`, `<blockquote>`, etc.

### 5. Objects
(Planned) This layer will contain class-based, non-cosmetic design patterns (e.g., layout grids).

### 6. Components
(Planned) This layer will contain designed UI components (e.g., cards, buttons with specific variants).

### 7. Utilities
High-specificity helper classes. When using Tailwind v4 (`styles/main.tailwind.css`), this layer is automatically generated based on the settings in `styles/tokens.css`.

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
Include `styles/main.css` in your project. It imports the reset and applies the baseline styles following the ITCSS order.

### Tailwind v4
Use `styles/main.tailwind.css` as your CSS entry point. It registers the design system tokens in the Tailwind theme.
