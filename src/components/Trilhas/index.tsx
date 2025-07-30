import { ArrowRight } from 'lucide-react'
import { TrilhaTimeline } from '../TrilhaTimeline'

type Trilha = {
  id: number
  titulo: string
}

const trilhas: Trilha[] = [
  { id: 1, titulo: 'Trilha React' },
  { id: 2, titulo: 'Trilha Firebase' }
]

export const Trilhas = () => {
  const verDetalhes = (titulo: string) => {
    console.log(`Ver detalhes da ${titulo}`)
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Timeline da Trilha */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">🚶‍♂️ Progresso na Trilha</h2>
        <TrilhaTimeline />
      </div>

      {/* Lista de Trilhas Recentes */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">📚 Suas Trilhas Recentes</h2>
        <ul className="space-y-3">
          {trilhas.map((trilha) => (
            <li
              key={trilha.id}
              className="group p-4 border border-gray-200 rounded-lg flex justify-between items-center bg-white hover:shadow-sm hover:border-indigo-400 transition"
            >
              <span className="text-gray-800 font-medium">{trilha.titulo}</span>
              <button
                onClick={() => verDetalhes(trilha.titulo)}
                className="flex items-center justify-center w-8 h-8 rounded-full text-indigo-600 hover:bg-indigo-50 transition group-hover:translate-x-1 focus-visible:outline focus-visible:outline-indigo-500"
                aria-label={`Ver detalhes de ${trilha.titulo}`}
              >
                <ArrowRight size={18} strokeWidth={2} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
