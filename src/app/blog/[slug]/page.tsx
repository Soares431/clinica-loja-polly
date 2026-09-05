import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-8 py-16">
      <Link href="/blog" className="text-sm text-brand-teal hover:underline">
        {"← Voltar para o blog"}
      </Link>

      <span className="block text-xs font-semibold text-brand-green uppercase tracking-wide mt-6">
        {post.category}
      </span>

      <h1 className="font-serif text-4xl text-brand-gray mt-2 leading-tight">
        {post.title}
      </h1>

      <div
        className={`h-56 ${post.imageColor} rounded-2xl mt-6 flex items-center justify-center`}
      >
        <span className="text-brand-gray/40 text-sm">Imagem do artigo</span>
      </div>

      <p className="text-gray-700 leading-relaxed mt-8 whitespace-pre-line">
        {post.content}
      </p>
    </main>
  );
}
