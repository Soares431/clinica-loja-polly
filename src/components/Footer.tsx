import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navegation";

export default function Footer() {
  const logoImg = "/assets/image/logo-fundo.png";

  return (
    <footer className="bg-white border-t border-gray-100 bg-white-soft">
      <div className="max-w-6xl  px-10 py-8 flex items-center justify-between flex-wrap gap-6">
        <div className="flex items-center gap-3">
          <Image src={logoImg} alt="Pollyanna Barreto" width={65} height={65} />
          <div className="flex flex-col" >
            <span className="font-script text-2xl text-teal font-serif -mt-1">
              Clínica
            </span>
            <span className="font-script text-2xl text-brand-gray">
              Pollyanna Barreto
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <p className="max-w-6xl px-10 py-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Clínica Pollyanna Barreto —
          Neuropsicóloga.
        </p>
      </div>
    </footer>
  );
}
