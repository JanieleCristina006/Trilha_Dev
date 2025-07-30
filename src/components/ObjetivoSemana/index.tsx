import { Target, CheckCircle, Circle } from 'lucide-react'

type Objetivo = {
  titulo: string
  concluido: boolean
}

export const ObjetivoSemana = () => {
  const objetivos: Objetivo[] = [
    { titulo: 'Finalizar trilha de React', concluido: true },
    { titulo: 'Terminar curso de Tailwind', concluido: false },
    { titulo: 'Ler artigo sobre UI/UX', concluido: false }
  ]

  const total = objetivos.length
  const concluidos = objetivos.filter(obj => obj.concluido).length
  const progresso = Math.round((concluidos / total) * 100)

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 w-full flex flex-col gap-4">
      {/* Título no padrão do painel */}
      <h2 className="text-base font-semibold text-gray-700 flex items-center gap-2">
        <Target size={18} className="text-indigo-500" />
        Objetivo da Semana
      </h2>

      {/* Lista de objetivos */}
      <ul className="flex flex-col gap-2 text-sm">
        {objetivos.map((obj, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 p-2 rounded-md ${
              obj.concluido ? 'bg-green-50 text-green-700 line-through' : 'bg-gray-50 text-gray-800'
            }`}
          >
            {obj.concluido ? (
              <CheckCircle size={16} className="text-green-500" />
            ) : (
              <Circle size={16} className="text-gray-400" />
            )}
            {obj.titulo}
          </li>
        ))}
      </ul>

      {/* Barra de progresso */}
      <div className="flex flex-col gap-1 mt-1">
        <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
          <span>Progresso</span>
          <span className="text-indigo-600 font-semibold">{progresso}% concluído</span>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progresso}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">
          {progresso === 100
            ? '🎉 Parabéns! Você concluiu todos os objetivos da semana.'
            : 'Continue assim! Você está indo muito bem 💪'}
        </p>
      </div>
    </div>
  )
}
