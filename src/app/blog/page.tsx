"use client";

import { useState, useMemo } from "react";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";
import { BookOpen, Search, Sparkles } from "lucide-react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtragem de posts por título ou resumo
  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    return posts.filter((post) => {
      const titleMatches = post.title?.toLowerCase().includes(searchTerm.toLowerCase());
      // const summaryMatches = post.summary?.toLowerCase().includes(searchTerm.toLowerCase());
      // return titleMatches || summaryMatches;
      return titleMatches
    });
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-bg text-ink">
      {/* 1. SEÇÃO CABEÇALHO HERO DO BLOG */}
      <section className="bg-gradient-to-b from-brand-teal-deep to-[#14434a] text-white py-12 md:py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-brand-teal/20 text-white border border-brand-teal/40 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-brand-teal" />
              Blog & Artigos
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Conteúdo sobre mente e comportamento
          </h1>
          <p className="text-footer-text-soft/90 text-sm sm:text-base max-w-2xl leading-relaxed">
            Textos e reflexões pensados para ajudar a compreender melhor a neuropsicologia, o desenvolvimento cognitivo e a saúde mental no dia a dia.
          </p>
        </div>
      </section>

      {/* 2. BARRA DE BUSCA E LISTA DE POSTS */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-10 space-y-8">
        {/* Campo de Busca */}
        <div className="flex justify-between items-center bg-white p-4 sm:p-6 rounded-2xl border border-brand-teal/10 shadow-sm">
          <div className="relative w-full max-w-md">
            <Search className="w-5 h-5 text-ink-soft absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por artigos ou temas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-teal/20 bg-bg text-sm text-ink focus:outline-none focus:border-brand-teal transition-colors"
            />
          </div>
        </div>

        {/* 3. GRID DE ARTIGOS */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-brand-teal/10 p-8 space-y-3">
            <Sparkles className="w-8 h-8 text-brand-teal/40 mx-auto" />
            <h3 className="font-serif text-lg font-bold text-brand-teal-deep">
              Nenhum artigo encontrado
            </h3>
            <p className="text-xs text-ink-soft">
              Tente buscar por outras palavras-chave ou termos relacionados.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}