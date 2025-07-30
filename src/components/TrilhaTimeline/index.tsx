import { Trophy, UserCircle } from 'lucide-react'

const trilhas = [
  { nome: 'Semana 1', concluida: true },
  { nome: 'Semana 2', concluida: true },
  { nome: 'Semana 3', concluida: false },
  { nome: 'Semana 4', concluida: false },
]

export const TrilhaTimeline = () => {
  const progresso = trilhas.findIndex(t => !t.concluida) // onde o avatar está
  const objetivoConcluido = trilhas.every(t => t.concluida)

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">📚 Suas Trilhas Recentes</h2>

      <div className="flex items-center justify-between relative px-2">
        {/* Linha da trilha */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 z-0" />

        {trilhas.map((etapa, index) => (
          <div key={index} className="z-10 flex flex-col items-center relative w-1/4">
            {/* Avatar ou check */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center
                ${index === progresso ? 'bg-indigo-500 text-white' : etapa.concluida ? 'bg-green-500 text-white' : 'bg-gray-300 text-white'}
              `}
            >
              {index === progresso ? <UserCircle size={20} /> : etapa.concluida ? '✓' : index + 1}
            </div>
            <span className="text-sm mt-2 text-center">{etapa.nome}</span>
          </div>
        ))}

        {/* Troféu final */}
        <div className="z-10 flex flex-col items-center relative w-1/4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${objetivoConcluido ? 'bg-yellow-400' : 'bg-gray-300'} text-white`}>
            <Trophy size={20} />
          </div>
          <span className="text-sm mt-2 text-center">Conquista</span>
        </div>
      </div>

      {objetivoConcluido && (
        <p className="text-center text-green-600 font-medium mt-4">
          🎉 Parabéns! Você concluiu o objetivo da semana com sucesso!
        </p>
      )}
    </div>
  )
}
