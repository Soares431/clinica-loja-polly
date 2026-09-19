// src/components/booking/BookingForm.tsx
"use client";

import { useState } from "react";
import { Service } from "@/types/service";
import { apiFetch } from "@/lib/api-client";

type Props = { selectedService: Service | null };
type Status = "idle" | "loading" | "success" | "conflict" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function todayISO() {
  return new Date().toISOString().split("T")[0];
}

export default function BookingForm({ selectedService }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const [errors, setErrors] = useState<{ email?: string; date?: string }>({});

  function handlePhoneChange(value: string) {
    // Mantém só dígitos, no máximo 11 (DDD + 9 dígitos)
    const digitsOnly = value.replace(/\D/g, "").slice(0, 11);
    setPhone(digitsOnly);
  }

  function handleEmailChange(value: string) {
    setEmail(value);
    if (value && !EMAIL_REGEX.test(value)) {
      setErrors((prev) => ({ ...prev, email: "Digite um e-mail válido." }));
    } else {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  }

  function handleDateChange(value: string) {
    setDate(value);
    if (value && value < todayISO()) {
      setErrors((prev) => ({
        ...prev,
        date: "A data não pode ser no passado.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, date: undefined }));
    }
  }

  const hasErrors = Boolean(errors.email || errors.date);
  const phoneValid = phone.length >= 10; // DDD + número, sem o 9º dígito é 10, com é 11

  const canSubmit =
    selectedService &&
    name &&
    email &&
    phoneValid &&
    date &&
    time &&
    !hasErrors;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("loading");

    try {
      // 1. Cria o agendamento
      const appointment = await apiFetch<{ id: string }>("/appointment", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone,
          serviceId: selectedService!.id,
          date,
          time,
        }),
      });

      // 2. Cria a cobrança vinculada a esse agendamento
      const payment = await apiFetch<{ checkoutUrl: string }>("/payment", {
        method: "POST",
        body: JSON.stringify({
          title: `Consulta - ${selectedService!.title}`,
          amount: selectedService!.price,
          appointmentId: appointment.id,
        }),
      });

      // 3. Redireciona pro checkout do Mercado Pago
      window.location.href = payment.checkoutUrl;
    } catch (err) {
      const error = err as Error & { status?: number };
      setStatus(error.status === 409 ? "conflict" : "error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-brand-green-light/30 border border-brand-green/30 rounded-2xl p-8 text-center">
        <h2 className="font-serif text-2xl text-brand-gray mb-2">
          Consulta confirmada!
        </h2>
        <p className="text-gray-600">
          {name}, sua consulta de <strong>{selectedService?.title}</strong>{" "}
          ficou marcada para <strong>{date}</strong> às <strong>{time}</strong>.
          Enviamos os detalhes para {email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="font-serif text-2xl text-brand-gray">Seus dados</h2>

      {!selectedService && (
        <p className="text-sm text-gray-400">
          Escolha um serviço ao lado para continuar.
        </p>
      )}

      {selectedService && (
        <p className="text-sm text-brand-teal">
          Serviço selecionado: <strong>{selectedService.title}</strong>
        </p>
      )}

      {status === "conflict" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
          Esse horário acabou de ser reservado por outra pessoa. Escolha outro
          horário.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
          Não foi possível agendar agora. Tente novamente em instantes.
        </p>
      )}

      <label className="text-[15px] text-brand-teal">Paciente</label>
      <input
        placeholder="Nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded-lg px-4 py-2"
      />

      <label className="text-[15px] text-brand-teal">E-mail</label>
      <input
        placeholder="E-mail"
        value={email}
        onChange={(e) => handleEmailChange(e.target.value)}
        className={`border rounded-lg px-4 py-2 ${errors.email ? "border-red-400" : ""}`}
      />
      {errors.email && (
        <p className="text-xs text-red-500 -mt-2">{errors.email}</p>
      )}

      <label className="text-[15px] text-brand-teal">
        Telefone (apenas números)
      </label>
      <input
        placeholder="81987654321"
        value={phone}
        onChange={(e) => handlePhoneChange(e.target.value)}
        inputMode="numeric"
        className="border rounded-lg px-4 py-2"
      />
      {phone && !phoneValid && (
        <p className="text-xs text-red-500 -mt-2">
          Telefone incompleto — inclua o DDD.
        </p>
      )}

      <label className="text-[15px] text-brand-teal">Data da Consulta</label>
      <input
        type="date"
        value={date}
        min={todayISO()}
        onChange={(e) => handleDateChange(e.target.value)}
        className={`border rounded-lg px-4 py-2 ${errors.date ? "border-red-400" : ""}`}
      />
      {errors.date && (
        <p className="text-xs text-red-500 -mt-2">{errors.date}</p>
      )}

      <label className="text-[15px] text-brand-teal">Horário</label>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border rounded-lg px-4 py-2"
      />

      <button
        type="submit"
        disabled={!canSubmit || status === "loading"}
        className="bg-brand-teal text-white font-semibold py-3 rounded-full disabled:opacity-40"
      >
        {status === "loading" ? "Agendando..." : "Confirmar agendamento"}
      </button>
    </form>
  );
}
