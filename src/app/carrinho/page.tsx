"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { apiFetch } from "@/lib/api-client";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Carrinho() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handlePhoneChange(value: string) {
    setPhone(value.replace(/\D/g, "").slice(0, 11));
  }

  const emailValid = EMAIL_REGEX.test(email);
  const phoneValid = phone.length >= 10;
  const canCheckout = name && emailValid && phoneValid && items.length > 0;

  async function handleCheckout() {
    if (!canCheckout) return;
    setLoading(true);
    setError(null);

    try {
      const order = await apiFetch<{ orderId: string; total: number }>("/order", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone,
          items: items.map((item) => ({
            productId: item.product.id,
            quantity: item.quantity,
            unitPrice: item.product.price,
          })),
        }),
      });

      const payment = await apiFetch<{ checkoutUrl: string }>("/payment", {
        method: "POST",
        body: JSON.stringify({
          title: "Compra na loja - Pollyanna Barreto",
          amount: order.total,
          orderId: order.orderId,
        }),
      });

      window.location.href = payment.checkoutUrl;
    } catch (err) {
      setError("Não foi possível iniciar o pagamento. Tente novamente.");
      setLoading(false);
    }
  }

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
            <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
              <Image
                src={`/assets/image/produtos/${product.image}`}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-serif text-brand-gray">{product.title}</h3>
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

      <div className="mt-8 border-t border-gray-100 pt-6">
        <h2 className="font-serif text-xl text-brand-gray mb-4">Seus dados</h2>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            {error}
          </p>
        )}

        <div className="flex flex-col gap-3">
          <input
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg px-4 py-2"
          />
          <input
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border rounded-lg px-4 py-2 ${email && !emailValid ? "border-red-400" : ""}`}
          />
          <input
            placeholder="Telefone (apenas números)"
            value={phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            inputMode="numeric"
            className="border rounded-lg px-4 py-2"
          />
        </div>
      </div>

      <button
        onClick={handleCheckout}
        disabled={!canCheckout || loading}
        className="w-full mt-6 bg-brand-teal text-white font-semibold py-3 rounded-full hover:opacity-90 transition disabled:opacity-40"
      >
        {loading ? "Processando..." : "Finalizar compra"}
      </button>
    </main>
  );
}