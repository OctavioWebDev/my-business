import PostCard from '@/components/blog/PostCard';
import RecentPosts from '@/components/blog/RecentPosts';
import { posts } from '@/data/posts';
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata({
  title: "Blog",
  description: "Articles on web design, maintenance, marketing, APIs and databases for small business owners.",
  path: "/Blog",
});

export default function Blog() {
  const [featured, ...rest] = posts;
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-transparent to-emerald-950">
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        <h1 className="sr-only">Blog</h1>
        <div>
          <PostCard post={featured} featured />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rest.map((post) => (
              <PostCard key={post.href} post={post} />
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <RecentPosts />
        </div>
      </main>
    </div>
  );
}
