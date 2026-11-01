import React from 'react';
import Image from 'next/image';
import type { Post } from '@/data/posts';
import RecentPosts from './RecentPosts';

export type ArticleMeta = Pick<Post, 'title' | 'date' | 'dateLabel' | 'image' | 'imageAlt' | 'imageCredit'>;

interface ArticleLayoutProps {
  meta: ArticleMeta;
  /** Opening paragraph, shown above the cover image. */
  intro: React.ReactNode;
  children?: React.ReactNode;
  /** Extra sidebar content shown above Recent Posts. */
  aside?: React.ReactNode;
  /** Tailwind grid template for the article / sidebar split. */
  columns?: string;
}

export default function ArticleLayout({ meta, intro, children, aside, columns = 'md:grid-cols-[3fr_1fr]' }: ArticleLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-transparent to-emerald-950">
      <main className={`flex-1 container mx-auto px-4 md:px-6 py-12 grid ${columns} gap-12`}>
        <article className="prose max-w-none">
          <div className="space-y-2 not-prose">
            <h1 className="text-4xl text-yellow-700 font-extrabold tracking-tight lg:text-5xl">{meta.title}</h1>
            <div className="flex items-center gap-4">
              <Image src="/assets/images/myHeadshot.png" alt="Author" width={40} height={40} className="rounded-full" />
              <div>
                <span className="font-medium">Octavio Sanchez</span>
                <span className="mx-2">•</span>
                <time dateTime={meta.date}>{meta.dateLabel}</time>
              </div>
            </div>
          </div>
          <p className="text-white">{intro}</p>
          <figure>
            <Image
              src={meta.image}
              alt={meta.imageAlt}
              width={1250}
              height={340}
              className="aspect-video overflow-hidden rounded-lg object-cover"
            />
            <figcaption className="text-center">{meta.imageCredit}</figcaption>
          </figure>
          {children}
        </article>
        <div className="space-y-8">
          {aside}
          <RecentPosts />
        </div>
      </main>
    </div>
  );
}
