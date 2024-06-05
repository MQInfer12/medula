import { useMemo } from "react";
import { useDataContext } from "../../context/dataContext";
import BarGraph from "../charts/barGraph";
import PieGraph from "../charts/pieGraph";
import Wing from "./wing";
import IconWeight from "../icons/pies/iconWeight";
import IconSize from "../icons/pies/iconSize";
import IconPersons from "../icons/pies/iconPersons";

const Page3 = () => {
  const { data_edad, data_generos, data_peso, data_talla } = useDataContext();
  const iconPersons = useMemo(() => <IconPersons />, []);
  const iconSize = useMemo(() => <IconSize />, []);
  const iconWeight = useMemo(() => <IconWeight />, []);

  return (
    <section className="h-full flex flex-col items-center justify-center gap-8">
      <h2 className="text-first text-4xl font-extrabold">Gráficos generales</h2>
      <div className="flex gap-14">
        <PieGraph icon={iconPersons} data={data_edad} title="Edades (años)" />
        <PieGraph icon={iconSize} data={data_talla} title="Tallas" />
        <PieGraph icon={iconWeight} data={data_peso} title="Pesos (kg)" />
      </div>
      <div className="flex gap-6 items-center">
        <Wing />
        <BarGraph data={data_generos} title="Géneros" />
        <Wing rotate />
      </div>
    </section>
  );
};

export default Page3;
