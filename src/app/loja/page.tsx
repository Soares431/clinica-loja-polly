import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Loja() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-6 h-[2px] bg-brand-green" />
          <span className="font-script text-xl text-brand-green">Loja</span>
        </div>
        <h1 className="font-serif text-4xl text-brand-gray">
          Produtos com a nossa marca
        </h1>
        <p className="text-gray-600 mt-2 max-w-xl">
          Itens personalizados pensados para o seu bem-estar e para lembrar
          do cuidado com você, todos os dias.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}