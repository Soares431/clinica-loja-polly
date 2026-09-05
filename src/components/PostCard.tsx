import Link from "next/link";
import { Post } from "@/types/post";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className={`h-40 ${post.imageColor} flex items-center justify-center`}>
        <span className="text-brand-gray/40 text-sm">Imagem do artigo</span>
      </div>

      <div className="p-5">
        <span className="text-xs font-semibold text-brand-green uppercase tracking-wide">
          {post.category}
        </span>

        <h3 className="font-serif text-lg text-brand-gray mt-1 leading-snug">
          {post.title}
        </h3>

        <p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        <span className="block text-xs text-gray-400 mt-4">
          {formatDate(post.date)}
        </span>
      </div>
    </Link>
  );
}