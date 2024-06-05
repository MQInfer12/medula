import { useDataContext } from "../../context/dataContext";
import { getRandomColor } from "../../utils/getRandom";
import BarGraph from "../charts/barGraph";
import Health from "../icons/monitos/health";
import Wing from "./wing";

const Page5 = () => {
  const { data_electrocardiograma: data } = useDataContext();

  return (
    <section className="h-full flex flex-col items-center justify-center gap-8">
      <h2 className="text-first text-4xl font-extrabold">
        Diagnóstico de electrocardiograma
      </h2>
      <div className="flex gap-6 items-center">
        <BarGraph title="Electrocardiograma" data={data} />
      </div>
      <div className="flex gap-6 items-center h-60">
        <Wing />
        <Health accentColor={getRandomColor()} />
        <Wing rotate />
      </div>
      {/* <div className="flex flex-col gap-2">
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
      </div> */}
    </section>
  );
};

export default Page5;
