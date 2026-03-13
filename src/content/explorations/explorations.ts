export type ExplorationEntry = {
  id: string
  title: string
  eyebrow: string
  description: string
  note: string
  link: string
  panelClass: string
}

export const explorations: ExplorationEntry[] = [
  {
    id: 'exp-1',
    title: 'Living Fractal Atlas',
    eyebrow: 'Generative Visuals',
    description:
      'Autonomous kaleidoscopic fractal compositions that evolve continuously without user input.',
    note: 'A lean launch point into browser-native visual atmospheres.',
    link: 'https://genfractals.vercel.app/',
    panelClass:
      'bg-[radial-gradient(circle_at_20%_20%,rgba(244,208,161,0.9),transparent_28%),radial-gradient(circle_at_76%_24%,rgba(194,160,237,0.7),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(91,130,215,0.42),transparent_38%),linear-gradient(135deg,#23152d_0%,#3c284e_52%,#111827_100%)]',
  },
  {
    id: 'exp-2',
    title: 'LineRhythm',
    eyebrow: 'Interactive AV',
    description:
      'An audio-reactive orbit field designed for microphone input, local audio, and touch-led performance control.',
    note: 'Performative, live, and immediately inviting to interact with.',
    link: 'https://linerhythm.vercel.app/',
    panelClass:
      'bg-[radial-gradient(circle_at_18%_24%,rgba(117,228,197,0.78),transparent_26%),radial-gradient(circle_at_74%_20%,rgba(110,162,255,0.65),transparent_24%),radial-gradient(circle_at_50%_78%,rgba(244,144,185,0.45),transparent_36%),linear-gradient(135deg,#071726_0%,#0f2940_48%,#131f2d_100%)]',
  },
  {
    id: 'exp-3',
    title: 'Nebula Core',
    eyebrow: 'Generative Space',
    description:
      'A touch-responsive particle nebula with palette, density, glow, and warp controls.',
    note: 'Atmospheric and tactile, with a strong installation-quality mood.',
    link: 'https://nebula-generative-app.vercel.app/',
    panelClass:
      'bg-[radial-gradient(circle_at_22%_28%,rgba(245,168,84,0.82),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(163,96,255,0.7),transparent_22%),radial-gradient(circle_at_48%_78%,rgba(89,129,247,0.46),transparent_36%),linear-gradient(135deg,#180f2a_0%,#2e1847_48%,#0a1323_100%)]',
  },
  {
    id: 'exp-4',
    title: 'KaleidoCam',
    eyebrow: 'Camera Reactive',
    description:
      'A kaleidoscopic camera playground with party presets, live symmetry controls, and neon trail effects.',
    note: 'The most instantly playful and social of the current explorations.',
    link: 'https://kaleidocam-vert.vercel.app/',
    panelClass:
      'bg-[radial-gradient(circle_at_18%_22%,rgba(255,96,152,0.82),transparent_22%),radial-gradient(circle_at_78%_22%,rgba(108,235,221,0.72),transparent_24%),radial-gradient(circle_at_48%_78%,rgba(255,214,102,0.4),transparent_36%),linear-gradient(135deg,#10112b_0%,#18234e_52%,#07161b_100%)]',
  },
  {
    id: 'exp-5',
    title: 'Focus Flow',
    eyebrow: 'Ambient Utility',
    description:
      'A focus timer wrapped in a matrix-inspired visual system that balances calm productivity with atmosphere.',
    note: 'A strong bridge between practical UX and generative aesthetics.',
    link: 'https://focus-flow-matrix.vercel.app/',
    panelClass:
      'bg-[radial-gradient(circle_at_22%_18%,rgba(89,230,154,0.8),transparent_20%),radial-gradient(circle_at_78%_22%,rgba(44,165,132,0.6),transparent_22%),radial-gradient(circle_at_50%_78%,rgba(112,255,195,0.28),transparent_34%),linear-gradient(135deg,#07130d_0%,#113320_48%,#061109_100%)]',
  },
  {
    id: 'exp-6',
    title: 'Divine Morph',
    eyebrow: 'Procedural Ritual',
    description:
      'A morphing touch interface that transitions between sacred forms with procedural variation and uploaded source imagery.',
    note: 'Conceptually the most unexpected and memorable of the current set.',
    link: 'https://guru-gules-two.vercel.app/',
    panelClass:
      'bg-[radial-gradient(circle_at_24%_20%,rgba(255,201,122,0.78),transparent_24%),radial-gradient(circle_at_74%_22%,rgba(255,112,93,0.56),transparent_22%),radial-gradient(circle_at_52%_80%,rgba(255,237,183,0.3),transparent_34%),linear-gradient(135deg,#2f1709_0%,#5a2315_52%,#26130e_100%)]',
  },
]
