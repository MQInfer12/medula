import { useMemo } from "react";
import { HeatmapType, Range, heatmap } from "../../data/heatmap";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface Props {
  range: Range;
  type: HeatmapType;
}

const Heatmap = ({ range, type }: Props) => {
  const data = useMemo(() => heatmap(range, type), [range, type]);

  const options: ApexOptions = {
    dataLabels: {
      enabled: false,
    },
    colors: [type === "quimicas" ? "#e15554" : "#009ee3"],
  };

  return (
    <ReactApexChart
      options={options}
      type="heatmap"
      height={"100%"}
      width={"100%"}
      series={data}
    />
  );
};

export default Heatmap;
