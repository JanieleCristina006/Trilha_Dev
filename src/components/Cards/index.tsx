type Props = {
  titulo: string
  valor: string
  indicador?: string
  icone?: React.ReactNode
  corIcone?: string // Ex: "bg-blue-100 text-blue-600"
}

export function CardResumo({ titulo, valor, indicador, icone, corIcone }: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex-1 min-w-[200px]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{titulo}</p>
          <p className="text-sm font-bold text-gray-900">{valor}</p>
        </div>

        <div className={`p-2 rounded-full text-xl ${corIcone || 'bg-indigo-100 text-indigo-600'}`}>
          {icone}
        </div>
      </div>

      {indicador && (
        <div className="mt-2 inline-flex items-center gap-1 rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          <span>{indicador}</span>
        </div>
      )}
    </div>
  )
}
