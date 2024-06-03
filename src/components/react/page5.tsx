import { useDataContext } from "../../context/dataContext";
import BarGraph from "../charts/barGraph";
import Wing from "./wing";

const Page5 = () => {
  const COLORS = ["#7768ae", "#e15554", "#e1bc29", "#3bb273", "#d64dc4"];
  const { data_electrocardiograma: data } = useDataContext();

  return (
    <section className="h-full flex flex-col items-center justify-center gap-8">
      <h2 className="text-first text-4xl font-extrabold">Diagnóstico de EC</h2>
      <div className="flex gap-6 items-center">
        <Wing />
        <BarGraph title="Electrocardiograma" data={data} />
        <Wing rotate />
      </div>
      <div className="flex flex-col gap-2">
        {Object.keys(data).map((v, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="w-8 h-2 rounded-full"
              style={{
                backgroundColor: COLORS[i % COLORS.length],
              }}
            />
            <p>{v}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page5;
