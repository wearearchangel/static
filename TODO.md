# Design System TODO

Issues and gaps found while consuming this system in a downstream app (`mini-app-ticketing`).

---

## Missing Features

### Button base styles
`main.css` sets `background-color: var(--color-primary)` and `color: var(--color-on-primary)` on bare `button`, but no padding, border, border-radius, cursor, or font-weight. Every app re-implements these from scratch.

A base component layer (`components.css`) would be the natural ITCSS next layer after elements, covering at minimum: button variants, input, card surface, badge.

### A `design.html` reference page
No visual reference for how the system looks when applied. Without it, consumers have no way to verify token usage or preview light/dark mode side by side.

A single static HTML page demonstrating: typography scale, color swatches with variable names, button states, form inputs, table, and status colors would serve as the living spec.
