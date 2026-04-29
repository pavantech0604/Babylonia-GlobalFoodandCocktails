---
name: Babylonia Luxe Lite
colors:
  surface: '#fff8f5'
  surface-dim: '#e4d7d2'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1eb'
  surface-container: '#f9ebe5'
  surface-container-high: '#f3e6e0'
  surface-container-highest: '#ede0da'
  on-surface: '#211a17'
  on-surface-variant: '#53443c'
  inverse-surface: '#362f2b'
  inverse-on-surface: '#fceee8'
  outline: '#85736a'
  outline-variant: '#d8c2b8'
  surface-tint: '#8a4f29'
  primary: '#884d27'
  on-primary: '#ffffff'
  primary-container: '#a5653d'
  on-primary-container: '#fffcff'
  inverse-primary: '#ffb68c'
  secondary: '#526255'
  on-secondary: '#ffffff'
  secondary-container: '#d2e5d3'
  on-secondary-container: '#566759'
  tertiary: '#00676c'
  on-tertiary: '#ffffff'
  tertiary-container: '#2b8086'
  on-tertiary-container: '#f6ffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbc9'
  primary-fixed-dim: '#ffb68c'
  on-primary-fixed: '#321200'
  on-primary-fixed-variant: '#6e3914'
  secondary-fixed: '#d5e7d6'
  secondary-fixed-dim: '#b9cbba'
  on-secondary-fixed: '#101f14'
  on-secondary-fixed-variant: '#3a4b3e'
  tertiary-fixed: '#a0f0f6'
  tertiary-fixed-dim: '#84d3da'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#fff8f5'
  on-background: '#211a17'
  surface-variant: '#ede0da'
typography:
  h1:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.5'
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin: 40px
  stack-xs: 4px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  stack-xl: 80px
---

## Brand & Style

The design system for Babylonia is built upon the concept of "Elevated Heritage." It evokes the atmosphere of a sun-drenched rooftop lounge at dusk—warm, inviting, and impeccably polished. The target audience is a sophisticated clientele seeking an escape that feels both ancient and contemporary.

The visual style is a blend of **Minimalism** and **Tactile Sophistication**. It prioritizes heavy whitespace (using ivory rather than pure white) to create an "airy" feel, while using rich, earthy accents to ground the experience. The interface should feel like high-end editorial stationery: intentional, quiet, and timeless.

## Colors

The palette avoids the sterile coldness of digital interfaces by utilizing a foundation of warm neutrals. 

- **Foundation:** The Background (#F9F7F2) and Secondary Surface (#E8E4DB) create a tiered, tonal environment that mimics natural stone and linen.
- **Accents:** Rich Cognac Tan is used for primary actions, suggesting the warmth of aged leather. Muted Moss Green serves as a secondary accent for natural elements or subtle notifications.
- **Lustre:** Brushed Gold is reserved for highlights, borders of distinction, and "special" interactive states, adding a metallic shimmer to the flat layout.
- **Typography:** All text is rendered in Deep Espresso to maintain high legibility while harmonizing with the warmth of the ivory background.

## Typography

The typography strategy balances the classic authority of a serif with the effortless modernism of a refined sans-serif.

**Noto Serif** is used for all headlines to provide a literary, premium feel. It should be typeset with slightly tighter letter-spacing in larger sizes to create a bespoke, "masthead" appearance.

**Manrope** is the workhorse for body text and functional UI. Its geometric yet warm curves mirror the sophisticated tone of the brand. Use the "label-caps" style for navigational elements and small headers to inject a sense of architectural structure into the layout.

## Layout & Spacing

This design system utilizes a **Fixed Grid** philosophy for desktop (12 columns) and a fluid model for mobile. To maintain the "Luxe Lite" airy feel, margins are intentionally generous (40px minimum).

Layouts should favor verticality and "The Breath": allow significant space between sections (stack-xl) to ensure the content never feels crowded. Elements should rarely be boxed in; rather, let them float within the Ivory background, using the Soft Stone surface to define distinct functional zones.

## Elevation & Depth

Depth in this design system is achieved through **Tonal Layering** rather than heavy shadows. 

- **Level 0:** Warm Ivory (#F9F7F2) canvas.
- **Level 1:** Soft Stone (#E8E4DB) containers used for secondary information or section breaks.
- **Interactive Depth:** Shadows are used sparingly and should be "Ambient"—very diffused, low opacity (8-12%), and slightly tinted with the Cognac Tan color to keep the shadow feeling warm rather than gray.
- **Micro-Detail:** Use 1px Brushed Gold (#C89045) borders for high-importance elements like "Book a Table" buttons or featured cocktail cards to lift them visually without adding bulk.

## Shapes

The shape language is **Soft (0.25rem)**. While the overall vibe is sophisticated, sharp corners feel too aggressive for a hospitality brand. A subtle radius on buttons, cards, and input fields provides a "tailored" look that feels approachable. 

Images and large hero containers should maintain a slightly larger radius (rounded-lg / 0.5rem) to soften the visual impact of photography against the ivory background.

## Components

### Buttons
- **Primary:** Filled Cognac Tan with Ivory text. No border.
- **Secondary:** Transparent background with a 1px Brushed Gold border and Espresso text.
- **Ghost:** Espresso text with a subtle Moss Green underline on hover.

### Cards
- Use the Soft Stone (#E8E4DB) background. 
- Avoid heavy shadows; use a 1px border that is only 10% darker than the surface color.
- Imagery within cards should have a slight sepia or warm filter applied to match the brand environment.

### Inputs & Selection
- **Fields:** Bottom-border only (1px Espresso) to mimic high-end stationery. Backgrounds remain Ivory.
- **Checkboxes/Radios:** Custom styled in Brushed Gold when active.

### Contextual Components
- **The "Menu Card":** A specialized list component with Serif titles and Sans-Serif descriptions, separated by a light dotted line in Moss Green.
- **Reservation Drawer:** A right-aligned overlay using the Ivory background and soft ambient shadows to create a sense of being "handed" a physical menu.