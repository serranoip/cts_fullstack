import "./styling/chart.scss"

import { AreaChart, Area, XAxis,CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'October 10',
    uv: 4500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'October 11',
    uv: 8000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'October 12',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'October 13',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'October 14',
    uv: 190,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'October 15',
    uv: 5390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'October 16',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">MPI Data</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1 5" stroke="#D3D3D3" className="grid"/>
          <XAxis dataKey="name" stroke="#F5F5F5" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;