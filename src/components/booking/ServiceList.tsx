// src/components/booking/ServiceList.tsx
"use client";

import { Service } from "@/types/service";
import { useServices } from "@/hooks/useServices";

type Props = {
  selectedService: Service | null;
  onSelect: (service: Service) => void;
};

export default function ServiceList({ selectedService, onSelect }: Props) {
  const { data: services, isLoading, isError } = useServices();

  if (isLoading) {
    return (
      <p className="text-gray-400 text-sm">Carregando Serviço... Aguarde</p>
    );
  }

  if (isError) {
    return (
      <p className="text-gray-400 text-sm">
        Não foi possivel carregar os arquivos, tente novamnte
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-serif text-2xl text-brand-gray">Escolha o serviço</h2>

      {services?.map((service) => {
        const active = selectedService?.id === service.id;
        return (
          <button
            key={service.id}
            onClick={() => onSelect(service)}
            className={`text-left border rounded-xl p-4 transition ${
              active
                ? "border-brand-teal bg-brand-blue-light/20"
                : "border-gray-200"
            }`}
          >
            <p className="font-semibold text-brand-gray">{service.title}</p>
            <p className="text-sm text-gray-500 mt-1">{service.description}</p>
            <p className="text-brand-teal font-bold mt-2">
              R$ {service.price.toFixed(2)}
            </p>
          </button>
        );
      })}
    </div>
  );
}
