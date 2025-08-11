import { ResponsiveBar } from '@nivo/bar'
import { useState } from 'react'

type Props = {
  titulo: string
  data: { nome: string; valor: number; semana: string }[]
}

export const Grafico = ({ titulo, data }: Props) => {
  const semanasDisponiveis = Array.from(new Set(data.map(d => d.semana)))
  const [semanaSelecionada, setSemanaSelecionada] = useState(semanasDisponiveis[0] || '')

  const dadosFiltrados = data.filter(d => d.semana === semanaSelecionada)

  // Detecta dark mode via classe no <html>
  const isDark = document.documentElement.classList.contains('dark')

  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded shadow w-full transition-colors duration-300">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
          {titulo}
        </h2>

        <select
          value={semanaSelecionada}
          onChange={(e) => setSemanaSelecionada(e.target.value)}
          className="text-sm px-2 py-1 border rounded bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        >
          {semanasDisponiveis.map((semana, idx) => (
            <option key={idx} value={semana}>
              {semana}
            </option>
          ))}
        </select>
      </div>

      {/* Gráfico */}
      <div className="h-64">
        <ResponsiveBar
          data={dadosFiltrados}
          keys={['valor']}
          indexBy="nome"
          margin={{ top: 30, right: 30, bottom: 50, left: 40 }}
          padding={0.3}
          colors={{ scheme: 'category10' }}
          colorBy="indexValue"
          axisBottom={{
            tickRotation: -20,
            tickSize: 5,
            tickPadding: 5,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 8,
            tickValues: 6,
            format: (value) => `${value}h`,
          }}
          tooltip={({ id, value, indexValue }) => (
            <div className={`p-2 rounded shadow text-sm ${isDark ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-700'}`}>
              <strong>{indexValue}</strong>: {value}h
            </div>
          )}
          borderRadius={4}
          enableLabel={false}
          theme={{
            tooltip: {
              container: {
                background: isDark ? '#1F2937' : '#fff',
                color: isDark ? '#E5E7EB' : '#333',
                fontSize: 12,
              },
            },
            axis: {
              ticks: {
                line: { stroke: 'transparent' },
                text: { fill: isDark ? '#D1D5DB' : '#6B7280', fontSize: 12 },
              },
              domain: {
                line: { stroke: isDark ? '#4B5563' : '#E5E7EB' },
              },
            },
            grid: {
              line: {
                stroke: isDark ? '#374151' : '#E5E7EB',
              },
            },
          }}
        />
      </div>
    </div>
  )
}
