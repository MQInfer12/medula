import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

export type BarChartData = Record<string, number>;

interface Props {
  title: string;
  data: BarChartData;
}

const BarGraph = ({ title, data: dataProp }: Props) => {
  const COLORS = ["#7768ae", "#e15554", "#e1bc29", "#3bb273", "#d64dc4"];

  const data = [
    {
      name: title,
      ...dataProp,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <p className="font-bold text-black/70">{title}</p>
      <BarChart width={600} height={200} data={data}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {Object.keys(data[0])
          .filter((v) => v !== "name")
          .map((key, i) => (
            <Bar dataKey={key} fill={COLORS[i % COLORS.length]} />
          ))}
      </BarChart>
    </div>
  );
};

export default BarGraph;
