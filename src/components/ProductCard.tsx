"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-40 bg-brand-blue-light">
        <Image
          src={`/assets/image/produtos/${product.image}`}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <span className="text-xs font-semibold text-brand-green uppercase tracking-wide">
          {product.category}
        </span>

        <h3 className="font-serif text-lg text-brand-gray mt-1">
          {product.title}
        </h3>

        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-brand-teal text-lg">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>

          <button
            onClick={handleAdd}
            className={`text-sm font-semibold px-4 py-2 rounded-full transition ${
              added
                ? "bg-brand-green text-white"
                : "bg-brand-teal text-white hover:opacity-90"
            }`}
          >
            {added ? "Adicionado ✓" : "Adicionar"}
          </button>
        </div>
      </div>
    </div>
  );
}