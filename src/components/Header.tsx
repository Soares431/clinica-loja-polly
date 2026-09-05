"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navegation";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const logoImg = "/assets/image/logo-fundo.png";
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white-soft">
      <div className="flex items-center gap-3">
        <Image
          src={logoImg}
          alt="Logo clinica"
          width={70}
          height={70}
          className="border-2 brand-gray rounded-full object-cover"
        />
        <div className="leading-tight">
          <p className="text-[25px] tracking-widest text-teal font-serif -mt-1">
            Clínica
          </p>
          <p className="font-script text-[20px] text-ink">
            Pollyanna Barreto
          </p>
        </div>
      </div>

      <nav className="flex item-center gap-8 text-[18px] font-medium">
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

      <Link
        href="/agendamento"
        className="bg-brand-teal-deep text-white text-[18px] font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition"
      >
        Agendar consulta
      </Link>
    </header>
  );
}
