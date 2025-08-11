import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Github, CircleUserRound } from "lucide-react";
import logo from "../../assets/logo.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem("user", email);
    navigate("/painel");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center relative px-4">
      
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 opacity-10 blur-3xl -top-40 left-10" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-green-500 to-teal-400 opacity-10 blur-2xl -bottom-32 right-10" />

      
      <div className="z-10 w-full max-w-md bg-[#161616] border border-white/10 backdrop-blur-md rounded-xl shadow-md p-8">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo Trilha Dev" className="h-6 opacity-80" />
        </div>

        <p className="text-sm text-gray-400 text-center mb-6">
          Bem-vindo de volta! Faça login para continuar
        </p>

        
        <div className="flex gap-2 mb-4">
          <button className="flex-1 bg-white/10 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-white/20 transition">
            <Github size={18} />
            GitHub
          </button>
          <button className="flex-1 bg-white/10 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-white/20 transition">
            <CircleUserRound size={18} />
            Google
          </button>
        </div>

        
        <div className="flex items-center my-4 gap-2 text-gray-500 text-sm">
          <div className="h-px flex-1 bg-white/10" />
          ou
          <div className="h-px flex-1 bg-white/10" />
        </div>

       
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-white mb-1">
              Endereço de e-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-white/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Continuar →
          </button>
        </form>

        
        <div className="text-center text-sm text-gray-500 mt-6">
          Não tem uma conta?{" "}
          <span className="text-indigo-400 hover:underline cursor-pointer">
            Cadastre-se
          </span>
        </div>

        <div className="text-center text-xs text-gray-600 mt-4">
          Protegido por <span className="font-semibold text-white">Trilha Dev</span>
        </div>
      </div>
    </div>
  );
};
