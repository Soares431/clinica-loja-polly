"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navegation";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const logoImg = "/assets/image/logo-fundo.png";

  return (
    <header className="relative bg-white-soft">
      <div className="flex items-center justify-between px-4 sm:px-8 py-4">
   
        <div className="flex items-center gap-3">
          <Image
            src={logoImg}
            alt="Logo clinica"
            width={70}
            height={70}
            className="w-12 h-12 sm:w-[70px] sm:h-[70px] border-2 brand-gray rounded-full object-cover"
          />
          <div className="leading-tight">
            <p className="text-lg sm:text-[25px] tracking-widest text-teal font-serif -mt-1">
              Clínica
            </p>
            <p className="font-script text-base sm:text-[20px] text-ink">
              Pollyanna Barreto
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
                target={link.target}
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

      
        <Link
          href="/agendamento"
          className="hidden md:inline-block bg-brand-teal-deep text-white text-[18px] font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition"
        >
          Agendar consulta
        </Link>

     
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-ink"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

  
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-4 pb-4 bg-white-soft border-t border-gray-100">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                target={link.target}
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