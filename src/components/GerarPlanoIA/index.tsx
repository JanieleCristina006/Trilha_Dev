import { Download } from 'lucide-react'

type Semana = {
  numero: number
  titulo: string
  conteudo: string
}

const plano: Semana[] = [
  {
    numero: 1,
    titulo: 'Fundamentos do React',
    conteudo: 'JSX, componentes, props, useState'
  },
  {
    numero: 2,
    titulo: 'Ciclo de Vida e Navegação',
    conteudo: 'useEffect, roteamento, props avançadas'
  }
]

export const GerarPlanoIA = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow flex flex-col gap-6 w-full transition-colors duration-300">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
        🎓 Gerar Plano de Estudos com IA
      </h2>

      {/* Formulário */}
      <form className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Ex: React"
          className="flex-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Ex: 4 semanas"
          className="flex-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="button"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition text-sm w-full md:w-auto"
        >
          Gerar Plano
        </button>
      </form>

      {/* Resultado */}
      <div className="flex flex-col gap-4">
        <h3 className="text-base font-semibold text-gray-800 dark:text-white flex items-center gap-2">
          📘 Plano de Estudos
        </h3>

        <div className="grid gap-3">
          {plano.map((semana) => (
            <div
              key={semana.numero}
              className="border-l-4 border-indigo-500 pl-4 pr-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-md shadow-sm transition-colors duration-300"
            >
              <p className="text-sm text-indigo-700 dark:text-indigo-300 font-semibold">
                Semana {semana.numero} — {semana.titulo}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                {semana.conteudo}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-1">
          <button className="flex items-center gap-1 text-indigo-600 dark:text-indigo-300 text-xs font-medium hover:underline transition">
            <Download size={14} />
            Baixar Plano
          </button>
        </div>
      </div>
    </div>
  )
}
