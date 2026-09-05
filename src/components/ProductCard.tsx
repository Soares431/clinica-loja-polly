import { Product } from "@/types/product";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Placeholder de imagem até termos fotos reais */}
      <div
        className={`h-40 ${product.bgColor || "bg-gray-100"} flex items-center justify-center relative overflow-hidden`}
      >
        {product.imgProduct &&
        (product.imgProduct.startsWith("/") ||
          product.imgProduct.startsWith("http")) ? (
          <Image
            src={product.imgProduct}
            alt={product.name}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-brand-gray/40 text-sm">Foto do produto</span>
        )}
      </div>

      <div className="p-5">
        <span className="text-xs font-semibold text-brand-green uppercase tracking-wide">
          {product.category}
        </span>

        <h3 className="font-serif text-lg text-brand-gray mt-1">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-brand-teal text-lg">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>

          <button className="bg-brand-teal text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
