import { createContext, useContext, useMemo, useState } from "react";
import { edad } from "../data/edad";
import { PieChartData } from "../components/charts/pieGraph";
import {
  bebidas_alcoholicas,
  covid,
  deporte,
  fuma,
  peso,
  saturacion,
  talla,
  temperatura,
} from "../data/general";
import { electrocardiograma, generos } from "../data/counts";
import { BarChartData } from "../components/charts/barGraph";
import { hemogramaPerc } from "../data/hemograma";
import { RadarChartData } from "../components/charts/radarChart";
import { HeatmapData, HeatmapType, Range, heatmap } from "../data/heatmap";
import { useCityContext } from "./cityContext";
import { diabetes } from "../data/diseases/diabetes";

interface Ctx {
  range: Range;
  setRange: React.Dispatch<React.SetStateAction<Range>>;
  type: HeatmapType;
  setType: React.Dispatch<React.SetStateAction<HeatmapType>>;

  data_edad: PieChartData[];
  data_talla: PieChartData[];
  data_peso: PieChartData[];
  data_generos: BarChartData;
  data_temperatura: PieChartData[];
  data_saturacion: PieChartData[];
  data_fuma: PieChartData[];
  data_covid: PieChartData[];
  data_bebidas_alcoholicas: PieChartData[];
  data_deporte: PieChartData[];
  data_electrocardiograma: BarChartData;
  data_hemogramaperc: RadarChartData[];
  data_heatmap: HeatmapData[];

  //* DIAGNOSTICOS DE ENFERMEDADES
  data_diabetes: number;
}

const DataContext = createContext<Ctx | null>(null);

interface Props {
  children: React.ReactNode;
}

export const DataContextProvider = ({ children }: Props) => {
  const { data } = useCityContext();
  const [range, setRange] = useState<Range>("normal");
  const [type, setType] = useState<HeatmapType>("quimicas");

  const data_edad = useMemo(() => edad(data), [data]);
  const data_talla = useMemo(() => talla(data), [data]);
  const data_peso = useMemo(() => peso(data), [data]);
  const data_generos = useMemo(() => generos(data), [data]);
  const data_temperatura = useMemo(() => temperatura(data), [data]);
  const data_saturacion = useMemo(() => saturacion(data), [data]);
  const data_fuma = useMemo(() => fuma(data), [data]);
  const data_covid = useMemo(() => covid(data), [data]);
  const data_bebidas_alcoholicas = useMemo(
    () => bebidas_alcoholicas(data),
    [data]
  );
  const data_deporte = useMemo(() => deporte(data), [data]);
  const data_electrocardiograma = useMemo(
    () => electrocardiograma(data),
    [data]
  );
  const data_hemogramaperc = useMemo(() => hemogramaPerc(data), [data]);
  const data_heatmap = useMemo(
    () => heatmap(range, type, data),
    [range, type, data]
  );

  //* DIAGNOSTICOS DE ENFERMEDADES
  const data_diabetes = useMemo(() => diabetes(data), [data]);

  return (
    <DataContext.Provider
      value={{
        range,
        type,
        setRange,
        setType,
        data_edad,
        data_talla,
        data_peso,
        data_generos,
        data_temperatura,
        data_saturacion,
        data_fuma,
        data_covid,
        data_bebidas_alcoholicas,
        data_deporte,
        data_electrocardiograma,
        data_hemogramaperc,
        data_heatmap,
        //* DIAGNOSTICOS DE ENFERMEDADES
        data_diabetes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("this contexts must be used whitin a DataContextProvider");
  }
  return context;
};
