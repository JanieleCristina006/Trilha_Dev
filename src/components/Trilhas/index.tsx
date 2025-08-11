import { ArrowRight } from "lucide-react";
import { TrilhaTimeline } from "./TrilhaTimeline";

type Trilha = {
  id: number;
  titulo: string;
};

const trilhas: Trilha[] = [
  { id: 1, titulo: "Trilha React" },
  { id: 2, titulo: "Trilha Firebase" },
];

export const Trilhas = () => {
  const verDetalhes = (titulo: string) => {
    console.log(`Ver detalhes da ${titulo}`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 transition-colors duration-300">
      {/* Progresso Timeline */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          🚶‍♂️ Progresso na Trilha
        </h2>
        <TrilhaTimeline />
      </div>

      {/* Trilhas Recentes */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          📚 Suas Trilhas Recentes
        </h2>
        <ul className="space-y-3">
          {trilhas.map((trilha) => (
            <li
              key={trilha.id}
              onClick={() => verDetalhes(trilha.titulo)}
              className="group p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex justify-between items-center bg-white dark:bg-gray-700 cursor-pointer hover:shadow-md hover:border-indigo-400 transition-all duration-300"
            >
              <span className="text-gray-800 dark:text-gray-100 font-medium">
                {trilha.titulo}
              </span>

              <div
                className="flex items-center justify-center w-8 h-8 rounded-full text-indigo-600 
                group-hover:bg-indigo-50 dark:group-hover:bg-indigo-400/10 
                group-hover:translate-x-1 transition-all duration-300"
              >
                <ArrowRight size={18} strokeWidth={2} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
