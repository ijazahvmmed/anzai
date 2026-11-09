import gsap from 'gsap';

/** One drawing, one coordinate system: keep the camera still until the ink settles. */
export function addGardenMotion(timeline: gsap.core.Timeline, scope: HTMLElement) {
  const drawing = scope.querySelector<SVGSVGElement>('.garden-drawing')!;
  const strokes = Array.from(drawing.querySelectorAll<SVGPathElement>('.draft-stroke'));

  // Measure only once. Never animate <defs>, a patterned fill, or several disconnected
  // subpaths as though they were one pen stroke.
  const lengths = new Map(strokes.map(path => [path, path.getTotalLength()]));
  for (const path of strokes) {
    const length = lengths.get(path)!;
    gsap.set(path, { strokeDasharray: `${length} ${length}`, strokeDashoffset: length, opacity: 0, autoRound: false });
  }
  gsap.set(drawing.querySelectorAll('.draft-fill,.draft-guide,.draft-accent,.drawing-notes'), { opacity: 0 });
  gsap.set('.garden-neighborhood', { autoAlpha: 1 });
  gsap.set('.garden-camera', { attr: { transform: 'matrix(1 0 0 1 0 0)' } });

  const ink = (selector: string, start: number, span: number) => {
    const paths = Array.from(drawing.querySelectorAll<SVGPathElement>(`${selector} .draft-stroke`));
    const longest = Math.max(1, ...paths.map(path => lengths.get(path)!));
    paths.forEach((path, index) => {
      // Similar pen speed for short seams and long architectural outlines, with
      // overlapping starts so the construction never stalls between strokes.
      const duration = gsap.utils.clamp(span * .14, span * .72, lengths.get(path)! / longest * span * .72);
      const startOffset = paths.length > 1 ? index / (paths.length - 1) * span * .28 : 0;
      timeline.fromTo(path, { opacity: 0 }, { opacity: 1, duration: .065, ease: 'sine.inOut', immediateRender: false }, start + startOffset);
      timeline.fromTo(path, { strokeDashoffset: lengths.get(path)! }, { strokeDashoffset: 0, autoRound: false, duration, ease: 'none', immediateRender: false }, start + startOffset);
    });
  };
  const surfaces = (selector: string, start: number, duration = .42) => {
    timeline.fromTo(drawing.querySelectorAll(`${selector} .draft-fill`), { opacity: 0 }, { opacity: 1, duration, ease: 'sine.inOut', stagger: .025, immediateRender: false }, start);
  };

  ink('.draw-foundation', 2.03, .65);
  surfaces('.draw-foundation', 2.45);
  timeline.fromTo('.draw-foundation .draft-guide', { opacity: 0 }, { opacity: 1, duration: .4, ease: 'sine.inOut', immediateRender: false }, 2.35);
  ink('.draw-structure', 2.25, .8);
  surfaces('.draw-structure', 2.85);
  ink('.draw-detail', 2.68, .63);
  surfaces('.draw-detail', 3.12);
  ink('.draw-hardscape', 2.82, .63);
  surfaces('.draw-hardscape', 3.16);
  ink('.draw-plants', 3.02, .68);
  surfaces('.draw-plants', 3.36, .56);
  ink('.draw-water', 3.22, .7);
  timeline.fromTo('.draw-water .draft-accent,.drawing-notes', { opacity: 0 }, { opacity: 1, duration: .5, ease: 'sine.inOut', immediateRender: false }, 3.63);

  // The surrounding plots already share the SVG's world coordinates. A single
  // transform reveals them; no independently drifting CSS percentage transforms.
  // Explicit SVG-unit matrices keep the pivot fixed at (320, 330), including
  // after pin refreshes and responsive resizes. No DOM bounding-box origins.
  timeline.fromTo('.garden-camera', { attr: { transform: 'matrix(1 0 0 1 0 0)' } }, { attr: { transform: 'matrix(.66 0 0 .66 100.8 108.2)' }, duration: 1.3, ease: 'sine.inOut', immediateRender: false }, 3.95);
  ink('.neighbor-one', 4.05, .76);
  ink('.neighbor-two', 4.24, .76);
  ink('.neighbor-three', 4.42, .76);
  surfaces('.garden-neighborhood', 4.65, .5);
  ink('.garden-connections', 4.45, .8);
}
