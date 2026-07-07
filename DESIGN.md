# Design System Strategy: The Compassionate Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Curated Sanctuary"**
This design system moves away from the clinical, grid-heavy nature of standard pet tech. Instead, it adopts a high-end editorial approach that feels like a premium lifestyle magazine. We achieve "Trustworthy" not through rigid boxes, but through **authoritative whitespace** and **intentional asymmetry**. 

The "Modern" feel is driven by layering soft, organic shapes over high-contrast typography scales. By breaking the standard horizontal "stripe" layout of most landing pages, we create a flow that feels fluid and alive—much like the pets we serve. The palette is the **shipped iOS app's brand system** — warm cream, paper, ink, mustard, and coral (see `Pawlo_Local/marketing/src/brand.ts` and `Assets.xcassets`) — so the website, App Store screenshots, and app read as one product.

## 2. Color & Tonal Architecture
The palette is "golden hour in a sunlit kitchen" — warm creams and papers grounded by near-black ink, with mustard as the primary action accent and coral for emphasis. **No blue, no purple, anywhere.** Brand anchors: cream #F5EFE4 · paper #FFFCF7 · ink #161A15 · mustard #E0B254 / deep mustard #C68829 · coral #D9603F / #B14524 · streak orange #F4A523.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections or cards. Structure must be achieved exclusively through background color shifts.
*   **Example:** A `surface-container-low` (#f5efe4, cream) testimonial section sitting directly against a `surface` (#faf6ec) hero background.
*   **The Goal:** To remove visual "noise" and allow the content to breathe.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of heavy-stock paper.
*   **Base Layer:** `surface` (#faf6ec) for the main page body.
*   **Elevated Content:** `surface-container-lowest` (#fffcf7, paper) for primary cards to create a "crisp" lift.
*   **Sunken Accents:** `tertiary-fixed` (#f1e2b0, sand) for highlighting "friendly/warm" sidebars or notice areas.

### The "Glass & Gradient" Rule
To avoid a flat, "templated" appearance, floating elements (like a sticky navigation bar) should utilize **Glassmorphism**:
*   **Fill:** paper (#fffcf7) at ~72% opacity.
*   **Effect:** `backdrop-blur: 20px`.
*   **Signature Texture:** Use a subtle linear gradient on primary CTAs—transitioning from `primary-bright` (#e0b254, mustard) to `primary-container` (#c68829, deep mustard) at a 135-degree angle, with near-ink text (`on-primary` #201803) for contrast. Small text accents and links use `primary` (#8a5a0e), a deep mustard-brown that passes WCAG AA on cream.

## 3. Typography: The Editorial Voice
We utilize **Plus Jakarta Sans** for its rounded, friendly terminals that maintain professional geometric stability.

*   **Display (The Bold Statement):** Use `display-lg` (3.5rem) with `-0.02em` letter spacing. This is your "Editorial Hook." It should feel massive, confident, and warm.
*   **Headlines (The Narrative):** Use `headline-lg` (2rem) for section headers. Always pair these with generous top margin (`spacing-20`) to signal a shift in the story.
*   **Body (The Detail):** Use `body-lg` (1rem) for readability. Ensure a line-height of at least 1.6 to maintain the "airy" sanctuary feel.
*   **Labels (The Utility):** `label-md` should be set in All Caps with `+0.05em` tracking when used for category tags to provide a premium, "stamped" look.

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "tech-heavy." We use **Ambient Depth**.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-highest` (#e4d7bc) element inside a `surface` (#faf6ec) parent. The slight tonal shift provides all the "lift" needed.
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, use a large blur (40px+) at 6–8% opacity, using a warm ink tint (rgba(60, 47, 24, …)). This mimics natural light rather than digital "glow."
*   **The Ghost Border Fallback:** If accessibility requires a stroke (e.g., in high-contrast mode), use `outline-variant` (#d8d2c2) at 20% opacity. **Never use 100% opacity for lines.**

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary-bright` #e0b254 to `primary-container` #c68829) with `on-primary` (#201803) text, `xl` (3rem) corner radius. Use `spacing-6` for horizontal padding.
*   **Secondary:** No background. Use a `title-sm` font weight with a subtle `surface-container-high` background on hover. No borders.
*   **Tertiary/Playful:** Use the `tertiary_fixed` (#f1e2b0) color for "Add-on" services to signal a friendly, low-pressure action.

### Cards & Content Blocks
*   **Prohibition:** No divider lines between list items or card sections.
*   **The Separation:** Use `spacing-8` (2.75rem) of vertical whitespace or a subtle shift from `surface` to `surface-container-low` to separate content.
*   **Edge Treatment:** All cards must use `rounded-lg` (2rem) or `rounded-xl` (3rem) to reinforce the "Pet Friendly" softness.

### Pet-Specific Components
*   **Status Badges:** Instead of standard pills, use organic, slightly asymmetrical "blob" shapes for status indicators (e.g., "Vaccinated," "Available") using `tertiary_container`.
*   **The "Paw-Print" Tracker:** A custom progress bar where the "thumb" or "active state" is a subtle custom-illustrated paw print motif.

## 6. Do’s and Don’ts

### Do:
*   **Do** lean into asymmetry. Place a photo of a dog overlapping two different color sections to create depth.
*   **Do** use `display` type for short, punchy phrases.
*   **Do** use the `surface-dim` (#efdfc6, deep cream) color for footer backgrounds to ground the page heavily.

### Don’t:
*   **Don’t** use black (#000000). Use `on_surface` (#161a15, warm ink) for all text.
*   **Don’t** use blue or purple anywhere — they belong to an abandoned early palette; the shipped app has neither.
*   **Don’t** use a standard 12-column grid for everything. Offset your text blocks to the left or right to create a "scanned" editorial feel.
*   **Don’t** use sharp 90-degree corners. Everything must feel safe to "touch"—keep it rounded.