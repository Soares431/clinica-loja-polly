import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Política de Privacidade | Pollyanna Barreto",
  description: "Entenda como tratamos e protegemos seus dados pessoais de acordo com a LGPD.",
};

export default function PoliticaDePrivacidade() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      {/* 1. SEÇÃO CABEÇALHO HERO */}
      <section className="bg-gradient-to-b from-brand-teal-deep to-[#14434a] text-white py-12 md:py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-brand-teal/20 text-white border border-brand-teal/40 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
              Transparência & Segurança
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Política de Privacidade
          </h1>
          <p className="text-footer-text-soft/90 text-sm sm:text-base max-w-2xl leading-relaxed">
            Sua privacidade é fundamental. Esta política explica como coletamos, usamos e protegemos suas informações pessoais.
          </p>
        </div>
      </section>

      {/* 2. CONTEÚDO PRINCIPAL DA POLÍTICA */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-8">
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-brand-teal/10 shadow-sm space-y-8 text-sm sm:text-base leading-relaxed text-ink/90">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-brand-teal-deep border-b border-brand-teal/10 pb-2">
              1. Informações Gerais
            </h2>
            <p>
              Esta Política de Privacidade contém informações sobre a coleta, uso, armazenamento, tratamento e proteção dos dados pessoais dos usuários do site, com a finalidade de demonstrar absoluta transparência e cumprir com as disposições da <strong>Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018)</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-brand-teal-deep border-b border-brand-teal/10 pb-2">
              2. Coleta de Dados Pessoais
            </h2>
            <p>Coletamos os seguintes dados pessoais fornecidos diretamente por você:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-ink-soft">
              <li><strong>Dados de Checkout/Loja:</strong> Nome completo, endereço de e-mail e número de telefone/WhatsApp necessários para o processamento de compras e emissão de cobranças.</li>
              <li><strong>Dados de Agendamento ou Contato:</strong> Nome, e-mail e telefone enviados por meio de formulários ou botões diretos de atendimento.</li>
              <li><strong>Dados de Navegação:</strong> Informações técnicas coletadas automaticamente (como endereço IP, tipo de navegador e páginas acessadas) para fins de otimização de performance e navegação.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-brand-teal-deep border-b border-brand-teal/10 pb-2">
              3. Finalidade do Tratamento dos Dados
            </h2>
            <p>Os dados pessoais coletados têm as seguintes finalidades:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-ink-soft">
              <li>Processar e entregar seus pedidos realizados na loja online;</li>
              <li>Confirmar pagamentos e fornecer atualizações sobre suas compras;</li>
              <li>Facilitar o agendamento de consultas e atendimentos em neuropsicologia;</li>
              <li>Responder a dúvidas, sugestões ou solicitações enviadas através dos nossos canais de comunicação.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-brand-teal-deep border-b border-brand-teal/10 pb-2">
              4. Compartilhamento de Dados
            </h2>
            <p>
              Não vendemos, alugamos ou comercializamos seus dados pessoais. O compartilhamento ocorre estritamente para o cumprimento do serviço prestado, incluindo:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-ink-soft">
              <li><strong>Plataformas e Gateways de Pagamento:</strong> Necessários para o processamento seguro das transações financeiras.</li>
              <li><strong>Autoridades Judiciais ou Regulatórias:</strong> Caso seja exigido por lei ou determinação judicial.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-brand-teal-deep border-b border-brand-teal/10 pb-2">
              5. Segurança dos Dados
            </h2>
            <p>
              Empregamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, destruição, perda, alteração ou qualquer forma de tratamento inadequado ou ilícito. Nossas páginas utilizam protocolo criptografado HTTPS/SSL.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-brand-teal-deep border-b border-brand-teal/10 pb-2">
              6. Direitos do Titular dos Dados
            </h2>
            <p>
              De acordo com a LGPD, você tem o direito de solicitar a qualquer momento a confirmação da existência de tratamento, o acesso aos seus dados, a correção de dados incompletos ou a eliminação dos seus dados pessoais da nossa base.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-brand-teal-deep border-b border-brand-teal/10 pb-2">
              7. Contato
            </h2>
            <p>
              Para exercer seus direitos de privacidade ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco através dos canais de atendimento indicados no rodapé deste site.
            </p>
          </section>

          <div className="pt-4 border-t border-brand-teal/10 flex items-center justify-between text-xs text-ink-soft">
            <span>Última atualização: Setembro de 2026</span>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-brand-teal hover:underline font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Voltar para o início
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}