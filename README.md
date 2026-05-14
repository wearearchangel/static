# Handcrafted Design System — CSS Baseline

A **minimal baseline stylesheet** maintained by Handcrafted Technologies, the tech division of Archangel. It covers settings, reset, typography, and element defaults — providing a clean base layer for customization with minimal overrides and maximum extensibility.

## Features

- **Semantic CSS custom properties**: Uses standard tokens for colors and typography (`--color-*`, `--font-*`).
- **Variable Fonts**: Includes [Mona Sans](https://github.com/github/mona-sans) and [Hubot Sans](https://github.com/github/hubot-sans) by GitHub.
- **Color Schemes**: Built-in support for light and dark modes via `prefers-color-scheme`.
- **Flexible Entry Points**: Available as a standard CSS baseline or a Tailwind CSS v4-ready theme.

## Usage

### Standard Usage

Link the stylesheet directly in your HTML `<head>`:

```html
<link rel="stylesheet" href="https://static.wearearchangel.com/styles/main.css">
```

Or import it directly into your CSS:

```css
@import url('https://static.wearearchangel.com/styles/main.css');
```

### Tailwind CSS v4 Usage

Use `main.tailwind.css` as your CSS entry point. It imports Tailwind, registers all design system tokens in `@theme`, and restores the brand baseline in `@layer base`:

```css
@import url('https://static.wearearchangel.com/styles/main.tailwind.css');
```

Then extend with your own `@theme` tokens and `@layer components` rules.

### NPM Package

This design system is available as an NPM package:

```bash
npm install @wearearchangel/static
```

You can then import the styles into your CSS or JavaScript entry points:

```css
/* Import everything (tokens + reset + base) */
@import "@wearearchangel/static/main";

/* Or import the Tailwind v4 entry point */
@import "@wearearchangel/static/main.tailwind";

/* Or import individual files */
@import "@wearearchangel/static/tokens";
@import "@wearearchangel/static/styles/reset.vanilla.css";
```

## Design Tokens

The system provides several semantic tokens that can be used throughout your application:

- **Typography**:
  - `--font-sans`: Mona Sans (UI and prose)
  - `--font-display`: Hubot Sans (Headings)
- **Colors**:
  - Primary: `--color-primary` (#aad56a)
  - Text: `--color-text`, `--color-text-2`
  - Backgrounds: `--color-background`, `--color-background-2`

## Roadmap

We are continuously improving the Handcrafted Design System. Planned improvements include:

- **Expanded Scales**: Adding full scales for font sizes, spacing, and border-radii.
- **Semantic Status Colors**: Adding tokens for success, error, warning, and info states.
- **Interactive State Colors**: Tokens for focus rings, hover backgrounds, and disabled states.
- **Base Components**: Standard styles for common components like buttons, inputs, and cards.
- **Reference Page**: A `design.html` page to serve as a living spec and visual reference.

## Credits

- Based on [vanilla-css](https://git.sr.ht/~bt/vanilla-css) by Bradley Taunt.
- HTML5 reference structure inspired by [@cbracco](https://github.com/cbracco/html5-test-page).
- Maintained by [Handcrafted Technologies](https://wearearchangel.com).

## License

MIT
