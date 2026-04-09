# Design System Specification: Premium Dark Technology

## 1. Overview & Creative North Star: "The Kinetic Monolith"
The objective of this design system is to move beyond the "SaaS template" look. Our Creative North Star is **The Kinetic Monolith**. Imagine a massive, dark obsidian structure that feels heavy and permanent, yet is coursing with internal energy.

We achieve this through **Aggressive Technology** and **Minimalist Luxury**. The design breaks the standard grid by utilizing intentional asymmetry, where large headlines bleed off-center, and elements overlap to create a sense of three-dimensional space. We prioritize negative space as a luxury asset—the more space we give an element, the more expensive it feels.

---

## 2. Color & Tonal Depth
This system rejects the "flat" web. We use a sophisticated hierarchy of dark tones to guide the eye without the clutter of borders.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning or containers. 
Boundaries are defined exclusively through background shifts. A `surface-container-highest` card sitting on a `surface` background is all the definition required. If the layout feels "lost," increase the spacing—do not add a line.

### Surface Hierarchy (Nesting)
We treat the UI as stacked layers of physical material:
- **Base Level:** `surface` (#131313) for the main canvas.
- **Deep Recess:** `surface-container-lowest` (#0E0E0E) for background sections that need to feel "etched" into the screen.
- **Elevated Layers:** `surface-container-high` (#2A2A2A) and `highest` (#353534) for interactive cards and floating menus.

### Glass & Signature Textures
To convey "Minimalist Luxury," use **Glassmorphism** for floating elements (e.g., Navigation bars, Modals). Use `surface` at 60% opacity with a `20px` backdrop-blur. 
*   **Signature Glows:** Use the `secondary_container` (#6001D1) as a blurred radial gradient (300px-600px radius) behind hero content to simulate a digital "aura."

---

## 3. Typography: Editorial Authority
We utilize a high-contrast scale to create an editorial feel. The tension between the technical precision of **Inter** and the geometric aggression of **Space Grotesk** is the core of our identity.

*   **Display (Space Grotesk):** Set with a tight letter-spacing (-0.02em). This is used for "Aggressive Tech" statements. 
*   **Body (Inter):** Set with generous line-height (1.6) for readability against dark backgrounds.
*   **Hierarchy Note:** Use `display-lg` for impactful hero headers, but surround it with 120px+ of negative space to ensure the "Luxury" aspect isn't lost to the "Aggressive" aspect.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows have no place here. We use light and material properties to define depth.

*   **The Layering Principle:** Instead of a drop shadow, elevate a card by moving from `surface-container-low` to `surface-container-highest`.
*   **Ambient Glows:** For "Floating" states, use a shadow color tinted with `primary` (#B6C4FF) at 5% opacity. The blur should be massive (40px-80px) to mimic light refracting through the UI rather than a shadow cast upon it.
*   **The Ghost Border Fallback:** If a container must have a stroke (e.g., Form inputs), use `outline-variant` (#434656) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons (The Energy Core)
*   **Primary:** A gradient from `primary_container` (#2563FF) to `secondary_container` (#6001D1). No border. High-weight `label-md` text.
*   **Secondary:** `surface-container-highest` background with a `tertiary` (#00E29D) micro-detail—either a 2px left-accent line or a terminal-style cursor `_` at the end of the text.
*   **Tertiary:** Transparent background. On hover, apply a subtle `surface-bright` (#3A3939) underlay.

### Cards & Lists
*   **Constraint:** Zero dividers. Use vertical white space (32px, 48px, or 64px) to separate content blocks. 
*   **Interactive Cards:** On hover, the background should shift from `surface-container-low` to `surface-container-high`, and the `tertiary_fixed` (#47FFB8) color should appear as a subtle "glow" in the top-right corner.

### Input Fields
*   **Visual Style:** Bottom-heavy. Use a `surface-container-lowest` background. Instead of a full border, use a 2px bottom-bar of `outline-variant`.
*   **Active State:** The bottom-bar transforms into a `primary` (#B6C4FF) glow.

### Signature Component: The "Data Pulse"
A custom status indicator for the tech vibe. Use `tertiary` (#00E29D) for a small dot accompanied by a 10% opacity expanding ring (animation) to signal "Live" or "Active" systems.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Align a headline to the left and its subtext to the far right.
*   **Use Subtle Grain:** Apply a 2% noise texture over the `surface` colors to give the "Deep Black" a physical, premium feel.
*   **Prioritize Interaction:** Use `primary_container` (#2563FF) for all primary interaction points.

### Don’t:
*   **No Generic Icons:** Avoid thin, rounded "friendly" icons. Use sharp, geometric, or "duotone" icons that utilize the accent colors.
*   **No Pure White:** Never use #FFFFFF. Always use `on-surface` (#E5E2E1) to reduce eye strain and maintain the "Dark Premium" aesthetic.
*   **No Solid Borders:** Never separate sections with a 1px line. If you feel the need to, your background color contrast is too low.