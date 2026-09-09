"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ShoppingBasket } from "lucide-react";
import { NAV_LINKS } from "@/constants/navegation";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const logoImg = "/assets/image/logos/clinica1SemFundo_semNome.png";

  return (
    <header className="relative bg-white-soft">
      <div className="flex items-center justify-between px-4 sm:px-8 py-4">
        <div className="flex items-center gap-1">
          <Image
            src={logoImg}
            alt="Logo clínica"
            width={120}
            height={120}
            className="w-28 h-28 object-cover"
          />
          <div className="leading-tight">
            <p className="sm:text-[27px] tracking-widest text-teal font-title -mt-1">
              Clínica
            </p>
            <p className="font-cursive text-base sm:text-[18px]  text-brand-green-dark">
              PSICOLOGIX
            </p>

          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[18px] font-medium">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1 border-b-2 transition-colors ${
                  active
                    ? "text-brand-teal border-brand-green"
                    : "text-ink-soft border-transparent hover:text-brand-teal hover:border-brand-green"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <Link href="/carrinho" className="relative" aria-label="Ver cesta">
            <ShoppingBasket className="w-7 h-7 text-ink hover:text-brand-teal transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-coral text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <Link
            href="/agendamento"
            className="bg-brand-teal-deep text-white text-[18px] font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition"
          >
            Agendar consulta
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <Link href="/carrinho" className="relative" aria-label="Ver cesta">
            <ShoppingBasket className="w-6 h-6 text-ink" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-coral text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-ink"
            aria-label="Abrir menu"
          >
            {menuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-4 pb-4 bg-white-soft border-t border-gray-100">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 text-base font-medium border-b border-gray-100 ${
                  active ? "text-brand-teal" : "text-ink-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/agendamento"
            onClick={() => setMenuOpen(false)}
            className="mt-3 text-center bg-brand-teal-deep text-white font-semibold px-5 py-2.5 rounded-full"
          >
            Agendar consulta
          </Link>
        </nav>
      )}
    </header>
  );
}
