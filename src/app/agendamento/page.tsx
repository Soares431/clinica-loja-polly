import BookingForm from "@/components/BookingForm";

export default function Agendamento() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-16">
      <div className="mb-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-6 h-[2px] bg-brand-green" />
          <span className="font-script text-xl text-brand-green">Agendamento</span>
        </div>
        <h1 className="font-serif text-4xl text-brand-gray">
          Marque sua consulta
        </h1>
        <p className="text-gray-600 mt-2">
          Escolha o melhor dia e horário para o seu atendimento online.
        </p>
      </div>

      <BookingForm />
    </main>
  );
}