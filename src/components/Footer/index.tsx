import { Github, Linkedin, Mail } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="mt-10 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-6">
        {/* Logo e descrição */}
        <div>
          <h2 className="text-xl font-bold text-indigo-600">Trilha Dev</h2>
          <p className="text-sm text-gray-500 mt-2 max-w-xs">
            Sua jornada de aprendizado organizada, com metas semanais, trilhas e progresso visível.
          </p>
        </div>

        {/* Links rápidos */}
        <div className="flex flex-col sm:flex-row gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Navegação</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-indigo-600 transition">📚 Trilhas</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">📝 Tarefas</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">🎯 Objetivos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="mailto:janiele@email.com" className="hover:text-indigo-600 transition">Envie um e-mail</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">Fale no WhatsApp</a></li>
            </ul>
          </div>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Redes</h3>
          <div className="flex gap-4">
            <a href="https://github.com/seu-usuario" target="_blank" className="text-gray-500 hover:text-indigo-600 transition">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/seu-usuario" target="_blank" className="text-gray-500 hover:text-indigo-600 transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:janiele@email.com" className="text-gray-500 hover:text-indigo-600 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Janiele • Projeto Trilha Dev — Todos os direitos reservados.
      </div>
    </footer>
  )
}
