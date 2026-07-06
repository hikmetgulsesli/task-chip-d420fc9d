---
name: Task Chip Design System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-xs:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  gutter: 12px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The brand personality is utilitarian, precise, and focused. It is designed for users who value efficiency and mental clarity over visual spectacle. The target audience includes developers, project managers, and power users who interact with high-density information environments.

The design style is **Minimalist-Functional**. It prioritizes information density without sacrificing legibility. By utilizing a "calm" interface—characterized by generous whitespace within components, a neutral palette, and a lack of decorative flourishes—the design system ensures that the user's tasks remain the primary focus. All UI elements are deterministic, meaning their visual state clearly communicates their functional purpose.

## Colors
This design system utilizes a high-clarity, neutral-heavy palette to maintain a "calm" density. 

- **Primary Action**: A crisp Indigo (#2563EB) is used exclusively for primary calls to action, focus states, and active indicators.
- **Neutral Grays**: A sophisticated range of Slate grays provides the structural framework. Backgrounds use the lightest tints to reduce eye strain, while borders use a medium-light gray to define boundaries without creating visual noise.
- **Validation**: Success, Warning, and Error states use highly desaturated versions of green, amber, and red to ensure they inform the user without breaking the interface's calm demeanor.

## Typography
The typography system is built on **Inter** for its exceptional legibility in dense UI environments. For technical metadata and labels, **Geist** is introduced to provide a subtle mono-spaced influence that aids in scanning IDs, dates, and status tags.

Hierarchy is established through weight and color rather than drastic scale changes. Body text is kept at 14px for standard interaction, while 13px and 12px are used for secondary data attributes to maintain high information density.

## Layout & Spacing
The layout follows a **Fluid Grid** model based on a 4px baseline shift. This "8pt-grid" variant allows for the precision required in a dense utility app.

- **Desktop**: A 12-column layout with 12px gutters. Sidebars are fixed-width (240px) to allow the main task area to breathe.
- **Mobile**: A single-column layout with 16px side margins.
- **Density**: Components use "Compact" (4px/8px) and "Default" (8px/12px) padding variants. In task lists, vertical spacing is minimized to maximize the number of visible items.

## Elevation & Depth
In alignment with the "deterministic UI" philosophy, elevation is conveyed through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows.

- **Level 0 (Surface)**: The main application background (#F8FAFC).
- **Level 1 (Container)**: Cards and task items use a white background with a 1px solid border (#E2E8F0).
- **Level 2 (Interaction)**: Hover states are indicated by a subtle background shift to a cooler gray or the addition of a 1px Primary-tinted border.
- **Shadows**: Only a single, extremely soft "Ambient Shadow" (4px blur, 4% opacity) is used for floating elements like dropdown menus or date pickers to provide just enough separation from the content below.

## Shapes
The shape language is **Soft** but disciplined. A 4px radius (`0.25rem`) is the standard for almost all UI elements, including buttons, input fields, and cards. This slight rounding prevents the UI from feeling "aggressive" while maintaining a professional, structured appearance.

Interactive chips use a slightly higher radius (8px) to distinguish them from structural containers and emphasize their "tappable" nature.

## Components

### Task Chips
Small, interactive elements used for tags and categories.
- **Style**: Subtle background tint (Primary 5%), 1px border (Primary 20%), 12px horizontal padding.
- **Typography**: `label-md`.

### Buttons
- **Primary**: Solid Indigo (#2563EB) with white text. High contrast to draw immediate attention.
- **Secondary**: Transparent background with a Slate border (#E2E8F0). Focuses the user on the primary action.

### Input Fields
- **Default**: White background, 1px border (#E2E8F0). 
- **Focus**: 1px Indigo border with a soft 2px blue outer glow (halo).
- **Placeholder**: Slate 400 text for a clear visual distinction from active input.

### Status Indicators
Small circular dots or text labels with high-saturation icons but low-saturation backgrounds.
- **Validation**: Error states use a 1px red-tinted border on the entire task item to ensure the user cannot miss the requirement for correction.

### Task Lists
Items are separated by 1px horizontal dividers. To maintain a "calm" feel, dividers do not span the full width of the container, leaving a small gap at the margins to reduce visual "striping."