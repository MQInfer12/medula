import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface CartesianType {
  name: number;
  uv: string;
}

interface Props {
  data: CartesianType[];
  title: string;
  bg?: "first" | "second" | "third" | "fourth";
}

const CartesianGraph = ({ data, title, bg = "first" }: Props) => {
  let styles = "";
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
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="font-bold text-black/70">{title}</p>
      <div style={{ width: "320px", height: 160 }} className={styles}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CartesianGraph;
