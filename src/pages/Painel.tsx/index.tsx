import { CardResumo } from "../../components/Cards"
import { Header } from "../../components/Header"
import { Grafico } from "../../components/Grafico"
import { GerarPlanoIA } from "../../components/GerarPlanoIA"
import { Trilhas } from "../../components/Trilhas"
import { Tarefas } from "../../components/Tarefas"
import { ObjetivoSemana } from "../../components/ObjetivoSemana"

import { MdOutlineLibraryBooks } from "react-icons/md"
import { FaRegClock } from "react-icons/fa6"
import { GiBrain, GiProgression } from "react-icons/gi"
import { ImFire } from "react-icons/im"
import { Footer } from "../../components/Footer"

export function Painel() {
 
    const dados = [
  { nome: 'Segunda', valor: 2, semana: 'Semana 1' },
  { nome: 'Terça', valor: 1.5, semana: 'Semana 1' },
  { nome: 'Quarta', valor: 3, semana: 'Semana 1' },
  { nome: 'Quinta', valor: 3, semana: 'Semana 1' },
  { nome: 'Sexta', valor: 3, semana: 'Semana 1' },
  { nome: 'Segunda-feira', valor: 1, semana: 'Semana 2' },
  { nome: 'Terça-feira', valor: 2.5, semana: 'Semana 2' },
  { nome: 'Quarta-feira', valor: 2.5, semana: 'Semana 2' },
  { nome: 'Quinta-feira', valor: 2.5, semana: 'Semana 2' },
   { nome: 'Sexta-feira', valor: 2.5, semana: 'Semana 2' },
]


  return (
    <div className=" dark:bg-gray-900 bg-gray-50 min-h-screen px-4 lg:px-20 md:px-8 xl:px-6 2xl:px-14 py-6 font-sans">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8">

        
        <Header nome="Janiele" />

       
        <div className="flex flex-wrap gap-4">
          <CardResumo
            titulo="Trilhas Criadas"
            valor="4"
            indicador="3 novas esta semana"
            icone={<MdOutlineLibraryBooks />}
            corIcone="bg-purple-100 text-purple-600"
          />
          <CardResumo
            titulo="Horas Estudadas"
            valor="8h 30min"
            indicador="+2h a mais"
            icone={<FaRegClock />}
            corIcone="bg-blue-100 text-blue-600"
          />
          <CardResumo
            titulo="Última Trilha"
            valor="React"
            indicador="Atualizada há 2 dias"
            icone={<GiBrain />}
            corIcone="bg-orange-100 text-orange-600"
          />
          <CardResumo
            titulo="Dias Ativos"
            valor="4/7 dias"
            indicador="Mantenha o ritmo!"
            icone={<ImFire />}
            corIcone="bg-red-100 text-red-600"
          />
          <CardResumo
            titulo="Progresso IA"
            valor="Plano: Semana 2/4"
            indicador="Você está no meio da trilha"
            icone={<GiProgression />}
            corIcone="bg-green-100 text-green-600"
          />
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Grafico titulo="Progresso Semanal" data={dados} />

          <Tarefas />
        </div>

       
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <GerarPlanoIA />
          <ObjetivoSemana />
        </div>

       
        <Trilhas />
      </div>
       <Footer />
    </div>

    
  )
}
