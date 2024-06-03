import { useDataContext } from "../../context/dataContext";
import PieGraph from "../charts/pieGraph";

const Page4 = () => {
  const {
    data_temperatura,
    data_saturacion,
    data_fuma,
    data_covid,
    data_bebidas_alcoholicas,
    data_deporte,
  } = useDataContext();

  return (
    <section className="h-full flex flex-col items-center justify-center gap-8">
      <h2 className="text-first text-4xl font-extrabold">Signos vitales</h2>
      <div className="flex gap-14">
        <PieGraph data={data_temperatura} title="Temperatura" />
        <PieGraph data={data_saturacion} title="Saturación" />
      </div>
      <h2 className="text-first text-4xl font-extrabold">Hábitos</h2>
      <div className="flex gap-14">
        <PieGraph data={data_fuma} title="Fuma" />
        <PieGraph data={data_covid} title="Covid" />
        <PieGraph data={data_bebidas_alcoholicas} title="Bebidas alcohólicas" />
        <PieGraph data={data_deporte} title="Deporte" />
      </div>
    </section>
  );
};

export default Page4;
