import { useState } from "react";
import {
  Plus,
  Trash2,
  ChevronRight,
  Filter,
  ArrowRight,
} from "lucide-react";

import { ModalAdicionarTarefa } from "./ModalAdicionarTarefa";
import { ModalEditarTarefa } from "./ModalEditarTarefa";
import { ModalConfirmarExclusao } from "./ModalConfirmarExclusao";

export type Tarefa = {
  titulo: string;
  descricao: string;
  vencimento: string;
  tags: string[];
  concluida: boolean;
};

export const Tarefas = () => {
  const [filtro, setFiltro] = useState<"todas" | "concluidas" | "pendentes">("todas");
  const [aberto, setAberto] = useState(false);
  const [editarAberto, setEditarAberto] = useState(false);
  const [modalExclusaoAberto, setModalExclusaoAberto] = useState(false);
  const [filtroAberto, setFiltroAberto] = useState(false);
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [tarefaSelecionada, setTarefaSelecionada] = useState<Tarefa | null>(null);

  const tarefas: Tarefa[] = [
    {
      titulo: "Estudar React",
      descricao: "Revisar useState e useEffect",
      vencimento: "29/08/2025",
      tags: ["Estudo"],
      concluida: true,
    },
    {
      titulo: "Revisar CSS",
      descricao: "Ver flexbox e grid",
      vencimento: "19/08/2025",
      tags: ["Revisao"],
      concluida: false,
    },
    {
      titulo: "Praticar lógica",
      descricao: "Resolver 5 exercícios",
      vencimento: "10/08/2025",
      tags: ["Exercicio"],
      concluida: false,
    },
  ];

  const tarefasFiltradas = tarefas.filter((t) => {
    const dentroDoPeriodo =
      (!dataInicio || t.vencimento >= dataInicio) &&
      (!dataFim || t.vencimento <= dataFim);

    if (filtro === "concluidas") return t.concluida && dentroDoPeriodo;
    if (filtro === "pendentes") return !t.concluida && dentroDoPeriodo;
    return dentroDoPeriodo;
  });

  const totalConcluidas = tarefas.filter((t) => t.concluida).length;
  const totalPendentes = tarefas.filter((t) => !t.concluida).length;

  function confirmarExclusao(tarefa: Tarefa) {
    setTarefaSelecionada(tarefa);
    setModalExclusaoAberto(true);
  }

  function excluirTarefa() {
    if (!tarefaSelecionada) return;
    console.log("Tarefa excluída:", tarefaSelecionada);
    setModalExclusaoAberto(false);
    setTarefaSelecionada(null);
  }

  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded shadow w-full transition-colors duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative">
        <h2 className="text-lg mb-1.5 font-semibold text-gray-800 dark:text-white">
          📝 Tarefas do Dia{" "}
          <span className="text-sm text-gray-400 dark:text-gray-300">
            (30/07/2025)
          </span>
        </h2>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setFiltroAberto(!filtroAberto)}
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition cursor-pointer"
            >
              <Filter size={16} />
              Filtrar
            </button>

            {filtroAberto && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg p-4 z-50">
                <label className="block text-xs text-gray-500 dark:text-gray-300 mb-1">
                  De:
                </label>
                <input
                  type="date"
                  value={dataInicio}
                  onChange={(e) => setDataInicio(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded px-2 py-1 mb-2 text-sm"
                />
                <label className="block text-xs text-gray-500 dark:text-gray-300 mb-1">
                  Até:
                </label>
                <input
                  type="date"
                  value={dataFim}
                  onChange={(e) => setDataFim(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded px-2 py-1 text-sm"
                />
                <button
                  onClick={() => setFiltroAberto(false)}
                  className="mt-3 w-full bg-indigo-600 text-white py-1.5 rounded text-sm hover:bg-indigo-500 cursor-pointer"
                >
                  Aplicar
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setAberto(true)}
            className="text-sm text-indigo-600 dark:text-indigo-300 hover:underline flex items-center gap-1 cursor-pointer"
          >
            Adicionar tarefa
            <Plus size={16} />
          </button>
        </div>
      </div>

      <ModalAdicionarTarefa aberto={aberto} aoFechar={() => setAberto(false)} />

      <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-500 dark:text-gray-300 mt-2">
        <button
          onClick={() => setFiltro("todas")}
          className={`pb-1 border-b-2 cursor-pointer ${
            filtro === "todas"
              ? "border-indigo-600 text-indigo-600 dark:text-indigo-400"
              : "border-transparent hover:text-gray-700 dark:hover:text-white"
          }`}
        >
          Todas ({tarefas.length})
        </button>
        <button
          onClick={() => setFiltro("concluidas")}
          className={`pb-1 border-b-2 cursor-pointer ${
            filtro === "concluidas"
              ? "border-indigo-600 text-indigo-600 dark:text-indigo-400"
              : "border-transparent hover:text-gray-700 dark:hover:text-white"
          }`}
        >
          Concluídas ({totalConcluidas})
        </button>
        <button
          onClick={() => setFiltro("pendentes")}
          className={`pb-1 border-b-2 cursor-pointer ${
            filtro === "pendentes"
              ? "border-indigo-600 text-indigo-600 dark:text-indigo-400"
              : "border-transparent hover:text-gray-700 dark:hover:text-white"
          }`}
        >
          Pendentes ({totalPendentes})
        </button>
      </div>

      <ul className="flex flex-col mt-3 gap-2 text-sm max-h-[250px] overflow-y-auto scrollbar-thin pr-1">
        {tarefasFiltradas.length === 0 && (
          <li className="text-sm text-gray-500 italic dark:text-gray-300">
            Nenhuma tarefa encontrada.
          </li>
        )}

        {tarefasFiltradas.map((tarefa, index) => (
          <li
            key={index}
            className="group flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md hover:shadow-sm hover:border-indigo-400 transition"
          >
            <div className="flex flex-col">
              <p className="font-medium text-gray-800 dark:text-white">
                {tarefa.titulo}
              </p>
              <div className="flex gap-2 mt-1 text-xs text-gray-500 dark:text-gray-300 font-normal">
                {tarefa.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-gray-400 dark:text-gray-400">
                  Vence em {tarefa.vencimento}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setTarefaSelecionada(tarefa);
                  setEditarAberto(true);
                }}
                className="text-indigo-600 dark:text-indigo-300 group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <ArrowRight size={18} strokeWidth={2} />
              </button>
              <button
                onClick={() => confirmarExclusao(tarefa)}
                className="text-gray-400 dark:text-red-400 hover:text-red-500 transition cursor-pointer"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {tarefaSelecionada && (
        <ModalEditarTarefa
          aberto={editarAberto}
          aoFechar={() => setEditarAberto(false)}
          tarefa={tarefaSelecionada}
          aoSalvar={(t) => {
            console.log("Tarefa atualizada:", t);
            setEditarAberto(false);
          }}
          aoExcluir={() => {
            console.log("Tarefa excluída (via edição):", tarefaSelecionada);
            setEditarAberto(false);
          }}
        />
      )}

      <ModalConfirmarExclusao
        aberto={modalExclusaoAberto}
        aoFechar={() => setModalExclusaoAberto(false)}
        aoConfirmar={excluirTarefa}
        tarefaNome={tarefaSelecionada?.titulo}
      />
    </div>
  );
};
