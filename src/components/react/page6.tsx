import { useCityContext } from "../../context/cityContext";
import { useDataContext } from "../../context/dataContext";
import IconWater from "../icons/iconWater";

const Page6 = () => {
  const { data_diabetes } = useDataContext();
  const { city } = useCityContext();

  return (
    <section className="h-full flex flex-col items-center justify-center gap-8">
      <div className="flex gap-8 items-start">
        <div className="relative p-8  bg-white/60 shadow-lg border rounded-2xl flex flex-col gap-2 w-96">
          <small className="text-second/80 font-bold">{city}</small>
          <strong className="text-3xl font-extrabold text-second">
            Diabetes
          </strong>
          <p className="py-2 text-sm text-center md:text-start text-black/65 font-bold leading-loose xl:text-base xl:leading-loose">
            La diabetes es una enfermedad crónica que se caracteriza por niveles
            elevados de glucosa en la sangre, ya sea porque el cuerpo no produce
            suficiente insulina (una hormona que regula el azúcar en la sangre)
            o porque las células no responden adecuadamente a la insulina que se
            produce.
          </p>
          <p className="absolute top-0 bg-second text-white px-4 rounded-md left-4 -translate-y-1/2">
            Diagnóstico
          </p>
          <div className="absolute p-4 bg-white/60 shadow-2xl border rounded-2xl flex flex-col gap-2 -bottom-6 -right-32">
            <strong className="text-3xl font-extrabold text-second">
              {data_diabetes}
            </strong>
            <p className="text-sm text-center md:text-start text-black/65 font-bold leading-loose xl:text-base xl:leading-loose">
              Posible diabetes
            </p>
          </div>
        </div>
        <span className="w-32 p-6 text-second aspect-square rounded-full bg-white/60 border-4 border-second">
          <IconWater />
        </span>
      </div>
    </section>
  );
};

export default Page6;
