import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

type Props = {
  aberto: boolean
  aoFechar: () => void
  aoConfirmar: () => void
  tarefaNome?: string
}

export function ModalConfirmarExclusao({ aberto, aoFechar, aoConfirmar, tarefaNome }: Props) {
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
            <Dialog.Panel className="w-full max-w-sm rounded-xl bg-white dark:bg-gray-800 p-6 shadow-xl transition-colors duration-300">
              <Dialog.Title className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Confirmar Exclusão
              </Dialog.Title>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Tem certeza que deseja excluir a tarefa{' '}
                <strong className="text-blue-800 dark:text-blue-300">{tarefaNome}</strong>? Essa ação não poderá ser desfeita.
              </p>

              <div className="flex justify-end gap-2">
                <button
                  onClick={aoFechar}
                  className="px-4 py-1.5 rounded bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-sm text-gray-800 dark:text-white transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={aoConfirmar}
                  className="px-4 py-1.5 rounded bg-red-600 hover:bg-red-500 text-white text-sm transition"
                >
                  Sim, excluir
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
