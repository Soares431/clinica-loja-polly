"use client";

import Link from "next/link";
import { Trash2, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Carrinho() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="max-w-3xl mx-auto px-8 py-20 text-center">
        <h1 className="font-serif text-3xl text-brand-gray">
          Seu carrinho está vazio
        </h1>
        <p className="text-gray-600 mt-2">
          Que tal dar uma olhada nos nossos produtos personalizados?
        </p>
        <Link
          href="/loja"
          className="inline-block mt-6 bg-brand-teal text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          Ir para a loja
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-8 py-16">
      <h1 className="font-serif text-3xl text-brand-gray mb-8">Seu carrinho</h1>

      <div className="flex flex-col gap-4">
        {items.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4"
          >
            <div className={`w-16 h-16 rounded-lg ${product.imgProduct} shrink-0`} />

            <div className="flex-1">
              <h3 className="font-serif text-brand-gray">{product.name}</h3>
              <p className="text-brand-teal font-semibold text-sm">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </p>
            </div>

            <div className="flex items-center gap-2 border border-brand-blue-light rounded-full px-2 py-1">
              <button
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="text-brand-gray hover:text-brand-teal"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm font-medium w-4 text-center">{quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="text-brand-gray hover:text-brand-teal"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => removeItem(product.id)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
        <span className="font-serif text-xl text-brand-gray">Total</span>
        <span className="font-bold text-brand-teal text-2xl">
          R$ {totalPrice.toFixed(2).replace(".", ",")}
        </span>
      </div>

      <button className="w-full mt-6 bg-brand-teal text-white font-semibold py-3 rounded-full hover:opacity-90 transition">
        Finalizar compra
      </button>
    </main>
  );
}