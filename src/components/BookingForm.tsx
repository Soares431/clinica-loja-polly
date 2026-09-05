"use client";

import { useState } from "react";
import { availability } from "@/data/availability";

function formatDateLabel(date: string) {
  const d = new Date(date + "T00:00:00");
  return d.toLocaleDateString("pt-BR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
}

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const selectedDay = availability.find((d) => d.date === selectedDate);
  const canSubmit = selectedDate && selectedTime && name && email && phone;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    // Por enquanto só simula a confirmação — sem backend ainda.
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <div className="bg-brand-green-light/30 border border-brand-green/30 rounded-2xl p-8 text-center max-w-lg mx-auto">
        <h2 className="font-serif text-2xl text-brand-gray mb-2">
          Consulta confirmada!
        </h2>
        <p className="text-gray-600">
          {name}, sua consulta ficou marcada para{" "}
          <strong>{formatDateLabel(selectedDate!)}</strong> às{" "}
          <strong>{selectedTime}</strong>. Enviamos os detalhes para{" "}
          {email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      {/* Seleção de data */}
      <div className="mb-8">
        <h2 className="font-serif text-xl text-brand-gray mb-4">
          1. Escolha o dia
        </h2>
        <div className="flex gap-3 flex-wrap">
          {availability.map((day) => (
            <button
              type="button"
              key={day.date}
              onClick={() => {
                setSelectedDate(day.date);
                setSelectedTime(null);
              }}
              className={`px-4 py-3 rounded-xl border text-sm font-medium capitalize transition ${
                selectedDate === day.date
                  ? "bg-brand-teal text-white border-brand-teal"
                  : "border-brand-blue-light text-brand-gray hover:border-brand-teal"
              }`}
            >
              {formatDateLabel(day.date)}
            </button>
          ))}
        </div>
      </div>

      {/* Seleção de horário */}
      {selectedDay && (
        <div className="mb-8">
          <h2 className="font-serif text-xl text-brand-gray mb-4">
            2. Escolha o horário
          </h2>
          <div className="flex gap-3 flex-wrap">
            {selectedDay.times.map((time) => (
              <button
                type="button"
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                  selectedTime === time
                    ? "bg-brand-green text-white border-brand-green"
                    : "border-brand-blue-light text-brand-gray hover:border-brand-green"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Dados do paciente */}
      {selectedTime && (
        <div className="mb-8">
          <h2 className="font-serif text-xl text-brand-gray mb-4">
            3. Seus dados
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-brand-blue-light rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-teal sm:col-span-2"
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-brand-blue-light rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-teal"
              required
            />
            <input
              type="tel"
              placeholder="Telefone / WhatsApp"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-brand-blue-light rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-teal"
              required
            />
          </div>
        </div>
      )}

      {/* Confirmar */}
      {selectedTime && (
        <button
          type="submit"
          disabled={!canSubmit}
          className="bg-brand-teal text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Confirmar agendamento
        </button>
      )}
    </form>
  );
}