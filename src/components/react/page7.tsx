import { HeatmapType, Range } from "../../data/heatmap";
import Heatmap from "../charts/heatmap";
import { useDataContext } from "../../context/dataContext";

interface Props {
  active: boolean;
}

const Page7 = ({ active }: Props) => {
  const { setRange, setType, type, range } = useDataContext();
  const { data_heatmap } = useDataContext();

  return (
    <section className="h-full flex flex-col items-center justify-center gap-8">
      <h2 className="text-first text-4xl font-extrabold">Rangos dinámicos</h2>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <p className="text-sm">Tipo: </p>
          <select
            className="p-2 border border-fourth bg-fourth-light/40 rounded-md text-sm"
            value={type}
            onChange={(e) => setType(e.target.value as HeatmapType)}
          >
            <option value="quimicas">Químicas</option>
            <option value="hemograma">Hemograma</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm">Rango: </p>
          <select
            className="p-2 border border-fourth bg-fourth-light/40 rounded-md text-sm"
            value={range}
            onChange={(e) => setRange(e.target.value as Range)}
          >
            <option value="normal">Normal</option>
            <option value="below">Por debajo</option>
            <option value="above">Por encima</option>
          </select>
        </div>
      </div>
      <div className="h-[60%] flex gap-6">
        <div className="h-full w-[1000px] bg-third-light/40 border border-third rounded-2xl p-4">
          {active && <Heatmap type={type} data={data_heatmap} />}
        </div>
      </div>
    </section>
  );
};

export default Page7;
