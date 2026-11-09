# ANZ Landscaping — A life outside

A complete Astro + React landscaping website built from the supplied 35.5-second visual reference. The website is branded for ANZ Landscaping. The cream editorial grid, floating navigation, orange motion panels, pinned illustrated process, immersive image storytelling, lilac split composition and orange footer follow the reference's sequence and proportions.

## Run locally

Requires Node.js 22.23.4 or newer.

```sh
npm install
npm run dev
```

Open `http://localhost:4377`. The dedicated port avoids an existing local project on 4321.

```sh
npx tsc --noEmit
npm run build
npm run preview
```

Astro produces a portable static site in `dist/`. The Sites identity and static deployment directory are in `.openai/hosting.json`.

## Experience

- GSAP ScrollTrigger pins and scrubs the three-stage garden story over 5 viewport heights. Illustrations draw in, planting appears, the garden expands into a neighbourhood, and a seasonal chart draws across the final panel.
- Lenis is synchronized to the GSAP ticker. Touch uses native scrolling.
- A small original WebGL shader creates the moving orange and purple fabric surfaces. Rendering is limited to 30 fps and pauses drawing outside the viewport. CSS provides a no-WebGL fallback.
- Project images open an accessible native dialog with previous/next browsing.
- The two-stage garden brief validates required details, stores them in local storage and downloads a text brief. **No enquiry is emailed or submitted to a backend.** A real business can connect its preferred enquiry service in `BriefForm` in `src/components/Experience.tsx`.
- The privacy dialog explains local storage and includes a clear-saved-brief action.
- Reduced-motion users get an unpinned sequential process and no scroll-driven motion. The page is rendered to HTML by Astro; the process also remains readable before JavaScript initializes.
- Images use local WebP files and responsive source sets. Fonts are served locally.

## Reference timing map

| Video | Adaptation |
| --- | --- |
| 0–1 s | Cinematic architectural garden hero, serif headline, orange fabric panel |
| 1–4 s | Three-row asymmetric editorial image grid |
| 4–5 s | Fullscreen hand-and-sapling introduction |
| 5–8 s | Design card becoming a garden companion |
| 8–13 s | Animated isometric landscape installation and surrounding gardens |
| 13–16 s | Seasonal growth chart |
| 16–23 s | Fullscreen nature story and staggered editorial statements |
| 23–26 s | Cream oversized statement and flowing ecosystem illustration |
| 26–29 s | Lilac split call-to-action and purple fabric panel |
| 29–32 s | Fullscreen orange fabric footer |

The supplied reference is a phone recording of a desktop website, with the website occupying approximately 384 × 296 pixels within the video. Exact original font files, source animations and scroll input are unavailable; the implementation reconstructs the observable choreography and responsive equivalents.

## Asset credits and original image prompt

`public/images/hero.webp` and its responsive variants are original generated assets, made with the built-in imagegen tool. The original PNG was generated at:

`C:/Users/ijasa/.codex/generated_images/01a1bac6-7061-7c72-850f-e1a1ee113801/exec-a5a65c20-4a5f-4771-8723-f1ddba0c874e.png`

Prompt:

> Use case: photorealistic-natural. Asset type: full-bleed hero photograph for a premium landscaping website. Create a wide 16:10 editorial architecture photograph of a spectacular yet believable single-storey dark cedar and warm brick modern home nestled into a professionally landscaped garden. Broad composition viewed from garden level, front facade spans background, house at center, sculptural multi-stem tree on left, dense layered ornamental grasses, ferns, soft native meadow planting and clipped low shrubs, beautiful large pale limestone stepping stones in foreground. Warm late afternoon sunlight and real deep green foliage, autumn bronze accents, tactile rich materials, subtle film grain, premium landscape architecture magazine photography, 35mm architectural lens, natural realistic detail. The left half should be dark and calm enough for cream headline overlay, the right side has attractive foliage and house details. No people, no text, no logos, no watermark, no solar panels. Landscape wide image.

Additional images are from Pexels, downloaded and optimized locally:

| Local asset | Pexels photo |
| --- | --- |
| garden | [Bilal Mansuri — Yard of Modern House, 13041129](https://www.pexels.com/photo/yard-of-modern-house-13041129/) |
| courtyard | [Joanie Xie — Modern Minimalist House with Greenery, 33752181](https://www.pexels.com/photo/modern-minimalist-house-with-greenery-33752181/) |
| detail | [Ayşegül Aytören — Charming Garden View of a Modern House, 35386183](https://www.pexels.com/photo/charming-garden-view-of-a-modern-house-35386183/) |
| canopy | [Hand and sapling, 1072824](https://www.pexels.com/photo/1072824/) |
| forest | [Woodland, 1671325](https://www.pexels.com/photo/1671325/) |
| sunlight | [Botanical foliage, 807598](https://www.pexels.com/photo/807598/) |

The garden studies are clearly identified as illustrative. They are not claims of completed commissions. Typography: Instrument Serif and DM Sans from Google Fonts. The brand mark and architectural and ecosystem SVG illustrations are original code-native artwork.


## Verification

- `npx tsc --noEmit` passed.
- Astro 7.4.7 production build passed.
- Dependency audit: zero reported vulnerabilities after upgrading Astro and its React integration.
- Desktop browser checks at 1440 × 900: hero, smooth anchor navigation, the pinned card/drawing/chart sequence, chart tabs, cinematic narrative, lilac call-to-action and orange footer.
- Mobile browser checks at 390 × 844: hero, menu, editorial grid, project gallery, all three process states and closing composition. A 320px resize check also passed after ScrollTrigger refreshed.
- Reduced-motion emulation: all three process sections remain visible in normal document flow, with no pinning or scroll-driven transitions.
- Required-field validation, two-stage brief creation and an actual downloaded text file verified with dummy test data. Test local storage cleared afterward.
- No browser console errors or missing images observed in the production preview.
- Verification captures: `qa/desktop.jpg` and `qa/mobile.jpg`.

The browser tool's frame-rate probe did not produce a usable sample, so no measured FPS claim is made. Canvas drawing is capped at 30 fps, skipped offscreen, and images are responsive; scroll and layout behavior were checked directly in the browser.


### Building-drawing refinement

The installation scene now uses 107 independent strokes with fractional dash offsets. Ground plan, structure, details, hardscape and planting are sequenced in overlapping passes. Filled surfaces follow their outlines. Pattern definitions are excluded from the animation.

One SVG-unit camera matrix expands the entire scene around a fixed anchor. Every drawing tween has an explicit start value so reversing or resizing does not capture a partially drawn state. Accessibility state updates only when the active process step changes. ScrollTrigger catch-up is kept to 0.4 seconds alongside Lenis.

Browser checks verified the camera starts without a position jump, the same intermediate drawing state is restored after forward/reverse scrubbing, and the mobile illustration stays below its copy with no horizontal overflow. The local preview is the current review version.


### ANZ Landscaping content

The local design preview uses ANZ Landscaping throughout the interface, page metadata, illustration labels and downloaded garden brief. Bengaluru and service wording were verified against [the official ANZ Landscaping website](https://anzlandscaping.in/). Service selections cover villa and commercial landscaping, terrace and vertical gardens, and maintenance; budget preferences are expressed in rupees. Stock and generated visuals remain clearly identified as design studies.

The checkout directory and existing hosted Site origin retain their original technical identifiers. The current review version is served at http://localhost:4377/.
