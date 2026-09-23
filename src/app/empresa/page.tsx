import React from "react";
import {
  Target,
  Eye,
  Heart,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function SobrePsicologix() {
  const mensagemWhatsapp =
    "Olá, Tudo bem?\nGostaria de mais informações sobre o atendimento na Psicologix";
  const linkWhatsapp = `https://wa.me/558199179913?text=${encodeURIComponent(
    mensagemWhatsapp
  )}`;

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans space-y-16 py-12">
      {/* 1. SEÇÃO QUEM SOMOS / NOSSA TRAJETÓRIA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="inline-block bg-[#8eb825]/15 text-[#6c8f18] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#8eb825]/30">
            Nossa Trajetória
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Quem somos?
          </h2>
          <div className="w-12 h-1 bg-[#8eb825] mx-auto rounded-full mt-2" />
        </div>

        <div className="space-y-6">
          {/* Card 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              A <strong className="text-slate-900">Psicologix</strong> se
              consolida como um centro de referência em avaliação
              neuropsicológica, reabilitação cognitiva e acompanhamento
              psicoterapêutico.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              Hoje, ao buscar soluções fundamentadas em ciência e humanização para
              o desenvolvimento mental e emocional, a Psicologix destaca-se pela
              precisão clínica e excelência no atendimento às diversas faixas
              etárias.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              O sucesso e reconhecimento de nossos atendimentos vêm da combinação
              entre métodos científicos rigorosos, escuta empática e planos
              terapêuticos individualizados. Mantemos um padrão contínuo de
              evolução, impulsionado pela confiança depositada por cada
              paciente e família ao longo de nossa jornada.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              <strong className="text-slate-900">Quem somos?</strong> Uma clínica
              especializada no diagnóstico e intervenção emocional e cognitiva.
              Contamos com profissionais qualificados e corpo técnico dedicado a
              proporcionar acolhimento, ética e clareza para a saúde mental.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO PRINCÍPIOS ORGANIZACIONAIS (MISSÃO, VISÃO, VALORES) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-[#8eb825] uppercase tracking-widest">
            Princípios Organizacionais
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            Compromisso com a Saúde Mental e Precisão Técnica
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Missão */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col space-y-4">
            <div className="w-12 h-12 bg-[#8eb825]/10 rounded-xl flex items-center justify-center text-[#6c8f18]">
              <Target className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#6c8f18] uppercase tracking-wider">
                Propósito
              </span>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Missão
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Alcançar a excelência no cuidado à saúde mental e cognitiva, oferecendo diagnósticos precisos e estratégias terapêuticas de alto impacto junto a nossos pacientes e colaboradores.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col space-y-4">
            <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600">
              <Eye className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider">
                Futuro
              </span>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Visão
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ser referência no setor neuropsicológico e psicoterapêutico, expandindo o alcance do atendimento humanizado através do aperfeiçoamento contínuo e uso de instrumentos validados.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col space-y-4">
            <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600">
              <Heart className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider">
                Conduta
              </span>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Valores
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Respeito ao ser humano, ética científica, sigilo profissional, empatia no acolhimento e compromisso com a melhoria da qualidade de vida dos nossos pacientes.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO CTA FINAL */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-8 pt-8">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-[#8eb825]/15 text-[#6c8f18] rounded-2xl mx-auto flex items-center justify-center border border-[#8eb825]/30">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Precisa de apoio emocional ou avaliação neuropsicológica?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Conheça nossos serviços e modalidades de consulta ou entre em contato direto com nossa equipe para agendamentos.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/servicos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8eb825] hover:bg-[#7ca31e] text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-sm shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            Ver Serviços Clínicos
          </a>
          <a
            href={linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-teal-deep hover:bg-brand-teal text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-sm shadow-sm"
          >
            <FaWhatsapp className="w-4 h-4" />
            Fale conosco
          </a>
        </div>
      </section>
    </div>
  );
}