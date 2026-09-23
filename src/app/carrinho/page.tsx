"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft, ShieldCheck, CreditCard } from "lucide-react";
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

  // Estado quando o carrinho está vazio
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-bg text-ink flex flex-col justify-center items-center py-20 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-brand-teal/10 shadow-sm text-center space-y-4">
          <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto text-brand-teal">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-brand-teal-deep">
            Seu carrinho está vazio
          </h1>
          <p className="text-ink-soft text-sm leading-relaxed">
            Que tal dar uma olhada nos nossos produtos personalizados pensados para o seu bem-estar?
          </p>
          <Link
            href="/loja"
            className="inline-flex items-center justify-center gap-2 w-full bg-brand-teal text-white font-semibold py-3 px-6 rounded-xl hover:bg-brand-teal-deep transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Ir para a loja
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-ink">
      {/* 1. SEÇÃO CABEÇALHO HERO */}
      <section className="bg-gradient-to-b from-brand-teal-deep to-[#14434a] text-white py-12 md:py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-brand-teal/20 text-white border border-brand-teal/40 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              <ShoppingBag className="w-3.5 h-3.5 text-brand-teal" />
              Checkout
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Seu Carrinho
          </h1>
          <p className="text-footer-text-soft/90 text-sm sm:text-base max-w-2xl leading-relaxed">
            Confira os itens selecionados e preencha seus dados para prosseguir com o pagamento seguro.
          </p>
        </div>
      </section>

      {/* 2. CONTEÚDO DO CARRINHO */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LISTA DE PRODUTOS */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif text-xl font-bold text-brand-teal-deep mb-2">
              Itens no Pedido ({items.length})
            </h2>

            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-brand-teal/10 shadow-sm"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-bg">
                  <Image
                    src={`/assets/image/produtos/${product.image}`}
                    alt={product.title}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 space-y-1">
                  <h3 className="font-serif font-semibold text-brand-teal-deep text-sm sm:text-base">
                    {product.title}
                  </h3>
                  <p className="text-brand-teal font-bold text-sm">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </p>
                </div>

                {/* Seletor de Quantidade */}
                <div className="flex items-center gap-2 border border-brand-teal/20 rounded-xl px-2 py-1 bg-bg">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="text-ink-soft hover:text-brand-teal p-1 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-semibold w-4 text-center">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="text-ink-soft hover:text-brand-teal p-1 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Botão Remover */}
                <button
                  onClick={() => removeItem(product.id)}
                  className="text-ink-soft/50 hover:text-red-500 p-1 transition-colors"
                  title="Remover item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}

            <Link
              href="/loja"
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand-teal hover:underline pt-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Continuar comprando
            </Link>
          </div>

          {/* FORMULÁRIO E RESUMO DO PEDIDO */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-brand-teal/10 shadow-sm space-y-6">
              <h2 className="font-serif text-xl font-bold text-brand-teal-deep border-b border-brand-teal/10 pb-3">
                Seus Dados
              </h2>

              {error && (
                <div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl p-3">
                  {error}
                </div>
              )}

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-ink-soft mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-brand-teal/20 bg-bg rounded-xl px-3.5 py-2 text-sm text-ink focus:outline-none focus:border-brand-teal transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-ink-soft mb-1">
                    E-mail para confirmação
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full border bg-bg rounded-xl px-3.5 py-2 text-sm text-ink focus:outline-none transition-colors ${
                      email && !emailValid
                        ? "border-red-400 focus:border-red-500"
                        : "border-brand-teal/20 focus:border-brand-teal"
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-ink-soft mb-1">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="text"
                    placeholder="(00) 00000-0000"
                    value={phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    inputMode="numeric"
                    className="w-full border border-brand-teal/20 bg-bg rounded-xl px-3.5 py-2 text-sm text-ink focus:outline-none focus:border-brand-teal transition-colors"
                  />
                </div>
              </div>

              {/* RESUMO TOTAL */}
              <div className="border-t border-brand-teal/10 pt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-soft">Subtotal</span>
                  <span className="font-semibold text-ink">
                    R$ {totalPrice.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <div className="flex items-center justify-between text-base font-bold text-brand-teal-deep pt-2 border-t border-dashed border-brand-teal/10">
                  <span>Total</span>
                  <span className="text-xl text-brand-teal">
                    R$ {totalPrice.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>

              {/* BOTÃO FINALIZAR */}
              <button
                onClick={handleCheckout}
                disabled={!canCheckout || loading}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-teal text-white font-semibold py-3 px-4 rounded-xl hover:bg-brand-teal-deep transition-all disabled:opacity-40 shadow-sm text-sm"
              >
                <CreditCard className="w-4 h-4" />
                {loading ? "Processando..." : "Finalizar Compra"}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-ink-soft/70 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
                Pagamento 100% seguro e encriptado
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}