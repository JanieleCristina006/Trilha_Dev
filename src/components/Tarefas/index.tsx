import { useState } from 'react'
import { Plus, Trash2, ChevronRight } from 'lucide-react'

type Tarefa = {
  titulo: string
  concluida: boolean
  tag: string
  vencimento: string
}

export const Tarefas = () => {
  const [filtro, setFiltro] = useState<'todas' | 'concluidas' | 'pendentes'>('todas')

  const tarefas: Tarefa[] = [
    { titulo: 'Estudar React', concluida: true, tag: 'Estudo', vencimento: '2025-07-29' },
    { titulo: 'Revisar CSS', concluida: false, tag: 'Revisão', vencimento: '2025-07-30' },
    { titulo: 'Praticar lógica', concluida: false, tag: 'Exercício', vencimento: '2025-07-30' }
  ]

  const tarefasFiltradas = tarefas.filter((t) => {
    if (filtro === 'concluidas') return t.concluida
    if (filtro === 'pendentes') return !t.concluida
    return true
  })

  const totalConcluidas = tarefas.filter((t) => t.concluida).length
  const totalPendentes = tarefas.filter((t) => !t.concluida).length

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 w-full flex flex-col gap-5">
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-gray-800">
          📝 Tarefas do Dia <span className="text-sm text-gray-400">(30/07/2025)</span>
        </h2>

        <div className="flex items-center gap-3">
          <button className="text-sm text-indigo-600 hover:underline">Alterar</button>
          <button className="flex items-center gap-2 text-sm bg-indigo-600 text-white px-3 py-1.5 rounded hover:bg-indigo-500 transition">
            <Plus size={16} />
            Adicionar tarefa
          </button>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-500">
        <button
          onClick={() => setFiltro('todas')}
          className={`pb-1 border-b-2 ${
            filtro === 'todas' ? 'border-indigo-600 text-indigo-600' : 'border-transparent hover:text-gray-700'
          }`}
        >
          Todas ({tarefas.length})
        </button>
        <button
          onClick={() => setFiltro('concluidas')}
          className={`pb-1 border-b-2 ${
            filtro === 'concluidas' ? 'border-indigo-600 text-indigo-600' : 'border-transparent hover:text-gray-700'
          }`}
        >
          Concluídas ({totalConcluidas})
        </button>
        <button
          onClick={() => setFiltro('pendentes')}
          className={`pb-1 border-b-2 ${
            filtro === 'pendentes' ? 'border-indigo-600 text-indigo-600' : 'border-transparent hover:text-gray-700'
          }`}
        >
          Pendentes ({totalPendentes})
        </button>
      </div>

      {/* Lista de tarefas */}
      <ul className="space-y-3">
        {tarefasFiltradas.length === 0 && (
          <li className="text-sm text-gray-500 italic">Nenhuma tarefa encontrada.</li>
        )}

        {tarefasFiltradas.map((tarefa, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-sm transition"
          >
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={tarefa.concluida}
                readOnly
                className="mt-1"
              />
              <div>
                <p className={`text-sm font-medium ${tarefa.concluida ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                  {tarefa.titulo}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded">
                    {tarefa.tag}
                  </span>
                  <span className="text-xs text-gray-400">Vence em {tarefa.vencimento}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-3 sm:mt-0">
              <button className="text-gray-400 hover:text-gray-700 transition">
                <ChevronRight size={16} />
              </button>
              <button className="text-gray-400 hover:text-red-500 transition">
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
