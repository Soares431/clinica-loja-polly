// clinica-frontend/src/app/agendamento/page.tsx
import Link from "next/link";

export default function Agendamento() {
  return (
    <main className="max-w-2xl mx-auto px-8 py-24 text-center">
      <h1 className="font-serif text-3xl text-brand-gray mb-4">Agendar Consulta</h1>
      <p className="text-gray-600 mb-8">
        Você será direcionado para o nosso sistema de agendamento.
      </p>
      <Link
        href="http://localhost:3001"
        className="inline-block bg-brand-teal text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
      >
        Ir para o Agendamento
      </Link>
    </main>
  );
}