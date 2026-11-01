export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/Contact', label: 'Contact' },
  { href: '/Blog', label: 'Blog' },
  { href: '/Design', label: 'Design' },
  { href: '/Maintenance', label: 'Maintenance' },
  { href: '/Marketing', label: 'Marketing' },
  { href: '/WhyUs', label: 'Why Us' },
  { href: '/OurWork', label: 'Our Work' },
];

// The footer's Help column omits Home, Marketing and Our Work.
export const footerLinks = navLinks.filter((l) => ['/Contact', '/Blog', '/Design', '/Maintenance', '/WhyUs'].includes(l.href));
