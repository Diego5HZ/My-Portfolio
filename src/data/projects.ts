export type Project = {
  title: string;
  role: string;
  stack: string[];
  summary: string;
  href?: string;
  image?: string;
  category?: string; // opcional
};

export const projects: Project[] = [
  {
    title: 'Squirrels Box',
    role: 'Lead Dev / PM',
    stack: ['Flutter', 'Drift', 'Firebase'],
    summary: 'Local-first inventory app with sections/items, custom attributes, and planned cloud sync.',
    href: '/projects/squirrels-box',
    image: '/images/projects/squirrels_box_1200x675.webp',
    category: 'Productivity'
  },
  {
    title: 'Runa Kani',
    role: 'Lead Dev / PM',
    stack: ['Flutter', 'Firestore', 'FCM'],
    summary: 'Personal-safety app with multi-PIN verification, incident logging, and trusted contacts.',
    href: '/projects/runa-kani',
    image: '/images/projects/runa_kani_1200x675.webp',
    category: 'Safety'
  },
  {
    title: 'Aukyrion (Game)',
    role: 'Game Dev',
    stack: ['Unity', 'Netcode', 'Relay v2'],
    summary: 'Multiplayer strategy prototype inspired by arena battlers with matchmaking and sync.',
    href: '/projects/aukyrion',
    image: '/images/projects/aukyrion_1200x675.webp',
    category: 'Game'
  }
];
