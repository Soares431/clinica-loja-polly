import { Service } from "@/types/service";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex gap-4">
        <div className="w-11 h-11 shrink-0 rounded-xl bg-brand-green-light flex items-center justify-center">
          <Icon className="w-5 h-5 text-brand-green" strokeWidth={1.8} />
        </div>

        <div className="flex-1">
          <h3 className="font-serif text-lg text-brand-gray">
            {service.title}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed mt-2">
            {service.description}
          </p>

          <div className="flex gap-2 flex-wrap mt-3">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-brand-teal bg-brand-blue-light/50 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}