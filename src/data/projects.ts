export interface Project {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

// Newest first. The first three show under "Recent Additions" on Our Work.
export const projects: Project[] = [
  {
    href: 'https://chirholifts.com/',
    image: '/assets/portfolioimages/chirho-lifts.jpg',
    imageAlt: 'Chi-Rho Lifts Project Image',
    title: 'Chi-Rho Lifts',
    description: 'A strength training app for iPhone and the web: log workouts, set goals and track progress',
  },
  {
    href: 'https://ligt-my-logo.vercel.app/',
    image: '/assets/portfolioimages/auraform.jpg',
    imageAlt: 'AuraForm Project Image',
    title: 'AuraForm',
    description: 'A website for a custom LED neon sign and lit logo company',
  },
  {
    href: 'https://www.chirhostrength.com/',
    image: '/assets/portfolioimages/Screen Shot 2024-09-10 at 7.48.28 PM.png',
    imageAlt: 'Chi-Rho Power and Strength Project Image',
    title: 'Chi-Rho Power and Strength Project',
    description: 'A website for a local gym and personal training company',
  },
  {
    href: 'https://www.dptoledo.com/',
    image: '/assets/portfolioimages/Screen Shot 2024-09-03 at 10.47.31 AM.png',
    imageAlt: 'Dominguez Properties Project Image',
    title: 'Dominguez Properties Project',
    description: 'A website for a local comercial and residential management company',
  },
  {
    href: 'https://www.ngptoledo.com/',
    image: '/assets/portfolioimages/Screen Shot 2024-09-02 at 8.14.44 AM.png',
    imageAlt: 'Next Generation Properties Project Image',
    title: 'Next Generation Properties Project',
    description: 'a wibsite for a local comercial construction company',
  },
  {
    href: 'https://www.iwctoledo.com/',
    image: '/assets/portfolioimages/Screen Shot 2024-05-18 at 5.25.30 PM.png',
    imageAlt: 'Integrety Wall and Ceiling Project Image',
    title: 'Integrety Wall and Ceiling Project',
    description: 'A website for a local comercial drywall company',
  },
];
