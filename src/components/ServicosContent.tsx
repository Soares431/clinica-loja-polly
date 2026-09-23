"use client";

import ServiceCard from "@/components/ServiceCard";
import { useServices } from "@/hooks/useServices";
import { Brain, Sparkles } from "lucide-react";

export default function ServicosContents() {
  const { data: services, isLoading, isError } = useServices();

  return (
    <div className="w-full min-h-screen bg-bg text-ink">
      {/* 1. SEÇÃO CABEÇALHO HERO DOS SERVIÇOS (Largura Total da Tela) */}
      <section className="w-full bg-gradient-to-b from-brand-teal-deep to-[#14434a] text-white py-12 md:py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-brand-teal/20 text-white border border-brand-teal/40 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              <Brain className="w-3.5 h-3.5 text-brand-teal" />
              Especialidades
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Como posso te ajudar
          </h1>
          <p className="text-footer-text-soft/90 text-sm sm:text-base max-w-2xl leading-relaxed">
            Atendimento especializado e estruturado para diferentes necessidades, desde a avaliação diagnóstica até ao acompanhamento e reabilitação contínua.
          </p>
        </div>
      </section>

      {/* 2. CONTEÚDO PRINCIPAL (Centralizado na tela) */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-8">
        {/* ESTADO DE ERRO */}
        {isError && (
          <div className="bg-red-50 text-red-600 border border-red-200 p-4 rounded-xl text-sm text-center">
            Não foi possível carregar os serviços no momento. Tente novamente mais tarde.
          </div>
        )}

        {/* ESTADO DE CARREGAMENTO (SKELETON) */}
        {isLoading && (
          <div className="flex flex-col gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-brand-teal/10 shadow-sm animate-pulse space-y-4"
              >
                <div className="h-6 bg-slate-200 rounded w-1/3" />
                <div className="h-4 bg-slate-200 rounded w-3/4" />
                <div className="h-4 bg-slate-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        )}

        {/* LISTAGEM DOS SERVIÇOS */}
        {!isLoading && !isError && (
          <>
            {Array.isArray(services) && services.length > 0 ? (
              <div className="flex flex-col gap-6">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-brand-teal/10 p-8 space-y-3">
                <Sparkles className="w-8 h-8 text-brand-teal/40 mx-auto" />
                <h3 className="font-serif text-lg font-bold text-brand-teal-deep">
                  Nenhum serviço disponível no momento
                </h3>
                <p className="text-xs text-ink-soft">
                  Por favor, volte a consultar mais tarde ou entre em contacto connosco.
                </p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}