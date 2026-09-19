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
  const logoImg =
    "/assets/image/logos/Logo_neuropsicóloga_nome_de_lado-semfundo_COPIA.png";

  return (
    <header className="sticky top-0 z-50 bg-bg backdrop-blur-md border-b border-brand-green-light/40 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-20 py-3">
        {/* Logo proporcional para cabeçalho */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={logoImg}
            alt="Logo Clínica Psicologix"
            width={320}
            height={120}
            priority
            className="w-auto h-12 sm:h-14 md:h-16 object-contain hover:opacity-95 transition-opacity"
          />
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 ${
                  active
                    ? "text-brand-teal-deep font-semibold"
                    : "text-ink-soft hover:text-brand-teal"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-teal rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Ações Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/carrinho"
            className="relative p-2 rounded-full hover:bg-white-soft transition-colors"
            aria-label="Ver cesta"
          >
            <ShoppingBasket className="w-6 h-6 text-ink-soft hover:text-brand-teal transition-colors" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-brand-jade-green text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-scale-in">
                {totalItems}
              </span>
            )}
          </Link>

          <Link
            href="/agendamento"
            className="bg-brand-teal-deep hover:bg-teal text-white text-[15px] font-semibold px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-200"
          >
            Agendar consulta
          </Link>
        </div>

        {/* Menu Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/carrinho"
            className="relative p-2"
            aria-label="Ver cesta"
          >
            <ShoppingBasket className="w-6 h-6 text-ink-soft" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-brand-jade-green text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-2 text-ink-soft hover:text-brand-teal transition-colors"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Dropdown Mobile */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-2 px-6 py-4 bg-white border-b border-brand-green-light/40 shadow-lg animate-fade-in">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-2.5 text-base font-medium transition-colors ${
                  active ? "text-brand-teal-deep font-semibold" : "text-ink-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/agendamento"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center bg-brand-teal-deep text-white font-semibold px-5 py-3 rounded-full shadow-xs active:scale-95 transition-all"
          >
            Agendar consulta
          </Link>
        </nav>
      )}
    </header>
  );
}