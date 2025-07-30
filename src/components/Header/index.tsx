import { Moon, LogOut } from 'lucide-react'

type Props = {
  nome: string
}

export const Header = ({ nome }: Props) => {
  const handleLogout = () => {
    localStorage.removeItem('user')
    window.location.href = '/'
  }

  return (
    <header className="mb-6 px-2">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          Olá, <span className="text-indigo-600">{nome}</span> 👋
        </h1>

       
        <div className="flex items-center gap-2">
          <button
            className="flex cursor-pointer items-center gap-1 text-sm text-gray-600 border border-gray-300 px-3 py-1.5 rounded-full hover:bg-gray-100 transition"
            aria-label="Alternar modo escuro"
          >
            <Moon size={16} />
          </button>

          <button
            onClick={handleLogout}
            className="flex cursor-pointer items-center gap-1 text-sm text-red-500 border border-red-200 px-3 py-1.5 rounded-full hover:bg-red-50 transition"
            aria-label="Sair da conta"
          >
            <LogOut size={16} />
            Sair
          </button>
        </div>
      </div>

      <p className="text-gray-500 mt-1">
        Vamos acompanhar sua evolução essa semana?
      </p>
    </header>
  )
}
