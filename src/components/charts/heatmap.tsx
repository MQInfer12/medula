import { HeatmapData, HeatmapType } from "../../data/heatmap";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { memo } from "react";

interface Props {
  type: HeatmapType;
  data: HeatmapData[];
}

const Heatmap = memo(({ type, data }: Props) => {
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
});

export default Heatmap;
