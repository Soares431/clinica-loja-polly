import { Lightbulb, RefreshCw, Users } from "lucide-react";
import { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "avaliacao-neuropsicologica",
    icon: Lightbulb,
    title: "Avaliação Neuropsicológica",
    description:
    "Avaliação neuropsicológica completa para adultos, investigando atenção, memória, linguagem, raciocínio e funções executivas. Processo estruturado com entrevista, aplicação de instrumentos específicos e devolutiva com laudo.",
    tags: ["Atenção", "Memória", "Funções executivas"],
  },
  {
    id: "reabilitacao-neuropsicologica",
    icon: RefreshCw,
    title: "Reabilitação Neuropsicológica",
    description:
      "Processo de intervenção estruturado para estimular e fortalecer habilidades cognitivas como atenção, memória, planejamento, organização e linguagem. Indicado para crianças, adolescentes e idosos com dificuldades cognitivas.",

    tags: ["Habilidades Cognitivas", "Jovens"],
  },
  {
    id: "psicoterapia-online",
    icon: Users,
    title: "Sessão de Psicoterapia Online",
    description:
      "Sessões de psicoterapia online por videochamada, com a mesma qualidade e ética do atendimento presencial. Atendimento para adolescentes, adultos e idosos. Praticidade de cuidar da sua saúde mental de onde estiver, com horários flexíveis. Pacote mensal de 4 sessões de psicoterapia.",
 
    tags: ["Crianças", "Adolescentes", "Adultos"],
  },
];