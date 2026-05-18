# Design System TODO

Issues and gaps found while consuming this system in a downstream app (`mini-app-ticketing`).

---

## Missing Variables

### Font-size scale
`reset.vanilla.css` defines `--text-lg` (1.2rem) and `--text-base` (1rem) as body/mobile
shorthand values, but a full named scale is absent. Apps are forced to hard-code sizes below
and above those two points.

Suggested additions:
```css
--text-xs:   0.6875rem;  /* 11px */
--text-sm:   0.8125rem;  /* 13px */
--text-md:   0.9375rem;  /* 15px */
--text-xl:   1.5rem;     /* 24px — matches --font-title size */
--text-2xl:  2rem;       /* 32px */
```

### Spacing scale
No spacing tokens. Apps hard-code `px` margins, paddings, and gaps.

```css
--space-1:  4px;
--space-2:  8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
```

### Border-radius scale
No radius tokens. Each app re-invents its own.

```css
--radius-sm: 4px;
--radius:    8px;
--radius-lg: 12px;
--radius-xl: 16px;
```

### Semantic status colors
No semantic state colors for UI feedback. Needed for form validation, alert banners,
and check-in states (success, already-checked-in, not-found).

```css
--color-success:     /* green tone  — distinct from --color-primary */
--color-success-bg:  /* light green surface */
--color-error:       /* red tone */
--color-error-bg:    /* light red surface */
--color-warning:     /* amber tone */
--color-warning-bg:  /* light amber surface */
--color-info:        /* blue tone */
--color-info-bg:     /* light blue surface */
```

Note: `--color-success` must be visually distinct from `--color-primary` (#aad56a) since
both are green. Consider a blue-green or deeper green for success to avoid ambiguity.

### On-surface text tokens
`--color-on-primary` (#222222) was introduced to solve button text contrast on the
`#aad56a` primary surface. The same pattern should be extended for consistency:

```css
--color-on-secondary:  /* text on --color-secondary surfaces */
--color-on-success:    /* text on success-coloured surfaces  */
--color-on-error:      /* text on error-coloured surfaces    */
```

### Interactive state colors
`--color-link` and `--color-link-alt` cover anchor hover states, but there are no
tokens for:
- Focus rings (`outline-color`)
- Hover backgrounds on interactive non-link elements
- Disabled text and disabled surface

---

## Missing Features

### Button base styles
`main.css` sets `background-color: var(--color-primary)` and `color: var(--color-on-primary)`
on bare `button`, but no padding, border, border-radius, cursor, or font-weight.
Every app re-implements these from scratch.

A base component layer (`components.css`) would be the natural ITCSS next layer after
elements, covering at minimum: button variants, input, card surface, badge.

### A `design.html` reference page
No visual reference for how the system looks when applied. Without it, consumers have
no way to verify token usage or preview light/dark mode side by side.

A single static HTML page demonstrating: typography scale, color swatches with variable
names, button states, form inputs, table, and status colors would serve as the living spec.
