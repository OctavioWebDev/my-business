import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt as CalendarIcon, FaClock as ClockIcon } from 'react-icons/fa';
import type { Post } from '@/data/posts';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <Link href={post.href}>
      <article className={featured ? 'mb-8' : 'space-y-2'}>
        <Image
          src={post.image}
          alt={post.shortTitle}
          width={featured ? 800 : 400}
          height={featured ? 400 : 200}
          className={featured ? 'rounded-lg mb-4 w-full h-[300px] object-cover' : 'rounded-lg mb-2 w-full h-[150px] object-cover'}
        />
        <div className="space-y-2">
          <div className="inline-block bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
            {post.category}
          </div>
          {featured ? (
            <h2 className="text-2xl font-bold tracking-tight">{post.shortTitle}</h2>
          ) : (
            <h3 className="text-lg font-semibold">{post.shortTitle}</h3>
          )}
          <p className={`text-gray-600 dark:text-gray-400 ${featured ? '' : 'line-clamp-2'}`}>{post.excerpt}</p>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <CalendarIcon className="w-4 h-4" />
            <time dateTime={post.date}>{post.dateLabel}</time>
            <ClockIcon className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
