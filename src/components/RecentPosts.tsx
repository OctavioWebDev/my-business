import React from 'react';
import Link from 'next/link';

interface Post {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  date: string;
}

interface RecentPostsProps {
  posts: Post[];
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
      <div className="grid gap-4">
        {posts.map((post, index) => (
          <Link key={index} href={post.href} className="flex items-center gap-4" prefetch={false}>
            <img
              src={post.imgSrc}
              alt={post.imgAlt}
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
            <div>
              <h3 className="text-lg font-medium">{post.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
