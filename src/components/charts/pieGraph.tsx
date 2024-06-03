import { ApexOptions } from "apexcharts";
import { memo } from "react";
import ReactApexChart from "react-apexcharts";

export interface PieChartData {
  name: string;
  value: number;
}

interface Props {
  data: PieChartData[];
  title: string;
}

const PieGraph = memo(({ data, title }: Props) => {
  const COLORS = ["#7768ae", "#e15554", "#e1bc29", "#3bb273", "#009ee3"];

  const options: ApexOptions = {
    colors: COLORS,
    labels: data.map((v) => v.name),
    legend: {
      show: false,
    },
  };

  return (
    <div className="flex flex-col items-center">
      <p className="font-bold text-black/70">{title}</p>
      <ReactApexChart
        type="donut"
        series={data.map((v) => v.value)}
        width={200}
        height={200}
        options={options}
      />
    </div>
  );
});

export default PieGraph;
