"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HelpCircle,
} from "lucide-react";

interface FaqItem {
  pergunta: string;
  resposta: string;
}

interface FaqCategoria {
  titulo: string;
  itens: FaqItem[];
}

export default function PaginaAjuda() {
  // Estado para o formulário de contato
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Estado para controle dos acordeões do FAQ por categoria
  const [openSection, setOpenSection] = useState<{
    [key: string]: number | null;
  }>({
    agendamento: 0, // Inicia com a primeira dúvida de agendamento aberta, como nas imagens
    pagamentos: null,
    produtos: null,
  });

  const toggleAccordion = (categoria: string, index: number) => {
    setOpenSection((prev) => ({
      ...prev,
      [categoria]: prev[categoria] === index ? null : index,
    }));
  };

  const mensagemWhatsapp =
    "Olá! Gostaria de tirar algumas dúvidas e obter mais informações sobre o atendimento.";
  const linkWhatsapp = `https://wa.me/558199179913?text=${encodeURIComponent(
    mensagemWhatsapp,
  )}`;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  // Dados das Dúvidas Frequentes (Conteúdo fiel às fotos + Novas seções)
  const faqData: { [key: string]: FaqCategoria } = {
    agendamento: {
      titulo: "Antes de agendar",
      itens: [
        {
          pergunta: "Quanto tempo dura a avaliação neuropsicológica?",
          resposta:
            "O tempo da consulta pode variar entre 30 minutos e 1 hora, dependendo da situação e das necessidades do atendimento. 😊",
        },
        {
          pergunta: "Quais são as formas de pagamento?",
          resposta:
            "Aceitamos pagamentos em dinheiro, PIX e cartões de débito ou crédito.",
        },
        {
          pergunta: "Como funciona o cancelamento ou remarcação?",
          resposta:
            "Entre em contato conosco pelo WhatsApp ou e-mail, identifique-se e explique sua situação. Somos transparentes em relação a qualquer ocorrência e faremos o possível para ajudar você da melhor forma 🤩.",
        },
      ],
    },
    pagamentos: {
      titulo: "Pagamentos & Checkout",
      itens: [
        {
          pergunta: "Quais bandeiras de cartão são aceitas na loja online?",
          resposta:
            "Aceitamos as principais bandeiras do mercado, incluindo Visa, Mastercard, Elo, Hipercard e American Express.",
        },
        {
          pergunta: "O pagamento por PIX é aprovado na hora?",
          resposta:
            "Sim! A aprovação via PIX é instantânea e seu agendamento ou pedido na loja é confirmado imediatamente.",
        },
        {
          pergunta: "Posso parcelar compras de materiais ou consultas?",
          resposta:
            "Sim, oferecemos parcelamento em até 12x no cartão de crédito diretamente no checkout da loja ou presencialmente.",
        },
      ],
    },
    produtos: {
      titulo: "Produtos & Materiais Digitais",
      itens: [
        {
          pergunta:
            "Como recebo os arquivos e-books ou materiais digitais comprados?",
          resposta:
            "Após a confirmação do pagamento, o link de download é enviado automaticamente para o seu e-mail cadastrado.",
        },
        {
          pergunta: "Qual o prazo de entrega para produtos físicos?",
          resposta:
            "O prazo e valor do frete são calculados diretamente na página de checkout de acordo com o seu CEP.",
        },
        {
          pergunta: "Como solicitar suporte em relação a um produto adquirido?",
          resposta:
            "Você pode utilizar o formulário abaixo nesta mesma página ou nos chamar diretamente no WhatsApp com o número do seu pedido.",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-bg text-ink">
      {/* 1. SEÇÃO HERO CABEÇALHO DA PÁGINA */}
      <section className="bg-gradient-to-b from-brand-teal-deep to-[#14434a] text-white py-12 md:py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-brand-teal/20 text-white border border-brand-teal/40 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-brand-teal" />
              Central de Ajuda
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Como Podemos Ajudar?
          </h1>
          <p className="text-footer-text-soft/90 text-sm sm:text-base max-w-2xl leading-relaxed">
            Consulte nossas dúvidas frequentes sobre agendamentos, pagamentos e
            produtos ou entre em contato direto com a nossa equipe.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-16">
        {/* 2. SEÇÃO DE CONTATO E FORMULÁRIO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COLUNA DA ESQUERDA: CANAIS DE ATENDIMENTO */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-teal/10 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-brand-teal-deep">
                Canais de Atendimento
              </h2>
              <p className="text-sm text-ink-soft leading-relaxed">
                Ainda ficou com alguma dúvida? Escolha o meio mais conveniente
                para falar diretamente conosco.
              </p>

              <div className="space-y-5 pt-2">
                {/* Telefone / WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-teal/10 text-brand-teal rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-semibold text-ink-soft uppercase tracking-wider">
                      Telefone / WhatsApp
                    </h3>
                    <p className="text-sm font-medium text-ink">
                      (81) 9917-9913
                    </p>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-teal/10 text-brand-teal rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-semibold text-ink-soft uppercase tracking-wider">
                      E-mail
                    </h3>
                    <p className="text-sm font-medium text-ink break-all">
                      desenvolvimentopsi26@gmail.com
                    </p>
                  </div>
                </div>

                {/* Endereço */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-teal/10 text-brand-teal rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-semibold text-ink-soft uppercase tracking-wider">
                      Consultório
                    </h3>
                    <p className="text-sm font-medium text-ink leading-relaxed">
                      R. João Dourado Filho, 88 – sala 06
                      <br />
                      Piedade — Jaboatão dos Guararapes/PE
                      <br />
                      CEP 54400-150
                    </p>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-teal/10 text-brand-teal rounded-xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-semibold text-ink-soft uppercase tracking-wider">
                      Atendimento
                    </h3>
                    <p className="text-sm font-medium text-ink">
                      Segunda a Sexta: 08h às 18h
                    </p>
                  </div>
                </div>
              </div>

              {/* Botão de Destaque WhatsApp */}
              <div className="pt-4 border-t border-brand-teal/10">
                <a
                  href={linkWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Conversar no WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* COLUNA DA DIREITA: FORMULÁRIO DE MENSAGEM */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-teal/10 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-brand-teal-deep">
                Envie uma Mensagem
              </h2>

              {submitted ? (
                <div className="bg-brand-teal/10 border border-brand-teal/20 rounded-2xl p-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-brand-teal mx-auto" />
                  <h3 className="font-serif text-xl font-bold text-brand-teal-deep">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-sm text-ink-soft max-w-md mx-auto">
                    Agradecemos o seu contato. Sua mensagem foi recebida e
                    responderemos em breve.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-brand-teal hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-ink-soft mb-1">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={formData.nome}
                      onChange={(e) =>
                        setFormData({ ...formData, nome: e.target.value })
                      }
                      className="w-full border border-brand-teal/20 bg-bg rounded-xl px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-brand-teal transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-ink-soft mb-1">
                        E-mail
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full border border-brand-teal/20 bg-bg rounded-xl px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-brand-teal transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-ink-soft mb-1">
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="(81) 90000-0000"
                        value={formData.telefone}
                        onChange={(e) =>
                          setFormData({ ...formData, telefone: e.target.value })
                        }
                        className="w-full border border-brand-teal/20 bg-bg rounded-xl px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-brand-teal transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-ink-soft mb-1">
                      Mensagem
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Como podemos te ajudar?"
                      value={formData.mensagem}
                      onChange={(e) =>
                        setFormData({ ...formData, mensagem: e.target.value })
                      }
                      className="w-full border border-brand-teal/20 bg-bg rounded-xl px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-brand-teal transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-teal text-white font-semibold py-3 px-6 rounded-xl hover:bg-brand-teal-deep transition-all text-sm shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
        {/* 3. SEÇÃO DE DÚVIDAS FREQUENTES (FAQ) */}
        <section className="space-y-10">
          {Object.entries(faqData).map(([catKey, categoria]) => (
            <div key={catKey} className="max-w-3xl mx-auto space-y-4">
              {/* Título com os traços no padrão das fotos */}
              <div className="text-center mb-6">
                <p className="font-serif italic text-brand-teal text-base">
                  — Dúvidas frequentes
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-teal-deep">
                  {categoria.titulo}
                </h2>
              </div>

              {/* Lista de Acordeões estilo cartão */}
              <div className="space-y-3">
                {categoria.itens.map((item, index) => {
                  const isOpen = openSection[catKey] === index;

                  return (
                    <div
                      key={index}
                      className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? "border-brand-teal/40 shadow-sm"
                          : "border-brand-teal/15 hover:border-brand-teal/30"
                      }`}
                    >
                      <button
                        onClick={() => toggleAccordion(catKey, index)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-brand-teal-deep text-sm sm:text-base focus:outline-none"
                      >
                        <span>{item.pergunta}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-brand-teal shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-brand-teal shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-5 pt-1 border-t border-brand-teal/20 text-ink-soft text-sm sm:text-base leading-relaxed">
                          <p>{item.resposta}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        <hr className="border-brand-teal/10 my-8" />
      </main>
    </div>
  );
}
