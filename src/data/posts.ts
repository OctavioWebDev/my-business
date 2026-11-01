export interface Post {
  href: string;
  title: string;
  shortTitle: string;
  category: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  readTime: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
}

export const posts: Post[] = [
  {
    href: '/Design',
    title: 'Why a Good Website Matters',
    shortTitle: 'Why A Good Website Matters',
    category: 'Web Development',
    excerpt: 'Learn why a good website is crucial for your business success.',
    date: '2023-05-01',
    dateLabel: 'May 1, 2023',
    readTime: '5 min read',
    image: '/assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg',
    imageAlt: 'Cover image',
    imageCredit: 'Picture by: Andrew Neel on Unsplash',
  },
  {
    href: '/Maintenance',
    title: 'The Importance of Web Maintenance',
    shortTitle: 'The Importance of Web Maintenance',
    category: 'Web Development',
    excerpt: 'Why keeping your website updated, secure and fast protects your professional online presence.',
    date: '2023-05-01',
    dateLabel: 'May 1, 2023',
    readTime: '5 min read',
    image: '/assets/images/vitolda-klein-lAqSzwr5eQc-unsplash.jpg',
    imageAlt: 'Cover image',
    imageCredit: 'Picture by: Vitolda Klein on Unsplash',
  },
  {
    href: '/Marketing',
    title: 'The Art of Marketing: Best Practices and Strategic Insights',
    shortTitle: 'The Art of Marketing',
    category: 'Business',
    excerpt: 'Best Practices and Strategic Insights',
    date: '2023-05-01',
    dateLabel: 'May 1, 2023',
    readTime: '5 min read',
    image: '/assets/images/nasa-Q1p7bh3SHj8-unsplash (1).jpg',
    imageAlt: 'Cover image',
    imageCredit: 'Picture by: NASA on Unsplash',
  },
  {
    href: '/DataBaseCreationMaintenance',
    title: 'Understanding Databases and Their Maintenance',
    shortTitle: 'Understanding Databases and Their Maintenance',
    category: 'Development',
    excerpt: 'What databases do, how they are designed, and how to keep them fast and secure.',
    date: '2024-05-31',
    dateLabel: 'May 31, 2024',
    readTime: '5 min read',
    image: '/assets/images/matthieu-beaumont-iYnpYeyu57k-unsplash.jpg',
    imageAlt: 'Database image',
    imageCredit: 'Image by: Mathieu Beaumont on Unsplash',
  },
  {
    href: '/API',
    title: 'Understanding APIs and Their Importance',
    shortTitle: 'Understanding APIs and Their Importance',
    category: 'Development',
    excerpt: 'What APIs are, how they are used, and why custom APIs matter for modern applications.',
    date: '2024-06-01',
    dateLabel: 'June 1, 2024',
    readTime: '5 min read',
    image: '/assets/images/gabriel-heinzer-g5jpH62pwes-unsplash.jpg',
    imageAlt: 'API image',
    imageCredit: 'Image by: Gabriel Heinzer on Unsplash',
  },
  {
    href: '/WebDevDeploy',
    title: 'The Essence of Web Development and the Power of a Strong Development Team',
    shortTitle: 'The Essence of Web Development and the Power of a Strong Development Team',
    category: 'Web Development',
    excerpt: 'What web development involves and why a strong development team makes the difference.',
    date: '2024-06-01',
    dateLabel: 'June 1, 2024',
    readTime: '5 min read',
    image: '/assets/images/annie-spratt-QckxruozjRg-unsplash.jpg',
    imageAlt: 'Web Development',
    imageCredit: 'Image by: Annie Spratt on Unsplash',
  },
];

export const getPost = (href: string): Post => {
  const post = posts.find((p) => p.href === href);
  if (!post) throw new Error(`No post for ${href}`);
  return post;
};
