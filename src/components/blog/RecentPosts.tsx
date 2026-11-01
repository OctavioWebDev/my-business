import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt as CalendarIcon } from 'react-icons/fa';
import { posts } from '@/data/posts';

export default function RecentPosts() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="flex items-center gap-4 hover:bg-yellow-700 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors"
            prefetch={false}
          >
            <Image
              src={post.image}
              alt={post.shortTitle}
              width={80}
              height={80}
              className="rounded-lg w-20 h-20 object-cover shrink-0"
            />
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">{post.shortTitle}</h3>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <CalendarIcon className="w-4 h-4" />
                <time dateTime={post.date}>{post.dateLabel}</time>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
