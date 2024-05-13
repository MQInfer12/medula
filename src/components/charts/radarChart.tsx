import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";

export interface RadarChartData {
  name: string;
  value: number;
}

interface Props {
  title: string;
  max: number;
  data: RadarChartData[];
  type: string;
}

const RadarGraph = ({ title, max, data: dataProp, type }: Props) => {
  const data = dataProp.map((v) => ({ ...v, fullMark: max }));
  return (
    <div className="flex flex-col items-center">
      <p className="font-bold text-black/70">{title}</p>
      <RadarChart outerRadius={90} width={360} height={240} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis angle={18} domain={[0, max]} />
        <Tooltip />
        <Radar
          name={type}
          dataKey="value"
          stroke="#e15554"
          fill="#e15554"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
};

export default RadarGraph;
