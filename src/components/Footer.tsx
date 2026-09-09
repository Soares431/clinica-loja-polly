import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navegation";

export default function Footer() {
  const logoImg = "/assets/image/logos/clinica1SemFundo_semNome.png";

  return (
    <footer className="bg-white border-t border-gray-100 bg-white-soft">
      <div className="max-w-6xl px-10 py-8 flex items-center justify-between flex-wrap gap-6">
        <div className="flex items-center gap-3">
          <Image src={logoImg} alt="Pollyanna Barreto" width={65} height={65} />
          <div className="flex flex-col">
            <span className="sm:text-[20px]  tracking-widest text-teal font-title -mt-1">
              Clínica
            </span>
            <span className="font-cursive text-base sm:text-[15px]  text-brand-green-dark">
              PSICOLOGIX
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 py-4">
        <div className="flex flex-col items-center justify-center text-center text-xs text-gray-500 gap-1">
          <p>© {new Date().getFullYear()} Clínica Psicologix</p>
          <p>
            Saiba mais sobre mim.
            <a
              href="https://psicologix.vercel.app/"
              className="hover:underline text-[14px]"
            >
              Pollyanna Barreto - Neuropsicóloga
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
