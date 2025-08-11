import { useState } from 'react'
import { Target, CheckCircle2, Circle, Plus, Trash2 } from 'lucide-react'
import { ModalAdicionarObjetivo } from './ModalAdicionarObjetivo'

type Objetivo = {
  titulo: string
  concluido: boolean
  progresso: number
  categoria?: string
  prazo?: string
}

export const ObjetivoSemana = () => {
  const [objetivos, setObjetivos] = useState<Objetivo[]>([
    {
      titulo: 'Finalizar trilha de React',
      concluido: true,
      progresso: 100,
      categoria: 'Estudo',
      prazo: '30/07/2025',
    },
    {
      titulo: 'Terminar curso de Tailwind',
      concluido: false,
      progresso: 60,
      categoria: 'Curso',
      prazo: '02/08/2025',
    },
    {
      titulo: 'Ler artigo sobre UI/UX',
      concluido: false,
      progresso: 20,
      categoria: 'Leitura',
      prazo: '04/08/2025',
    },
  ])

  const [modalAberto, setModalAberto] = useState(false)

  const total = objetivos.length
  const concluidos = objetivos.filter((o) => o.concluido).length
  const progressoGeral = Math.round((concluidos / total) * 100)

  function adicionarObjetivo(titulo: string) {
    const novo: Objetivo = {
      titulo,
      concluido: false,
      progresso: 0,
      categoria: 'Geral',
      prazo: 'Sem prazo',
    }
    setObjetivos([...objetivos, novo])
  }

  function removerObjetivo(index: number) {
    const confirmacao = window.confirm('Deseja realmente excluir esse objetivo?')
    if (confirmacao) {
      const novos = [...objetivos]
      novos.splice(index, 1)
      setObjetivos(novos)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700 w-full flex flex-col gap-5 transition-colors duration-300">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-800 dark:text-white flex items-center gap-2">
          <Target size={18} className="text-indigo-500" />
          Objetivo da Semana
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 dark:text-gray-400">{total} metas</span>
          <button
            onClick={() => setModalAberto(true)}
            className="text-sm text-indigo-600 hover:underline flex items-center gap-1"
          >
            <Plus size={14} />
            Adicionar
          </button>
        </div>
      </div>

      {/* Lista de objetivos */}
      <div className="max-h-[200px] overflow-y-auto pr-1">
        <ul className="flex flex-col gap-4 text-sm">
          {objetivos.map((obj, i) => (
            <li
              key={i}
              className={`flex flex-col gap-1 p-3 rounded-lg border transition-all ${
                obj.concluido
                  ? 'bg-green-50 dark:bg-green-100/10 border-green-200 dark:border-green-500 text-green-700 dark:text-green-300'
                  : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-medium">
                  {obj.concluido ? (
                    <CheckCircle2 size={16} className="text-green-500" />
                  ) : (
                    <Circle size={16} className="text-gray-400 dark:text-gray-500" />
                  )}
                  <span>{obj.titulo}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 dark:text-gray-500">{obj.prazo}</span>
                  <button
                    onClick={() => removerObjetivo(i)}
                    className="text-gray-400 dark:text-gray-500 hover:text-red-500 transition"
                    title="Remover objetivo"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs mt-1 text-gray-500 dark:text-gray-400">
                <span className="italic">{obj.categoria}</span>
                <span>{obj.progresso}%</span>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-2 rounded-full ${
                    obj.progresso === 100 ? 'bg-green-500' : 'bg-indigo-500'
                  } transition-all duration-500`}
                  style={{ width: `${obj.progresso}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Progresso geral */}
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>Progresso geral</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
            {progressoGeral}%
          </span>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded-full overflow-hidden">
          <div
            className={`h-2 rounded-full transition-all duration-700 ${
              progressoGeral === 100 ? 'bg-green-500' : 'bg-indigo-500'
            }`}
            style={{ width: `${progressoGeral}%` }}
          />
        </div>

        <p className="text-xs mt-1 text-gray-600 dark:text-gray-300">
          {progressoGeral === 100
            ? '🎯 Objetivos concluídos com sucesso! Excelente trabalho!'
            : progressoGeral >= 60
            ? '🚀 Você está indo muito bem, continue firme!'
            : '✨ Vamos focar em uma meta por vez. Você consegue!'}
        </p>
      </div>

      {/* Modal */}
      <ModalAdicionarObjetivo
        aberto={modalAberto}
        aoFechar={() => setModalAberto(false)}
        aoAdicionar={adicionarObjetivo}
      />
    </div>
  )
}
