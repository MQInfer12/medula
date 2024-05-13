import { hemogramaPerc } from "../../data/hemograma";
import CartesianGraph from "../charts/cartesianGraph";
import RadarGraph from "../charts/radarChart";
import Wing from "./wing";

const Page6 = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center gap-8">
      <h2 className="text-first text-4xl font-extrabold">Porcentajes</h2>
      <div className="flex gap-6 items-center">
        <Wing />
        <RadarGraph
          title="Hemograma (promedio en %)"
          data={hemogramaPerc}
          type="%"
          max={70}
        />
        <Wing rotate />
      </div>
      <h2 className="text-first text-4xl font-extrabold">Historia</h2>
      <div className="flex gap-6">
        <CartesianGraph
          title="Globulos rojos"
          data={[
            { name: 1, uv: "100" },
            { name: 2, uv: "100" },
            { name: 3, uv: "100" },
            { name: 4, uv: "100" },
            { name: 5, uv: "100" },
            { name: 6, uv: "100" },
            { name: 7, uv: "100" },
            { name: 8, uv: "100" },
            { name: 9, uv: "100" },
          ]}
        />
        <CartesianGraph
          title="Globulos rojos"
          data={[
            { name: 1, uv: "100" },
            { name: 2, uv: "100" },
            { name: 3, uv: "100" },
            { name: 4, uv: "100" },
            { name: 5, uv: "100" },
            { name: 6, uv: "100" },
            { name: 7, uv: "100" },
            { name: 8, uv: "100" },
            { name: 9, uv: "100" },
          ]}
        />
        <CartesianGraph
          title="Globulos rojos"
          data={[
            { name: 1, uv: "100" },
            { name: 2, uv: "100" },
            { name: 3, uv: "100" },
            { name: 4, uv: "100" },
            { name: 5, uv: "100" },
            { name: 6, uv: "100" },
            { name: 7, uv: "100" },
            { name: 8, uv: "100" },
            { name: 9, uv: "100" },
          ]}
        />
      </div>
    </section>
  );
};

export default Page6;
