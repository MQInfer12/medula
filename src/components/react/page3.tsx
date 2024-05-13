import { generos } from "../../data/counts";
import { edad } from "../../data/edad";
import { peso, talla } from "../../data/general";
import BarGraph from "../charts/barGraph";
import PieGraph from "../charts/pieGraph";
import Wing from "./wing";

const Page3 = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center gap-8">
      <h2 className="text-first text-4xl font-extrabold">Gráficos generales</h2>
      <div className="flex gap-14">
        <PieGraph data={edad} title="Edades" />
        <PieGraph data={talla} title="Tallas" />
        <PieGraph data={peso} title="Pesos" />
      </div>
      <div className="flex gap-6 items-center">
        <Wing />
        <BarGraph data={generos} title="Géneros" />
        <Wing rotate />
      </div>
    </section>
  );
};

export default Page3;
