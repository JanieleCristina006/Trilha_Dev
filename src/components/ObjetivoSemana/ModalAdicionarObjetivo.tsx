import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


type Props = {
  aberto: boolean
  aoFechar: () => void
  aoAdicionar: (titulo: string) => void
}

export function ModalAdicionarObjetivo({ aberto, aoFechar, aoAdicionar }: Props) {
  const [titulo, setTitulo] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!titulo.trim()) return
    aoAdicionar(titulo.trim())
    setTitulo('')
    aoFechar()
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
            <Dialog.Panel className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
              <Dialog.Title className="text-lg font-semibold text-gray-800 mb-3">
                Novo Objetivo
              </Dialog.Title>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Ex: Finalizar trilha de React"
                  className="border rounded px-3 py-2 text-sm"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  required
                />

                <div className="flex justify-end gap-2">
                  <button type="button" onClick={aoFechar} className="text-sm px-3 py-1.5 bg-gray-200 rounded">
                    Cancelar
                  </button>
                  <button type="submit" className="text-sm cursor-pointer px-3 py-1.5 bg-indigo-600 text-white rounded">
                    Adicionar
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
