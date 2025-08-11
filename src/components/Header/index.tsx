import { Moon, Sun, LogOut } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  nome: string;
};

export const Header = ({ nome }: Props) => {
  const [modoEscuro, setModoEscuro] = useState(false);

  useEffect(() => {
    const temaSalvo = localStorage.getItem("modo-escuro");
    setModoEscuro(temaSalvo === "ativado");
  }, []);

  const alternarModoEscuro = () => {
    const html = document.documentElement;
    const novoEstado = !modoEscuro;
    html.classList.toggle("dark", novoEstado);
    localStorage.setItem("modo-escuro", novoEstado ? "ativado" : "desativado");
    setModoEscuro(novoEstado);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <header className="mb-6 px-2">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          Olá,{" "}
          <span className="text-indigo-600 dark:text-indigo-400">{nome}</span>{" "}
          👋
        </h1>

        <div className="flex items-center gap-2">
          <button
            onClick={alternarModoEscuro}
            className="flex cursor-pointer items-center gap-1 text-sm 
            text-gray-600 dark:text-gray-300 
            border border-gray-300 dark:border-gray-600 
            px-3 py-1.5 rounded-full 
            hover:bg-gray-100 dark:hover:bg-gray-700 
            transition"
            aria-label="Alternar modo escuro"
          >
            {modoEscuro ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-sm 
            text-red-600 dark:text-red-400 
            border border-red-300 dark:border-red-500 
            px-3 py-1.5 rounded-full 
            bg-white dark:bg-transparent
            hover:bg-red-50 dark:hover:bg-red-500/10 
            transition-colors duration-200"
            aria-label="Sair da conta"
          >
            <LogOut size={16} />
            Sair
          </button>
        </div>
      </div>

      <p className="text-gray-500 dark:text-gray-300 mt-1">
        Vamos acompanhar sua evolução essa semana?
      </p>
    </header>
  );
};
