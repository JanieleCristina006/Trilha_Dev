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
    <div className="bg-white p-6 rounded-xl shadow flex flex-col gap-6">
      <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
        🎓 Gerar Plano de Estudos  com IA
      </h2>

      {/* Formulário */}
      <form className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <input
          type="text"
          placeholder="Ex: React"
          className="flex-1 border border-gray-300 p-2 rounded-md text-sm"
        />
        <input
          type="text"
          placeholder="Ex: 4 semanas"
          className="flex-1 border border-gray-300 p-2 rounded-md text-sm"
        />
        <button
          type="button"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition text-sm w-full sm:w-auto"
        >
          Gerar Plano
        </button>
      </form>

      {/* Plano de Estudos */}
      <div className="flex flex-col gap-4">
        <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2">
          📘 Plano de Estudos
        </h3>

        <div className="grid gap-3">
          {plano.map((semana) => (
            <div
              key={semana.numero}
              className="border-l-4 border-indigo-500 pl-4 pr-3 py-2 bg-gray-50 rounded-md shadow-sm"
            >
              <p className="text-sm text-indigo-700 font-semibold">
                Semana {semana.numero} — {semana.titulo}
              </p>
              <p className="text-sm text-gray-700 mt-1">{semana.conteudo}</p>
            </div>
          ))}
        </div>

        {/* Botão de PDF no final */}
        <div className="flex justify-end mt-2">
          <button
            className="flex items-center gap-1 text-indigo-600 text-xs font-medium hover:underline"
          >
            <Download size={14} />
            Baixar Plano
          </button>
        </div>
      </div>
    </div>
  )
}
