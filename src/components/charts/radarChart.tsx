import { ApexOptions } from "apexcharts";
import { memo } from "react";
import ReactApexChart from "react-apexcharts";

export interface RadarChartData {
  name: string;
  value: number;
}

interface Props {
  title: string;
  data: RadarChartData[];
  type: string;
}

const RadarGraph = memo(({ title, data, type }: Props) => {
  const COLORS = ["#7768ae", "#e15554", "#e1bc29", "#3bb273", "#009ee3"];

  const options: ApexOptions = {
    colors: COLORS,
    legend: {
      show: false,
    },
    xaxis: {
      categories: data.map((v) => v.name),
    },
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="font-bold text-black/70">{title}</p>
      <ReactApexChart
        options={options}
        series={[
          {
            name: `Promedio (${type})`,
            data: data.map((v) => v.value),
          },
        ]}
        type="radar"
        height={300}
        width={400}
      />
    </div>
  );
});

export default RadarGraph;
