import { ApexOptions } from "apexcharts";
import { memo } from "react";
import ReactApexChart from "react-apexcharts";
import { twMerge } from "../../utils/twMerge";
import { getRandomText } from "../../utils/getRandom";

export interface PieChartData {
  name: string;
  value: number;
}

interface Props {
  data: PieChartData[];
  title: string;
  icon?: JSX.Element;
}

const PieGraph = memo(({ data, title, icon }: Props) => {
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
      <div className="relative">
        {icon && (
          <div
            className={twMerge(
              "h-14 w-14 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              getRandomText()
            )}
          >
            {icon}
          </div>
        )}
        <ReactApexChart
          type="donut"
          series={data.map((v) => v.value)}
          width={200}
          height={200}
          options={options}
        />
      </div>
    </div>
  );
});

export default PieGraph;
