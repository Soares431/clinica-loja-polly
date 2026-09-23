"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { Search, ShoppingBag, Sparkles } from "lucide-react";

export default function Loja() {
  const { data: products, isLoading, isError } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  // Extração das categorias únicas disponíveis nos produtos
  const categories = useMemo(() => {
    if (!products) return ["todos"];
    const unique = Array.from(new Set(products.map((p) => p.category))).filter(Boolean);
    return ["todos", ...unique];
  }, [products]);

  // Filtragem de produtos por busca e categoria
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products.filter((product) => {
      const titleMatches = product.title?.toLowerCase().includes(searchTerm.toLowerCase())
      const categoryMatches = selectedCategory === "todos" || 
                              ( product.category) === selectedCategory;
      return titleMatches && categoryMatches;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-bg text-ink">
      {/* 1. SEÇÃO CABEÇALHO HERO DA LOJA */}
      <section className="bg-gradient-to-b from-brand-teal-deep to-[#14434a] text-white py-12 md:py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-brand-teal/20 text-white border border-brand-teal/40 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              <ShoppingBag className="w-3.5 h-3.5 text-brand-teal" />
              Loja Oficial
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Produtos com a nossa marca
          </h1>
          <p className="text-footer-text-soft/90 text-sm sm:text-base max-w-2xl leading-relaxed">
            Itens personalizados pensados para o seu bem-estar, organização e para lembrar do cuidado com você, todos os dias.
          </p>
        </div>
      </section>

      {/* 2. BARRA DE BUSCA E FILTROS */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-10 space-y-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 sm:p-6 rounded-2xl border border-brand-teal/10 shadow-sm">
          {/* Campo de Busca */}
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 text-ink-soft absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-teal/20 bg-bg text-sm text-ink focus:outline-none focus:border-brand-teal transition-colors"
            />
          </div>

          {/* Filtros por Categoria */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-brand-teal text-white shadow-sm"
                    : "bg-bg text-ink-soft hover:bg-brand-teal/10 border border-brand-teal/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3. ESTADO DE ERRO */}
        {isError && (
          <div className="bg-red-50 text-red-600 border border-red-200 p-4 rounded-xl text-sm text-center">
            Não foi possível carregar os produtos no momento. Tente novamente mais tarde.
          </div>
        )}

        {/* 4. ESTADO DE CARREGAMENTO (SKELETON) */}
        {isLoading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-2xl border border-brand-teal/10 shadow-sm animate-pulse space-y-4"
              >
                <div className="w-full h-52 bg-slate-200 rounded-xl" />
                <div className="h-4 bg-slate-200 rounded w-3/4" />
                <div className="h-3 bg-slate-200 rounded w-1/2" />
                <div className="h-8 bg-slate-200 rounded-xl w-full pt-2" />
              </div>
            ))}
          </div>
        )}

        {/* 5. LISTAGEM DE PRODUTOS */}
        {!isLoading && !isError && (
          <>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-brand-teal/10 p-8 space-y-3">
                <Sparkles className="w-8 h-8 text-brand-teal/40 mx-auto" />
                <h3 className="font-serif text-lg font-bold text-brand-teal-deep">
                  Nenhum produto encontrado
                </h3>
                <p className="text-xs text-ink-soft">
                  Tente alterar os termos da busca ou selecionar outra categoria.
                </p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}