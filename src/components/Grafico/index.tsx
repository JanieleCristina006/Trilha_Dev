import { ResponsiveBar } from '@nivo/bar'

type Props = {
  titulo: string
  data: { nome: string; valor: number }[]
}

export const Grafico = ({ titulo, data }: Props) => {
  return (
    <div className="bg-white p-6 rounded shadow w-full">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">{titulo}</h2>

      <div className="h-64">
        <ResponsiveBar
          data={data}
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
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 8,
            tickValues: 6,
            format: (value) => `${value}h`,
            legend: '',
          }}
          tooltip={({ id, value, indexValue }) => (
            <div className="bg-white p-2 rounded shadow text-sm text-gray-700">
              <strong>{indexValue}</strong>: {value}h
            </div>
          )}
          borderRadius={4}
          enableLabel={false}
          theme={{
            tooltip: {
              container: {
                background: '#fff',
                color: '#333',
                fontSize: 12,
              },
            },
            axis: {
              ticks: {
                line: {
                  stroke: 'transparent', 
                },
                text: {
                  fill: '#6B7280',
                  fontSize: 12,
                },
              },
              domain: {
                line: {
                  stroke: '#E5E7EB',
                },
              },
              legend: {
                text: {
                  fill: '#374151',
                },
              },
            },
          }}
        />
      </div>
    </div>
  )
}
