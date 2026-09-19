"use client"

import ServiceCard from "@/components/ServiceCard";
import { useServices } from "@/hooks/useServices";

export default function ServicosContents() {

  const{data: services, isLoading, isError} = useServices();

  return (
    <main className="max-w-4xl mx-auto px-8 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-6 h-[2px] bg-brand-green" />
          <span className="font-script text-xl text-brand-green">Serviços</span>
        </div>
        <h1 className="font-serif text-4xl text-brand-gray">
          Como posso te ajudar
        </h1>
        <p className="text-gray-600 mt-2 max-w-xl">
          Atendimento online estruturado para diferentes necessidades, do
          diagnóstico ao acompanhamento contínuo.
        </p>
      </div>

    
      
      <div className="flex flex-col gap-6">
        {Array.isArray(services) &&  services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </main>
  );
}