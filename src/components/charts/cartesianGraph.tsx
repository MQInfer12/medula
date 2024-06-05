import { ApexOptions } from "apexcharts";
import { memo } from "react";
import ReactApexChart from "react-apexcharts";

export interface CartesianType {
  name: number;
  uv: string;
}

interface Props {
  data: CartesianType[];
  title: string;
  bg?: "first" | "second" | "third" | "fourth";
}

const CartesianGraph = memo(({ data, title, /* bg = "first" */ }: Props) => {
  /* let styles = "";
  switch (bg) {
    case "first":
      styles = "bg-first-light/30 p-2 border border-first rounded-2xl";
      break;
    case "second":
      styles = "bg-second-light/30 p-2 border border-second rounded-2xl";
      break;
    case "third":
      styles = "bg-third-light/30 p-2 border border-third rounded-2xl";
      break;
    case "fourth":
      styles = "bg-fourth-light/30 p-2 border border-fourth rounded-2xl";
      break;
  } */

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
    },
    xaxis: {
      categories: data.map((v) => v.name.toString()),
    },
    legend: {
      show: false,
    },
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="font-bold text-black/70">{title}</p>
      <ReactApexChart
        type="line"
        height={160}
        width={320}
        options={options}
        series={[
          {
            name: title,
            data: data.map((v) => parseFloat(v.uv)),
          },
        ]}
      />
    </div>
  );
});

export default CartesianGraph;
