// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Heart,
  Sparkles,
  Calendar,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Star,
  Quote,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const mensagemWhatsapp =
    "Olá, Tudo bem?\nGostaria de mais informações sobre a consulta";
  const linkWhatsapp = `https://wa.me/558199179913?text=${encodeURIComponent(
    mensagemWhatsapp
  )}`;

  const servicos = [
    {
      icon: <Brain className="w-8 h-8 text-[#6c8f18]" />,
      title: "Avaliação Neuropsicológica",
      description:
        "Investigação detalhada das funções cognitivas (memória, atenção, raciocínio) para diagnósticos precisos.",
    },
    {
      icon: <Heart className="w-8 h-8 text-[#6c8f18]" />,
      title: "Reabilitação Cognitiva",
      description:
        "Intervenções personalizadas para estimulação e recuperação de habilidades neuropsicológicas.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#6c8f18]" />,
      title: "Psicoterapia Individual",
      description:
        "Acompanhamento emocional especializado para lidar com ansiedade, estresse e autoconhecimento.",
    },
  ];

  const diferenciais = [
    "Atendimento acolhedor e humanizado",
    "Metodologias e testes validados cientificamente",
    "Plano terapêutico 100% individualizado",
    "Atendimento presencial e online",
  ];

  const depoimentos = [
    {
      nome: "Mariana S.",
      perfil: "Mãe do Lucas (8 anos)",
      contexto:
        "Busca por auxílio na organização escolar e foco nas atividades",
      depoimento:
        "A Pollyanna foi fundamental para entender as dificuldades do meu filho na escola. O processo de avaliação foi conduzido com muita paciência e o retorno trouxe estratégias práticas que mudaram nossa rotina em casa.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    },
    {
      nome: "Carlos Eduardo M.",
      perfil: "Paciente de Psicoterapia",
      contexto: "Gerenciamento de estresse diário e sobrecarga no trabalho",
      depoimento:
        "O acolhimento da Dra. Pollyanna é único. Nas sessões consegui compreender padrões de ansiedade que me atrapalhavam no trabalho há anos. Hoje me sinto muito mais seguro e centrado.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    {
      nome: "Beatriz A.",
      perfil: "Paciente em Reabilitação",
      contexto: "Dificuldades de memória recente e foco no dia a dia",
      depoimento:
        "Excelente profissional! As sessões de reabilitação me ajudaram a recuperar a autonomia e a confiança no meu dia a dia. Atendimento ético, atencioso e muito estruturado.",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* 1. SEÇÃO HERO (PAINEL AZUL) */}
      <section className="bg-[#0f4c5c] text-white py-16 md:py-24 px-4 sm:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
          
            
            {/* TÍTULO AUMENTADO */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Clínica Psicologix
            </h1>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl">
              Cuidado neuropsicológico e emocional com foco no seu desenvolvimento. Um espaço seguro e especializado para avaliar, compreender e fortalecer sua saúde mental e cognitiva.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={linkWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#8eb825] hover:bg-[#7ca31e] text-white font-bold px-6 py-3.5 rounded-full shadow-md transition-all text-sm"
              >
                <FaWhatsapp className="w-5 h-5" />
                Agende uma Consulta
              </a>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-full transition-all text-sm backdrop-blur-sm"
              >
                Conheça nossos Serviços
              </Link>
            </div>
          </div>

          <div className="flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image
                src="/assets/image/foto-pessoal6.jpeg"
                alt="Pollyanna Barreto Neuropsicologia"
                fill
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO SOBRE */}
      <section className="py-16 md:py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Sobre o Atendimento Neuropsicológico
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              A neuropsicologia atua na relação entre o funcionamento cerebral e
              o comportamento humano. O objetivo do trabalho é identificar
              potenciais, compreender limitações cognitivas e emocionais e
              promover estratégias de superação e bem-estar.
            </p>
            <ul className="space-y-3 pt-2">
              {diferenciais.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#8eb825] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200/80 space-y-4 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-slate-900">
              Pollyanna Barreto
            </h3>
            <p className="text-xs uppercase tracking-wider font-bold text-[#6c8f18]">
              Psicóloga e Neuropsicóloga
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Dedicada a oferecer um acolhimento ético e embasado
              cientificamente para crianças, adolescentes, adultos e idosos.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE SERVIÇOS */}
      <section id="servicos" className="py-16 md:py-20 px-4 sm:px-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Áreas de Atuação
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Conheça os principais serviços oferecidos para auxílio no
              diagnóstico e tratamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col gap-4"
              >
                <div className="p-3 bg-[#8eb825]/10 w-fit rounded-xl">
                  {servico.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  {servico.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {servico.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DE DEPOIMENTOS */}
      <section className="py-16 md:py-20 px-4 sm:px-8 bg-white border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-block bg-[#8eb825]/15 text-[#6c8f18] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#8eb825]/30">
              Depoimentos
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              O que dizem os nossos pacientes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Relatos reais de quem encontrou acolhimento e suporte no nosso
              atendimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <div
                key={index}
                className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-6 relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-[#8eb825]/30" />
                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-[#6c8f18] uppercase tracking-wide">
                    {depoimento.contexto}
                  </p>
                  <p className="text-sm text-slate-600 italic leading-relaxed">
                    "{depoimento.depoimento}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#8eb825]/40">
                    <Image
                      src={depoimento.avatar}
                      alt={depoimento.nome}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {depoimento.nome}
                    </h4>
                    <p className="text-xs text-slate-500">{depoimento.perfil}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO CTA */}
      <section className="py-16 px-4 sm:px-8 bg-white text-center">
        <div className="max-w-4xl mx-auto bg-[#0f4c5c] text-white p-8 sm:p-12 rounded-3xl shadow-lg space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Pronto para dar o primeiro passo em direção ao seu bem-estar?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Entre em contato para tirar dúvidas sobre a consulta, valores e
            horários disponíveis.
          </p>
          <div className="pt-2">
            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#8eb825] hover:bg-[#7ca31e] text-white font-bold px-8 py-4 rounded-full shadow-md transition-all text-sm"
            >
              <Calendar className="w-5 h-5" />
              Agendar uma Consulta
            </a>
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO DE LOCALIZAÇÃO E CONTATO */}
      <section className="py-16 md:py-20 px-4 sm:px-8 bg-[#f8fafc] border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            <MapPin className="w-6 h-6 text-[#6c8f18] shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">
                Localização
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                R. João Dourado Filho, 88 – sala 06
                <br />
                Piedade — Jaboatão dos Guararapes/PE
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            <Phone className="w-6 h-6 text-[#6c8f18] shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">
                Telefone / WhatsApp
              </h4>
              <p className="text-xs text-slate-600">(81) 9917-9913</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            <Mail className="w-6 h-6 text-[#6c8f18] shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">
                E-mail
              </h4>
              <p className="text-xs text-slate-600">
                desenvolvimentopsi26@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}