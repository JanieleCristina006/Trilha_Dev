import { Trophy, UserCircle } from 'lucide-react'

const trilhas = [
  { nome: 'Semana 1', concluida: true },
  { nome: 'Semana 2', concluida: true },
  { nome: 'Semana 3', concluida: false },
  { nome: 'Semana 4', concluida: false },
]

export const TrilhaTimeline = () => {
  const progresso = trilhas.findIndex(t => !t.concluida)
  const objetivoConcluido = trilhas.every(t => t.concluida)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 transition-colors">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        📚 Suas Trilhas Recentes
      </h2>

      {/* Linha e etapas */}
      <div className="flex items-center justify-between relative px-2">
        {/* Linha base */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 dark:bg-gray-600 z-0" />

        {/* Etapas */}
        {trilhas.map((etapa, index) => (
          <div key={index} className="z-10 flex flex-col items-center w-1/4 relative">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                ${index === progresso
                  ? 'bg-indigo-500 text-white animate-bounce'
                  : etapa.concluida
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300 dark:bg-gray-600 text-white'}
              `}
            >
              {index === progresso ? (
                <UserCircle size={20} />
              ) : etapa.concluida ? (
                '✓'
              ) : (
                index + 1
              )}
            </div>
            <span className="text-sm mt-2 text-center text-gray-700 dark:text-gray-200">
              {etapa.nome}
            </span>
          </div>
        ))}

        {/* Troféu final */}
        <div className="z-10 flex flex-col items-center w-1/4 relative">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 
              ${objetivoConcluido ? 'bg-yellow-400' : 'bg-gray-300 dark:bg-gray-600'}`}
          >
            <Trophy size={20} />
          </div>
          <span className="text-sm mt-2 text-center text-gray-700 dark:text-gray-200">
            Conquista
          </span>
        </div>
      </div>

      {/* Mensagem final */}
      {objetivoConcluido && (
        <p className="text-center text-green-600 dark:text-green-400 font-medium mt-4">
          🎉 Parabéns! Você concluiu o objetivo da semana com sucesso!
        </p>
      )}
    </div>
  )
}
