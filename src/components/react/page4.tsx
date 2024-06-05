import { useMemo } from "react";
import { useDataContext } from "../../context/dataContext";
import PieGraph from "../charts/pieGraph";
import IconTemperature from "../icons/pies/iconTemperature";
import IconWind from "../icons/pies/iconWind";
import IconSmoking from "../icons/pies/iconSmoking";
import IconMask from "../icons/pies/iconMask";
import IconBeer from "../icons/pies/iconBeer";
import IconFootball from "../icons/pies/iconFootball";

const Page4 = () => {
  const {
    data_temperatura,
    data_saturacion,
    data_fuma,
    data_covid,
    data_bebidas_alcoholicas,
    data_deporte,
  } = useDataContext();
  const iconTemperature = useMemo(() => <IconTemperature />, []);
  const iconWind = useMemo(() => <IconWind />, []);
  const iconSmoking = useMemo(() => <IconSmoking />, []);
  const iconMask = useMemo(() => <IconMask />, []);
  const iconBeer = useMemo(() => <IconBeer />, []);
  const iconFootball = useMemo(() => <IconFootball />, []);

  return (
    <section className="h-full flex flex-col items-center justify-center gap-8">
      <h2 className="text-first text-4xl font-extrabold">Signos vitales</h2>
      <div className="flex gap-14">
        <PieGraph
          icon={iconTemperature}
          data={data_temperatura}
          title="Temperatura"
        />
        <PieGraph icon={iconWind} data={data_saturacion} title="Saturación" />
      </div>
      <h2 className="text-first text-4xl font-extrabold">Hábitos</h2>
      <div className="flex gap-14">
        <PieGraph icon={iconSmoking} data={data_fuma} title="Fuma" />
        <PieGraph icon={iconMask} data={data_covid} title="Covid" />
        <PieGraph
          icon={iconBeer}
          data={data_bebidas_alcoholicas}
          title="Bebidas alcohólicas"
        />
        <PieGraph icon={iconFootball} data={data_deporte} title="Deporte" />
      </div>
    </section>
  );
};

export default Page4;
