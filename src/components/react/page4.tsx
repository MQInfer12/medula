import {
  bebidas_alcoholicas,
  covid,
  deporte,
  fuma,
  saturacion,
  temperatura,
} from "../../data/general";
import PieGraph from "../charts/pieGraph";

const Page4 = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center gap-8">
      <h2 className="text-first text-4xl font-extrabold">Signos vitales</h2>
      <div className="flex gap-14">
        <PieGraph data={temperatura} title="Temperatura" />
        <PieGraph data={saturacion} title="Saturación" />
      </div>
      <h2 className="text-first text-4xl font-extrabold">Hábitos</h2>
      <div className="flex gap-14">
        <PieGraph data={fuma} title="Fuma" />
        <PieGraph data={covid} title="Covid" />
        <PieGraph data={bebidas_alcoholicas} title="Bebidas alcohólicas" />
        <PieGraph data={deporte} title="Deporte" />
      </div>
    </section>
  );
};

export default Page4;
