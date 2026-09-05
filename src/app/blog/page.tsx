import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";

export default function Blog() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-6 h-[2px] bg-brand-green" />
          <span className="font-script text-xl text-brand-green">Blog</span>
        </div>
        <h1 className="font-serif text-4xl text-brand-gray">
          Conteúdo sobre mente e comportamento
        </h1>
        <p className="text-gray-600 mt-2 max-w-xl">
          Textos para te ajudar a entender melhor a neuropsicologia e a
          saúde mental no dia a dia.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}