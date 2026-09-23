import Link from "next/link";
import { AlertCircle, Home, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col justify-between">
      {/* 1. SEÇÃO PRINCIPAL (HERO) */}
      <section className="bg-[#f8fafc] py-16 md:py-24 px-4 sm:px-8 text-center flex-1 flex items-center justify-center border-b border-slate-100">
        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* BADGE DE ALERTA */}
          <div className="inline-flex items-center gap-2 bg-[#8eb825]/15 text-[#6c8f18] text-xs font-bold px-4 py-1.5 rounded-full border border-[#8eb825]/30 uppercase tracking-wider">
            <AlertCircle className="w-4 h-4" />
            Erro 404
          </div>

          {/* TÍTULO */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            Página não encontrada ou não existe!
          </h1>

          {/* DESCRIÇÃO */}
          <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            O endereço que tentou acessar pode ter sido alterado, removido ou está temporariamente indisponível.
          </p>

          {/* BOTÕES DE AÇÃO */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* BOTÃO PRINCIPAL (VERDE-LIMA) */}
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8eb825] hover:bg-[#7ca31e] text-white font-semibold py-3.5 px-6 rounded-xl transition-all text-sm shadow-sm"
            >
              <Home className="w-4 h-4" />
              Ir para a Página Inicial
            </Link>

            {/* BOTÃO SECUNDÁRIO (FUNDO SLATE / BORDAS SUAVES) */}
            <Link
              href="/contato"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-semibold py-3.5 px-6 rounded-xl transition-all text-sm"
            >
              <HelpCircle className="w-4 h-4" />
              Central de Ajuda
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}