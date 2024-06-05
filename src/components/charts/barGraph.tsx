import { ApexOptions } from "apexcharts";
import { memo } from "react";
import ReactApexChart from "react-apexcharts";

export type BarChartData = Record<string, number>;

interface Props {
  title: string;
  data: BarChartData;
}

const BarGraph = memo(({ title, data }: Props) => {
  const COLORS = ["#7768ae", "#e15554", "#e1bc29", "#3bb273", "#009ee3"];

  const options: ApexOptions = {
    colors: COLORS,
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        horizontal: true,
        distributed: true,
      },
    },
    labels: Object.keys(data),
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: Object.keys(data),
    },
  };

  return (
    <div className="flex flex-col items-center">
      <p className="font-bold text-black/70">{title}</p>
      <ReactApexChart
        type="bar"
        options={options}
        series={[
          {
            data: Object.values(data),
            name: "Cantidad",
          },
        ]}
        height={200}
        width={600}
      />
    </div>
  );
});

export default BarGraph;
