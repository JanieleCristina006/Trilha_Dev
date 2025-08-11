import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ClipboardPlus } from "lucide-react";

type ModalProps = {
  aberto: boolean;
  aoFechar: () => void;
};

export function ModalAdicionarTarefa({ aberto, aoFechar }: ModalProps) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [novaTag, setNovaTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [vencimento, setVencimento] = useState("");

  function adicionarTag() {
    const tagLimpa = novaTag.trim();
    if (tagLimpa && !tags.includes(tagLimpa)) {
      setTags([...tags, tagLimpa]);
    }
    setNovaTag("");
  }

  function removerTag(tag: string) {
    setTags(tags.filter((t) => t !== tag));
  }

  function salvarTarefa() {
    if (!titulo || !vencimento) {
      alert("Preencha pelo menos título e vencimento");
      return;
    }

    console.log("Tarefa criada:", {
      titulo,
      descricao,
      tags,
      vencimento,
    });

    setTitulo("");
    setDescricao("");
    setTags([]);
    setNovaTag("");
    setVencimento("");
    aoFechar();
  }

  return (
    <Transition appear show={aberto} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={aoFechar}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-lg rounded-xl bg-white dark:bg-gray-800 p-6 shadow-xl transition-colors duration-300">
              <Dialog.Title className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2 mb-6">
                <ClipboardPlus size={18} className="text-indigo-600" />
                <span>Nova Tarefa</span>
              </Dialog.Title>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  salvarTarefa();
                }}
                className="space-y-5"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Título
                    </label>
                    <input
                      type="text"
                      value={titulo}
                      onChange={(e) => setTitulo(e.target.value)}
                      className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Ex: Estudar React"
                      required
                    />
                  </div>

                  <div className="w-[150px]">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Vencimento
                    </label>
                    <input
                      type="date"
                      value={vencimento}
                      onChange={(e) => setVencimento(e.target.value)}
                      className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Descrição
                  </label>
                  <textarea
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    placeholder="Ex: revisar props, useState..."
                    rows={3}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Adicionar tag
                  </label>
                  <div className="flex gap-2 mt-1">
                    <input
                      type="text"
                      value={novaTag}
                      onChange={(e) => setNovaTag(e.target.value)}
                      className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Ex: Lógica"
                    />
                    <button
                      type="button"
                      onClick={adicionarTag}
                      className="bg-indigo-600 text-white px-3 py-2 text-sm rounded hover:bg-indigo-500 transition cursor-pointer"
                    >
                      Adicionar
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-2 h-6 text-[10px] uppercase font-medium rounded border border-emerald-300 bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:border-emerald-500 dark:text-emerald-300"
                      >
                        {tag}
                        <button
                          onClick={() => removerTag(tag)}
                          className="text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-200 text-[12px] -mr-1 cursor-pointer"
                          title="Remover"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={aoFechar}
                    className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-600 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-500 transition cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-500 text-sm transition cursor-pointer"
                  >
                    Salvar tarefa
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
