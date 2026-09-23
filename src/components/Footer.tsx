import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navegation";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const logoImg =
    "/assets/image/logos/Logo_neuropsicóloga_nome_de_lado-semfundo_COPIA.png";

  const mensagemWhatapp =
    "Olá, Tudo bem?\nGostaria de mais informações sobre a consulta";
  const linkWhatapp = `https://wa.me/558199179913?text=${encodeURIComponent(mensagemWhatapp)}`;

  return (
    <footer className="bg-footer-bg border-t border-footer-border text-footer-text font-[family-name:var(--font-title)]">
      {/* Secção Principal do Rodapé */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1: Identidade Visual & Sobre */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <Link href="/" className="inline-block shrink-0">
              <Image
                src={logoImg}
                alt="Logo Clínica Psicologix"
                width={320}
                height={120}
                className="w-auto h-12 sm:h-14 object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-footer-text-soft leading-relaxed opacity-90">
              Cuidado neuropsicológico e emocional com foco em bem-estar e
              desenvolvimento humano.
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-footer-border uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-footer-text hover:text-footer-border transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* Link para a Política de Privacidade */}
              <li>
                <Link
                  href="/politicaPrivacidade"
                  className="text-footer-text hover:text-footer-border transition-colors duration-200 flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-footer-border shrink-0" />
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Informações de Contacto */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-footer-border uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-footer-border shrink-0" />
                <span className="text-footer-text">(81) 9917-9913</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-footer-border shrink-0" />
                <span className="text-footer-text">desenvolvimentopsi26@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-footer-border shrink-0 mt-0.5" />
                <span className="text-footer-text">
                  R. João Dourado Filho, 88 – sala 06
                  <br />
                  Piedade — Jaboatão dos Guararapes/PE, CEP 54400-150
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais & Agendamento */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-footer-border uppercase tracking-wider">
              Redes Sociais
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/neuropsi.pollyannabarreto?igsh=MW92ZmVudnl1dmJ3MQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-footer-text text-footer-bg hover:bg-footer-border hover:text-footer-text transition-all flex items-center justify-center shadow-sm"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/pollyanna-souza-barreto-86b62b233/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-footer-text text-footer-bg hover:bg-footer-border hover:text-footer-text transition-all flex items-center justify-center shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href={linkWhatapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-footer-text text-footer-bg hover:bg-footer-border hover:text-footer-text transition-all flex items-center justify-center shadow-sm"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>

            <Link
              href="/agendamento"
              className="inline-block text-center bg-footer-border hover:bg-footer-text hover:text-footer-bg text-footer-bg text-xs font-bold px-4 py-2.5 rounded-full shadow-sm transition-all"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      </div>

      {/* Secção de Direitos de Autor e Créditos */}
      <div className="border-t border-footer-border/30 bg-black/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-footer-text-soft opacity-90 gap-2 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Clínica Psicologix. Todos os direitos
            reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/politicaPrivacidade"
              className="hover:text-footer-border underline transition-colors"
            >
              Política de Privacidade
            </Link>
            <span>•</span>
            <p>
              Desenvolvido para{" "}
              <a
                href="https://psicologix.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-footer-text hover:text-footer-border underline"
              >
                Pollyanna Barreto - Neuropsicóloga
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}