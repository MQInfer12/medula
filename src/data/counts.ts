import { BarChartData } from "../components/charts/barGraph";
import Data from "../mock/mock.json";

const generosData: BarChartData = Data.reduce<BarChartData>((obj, value) => {
  const val = value.sexo || "Sin especificar";
  const exist = obj[val] !== undefined;
  if (!exist) {
    obj[val] = 1;
  } else {
    obj[val] += 1;
  }
  return obj;
}, {});

/* const generosDataPie: PieChartData[] = Data.reduce<PieChartData[]>(
  (obj, value) => {
    const val = value.sexo || "Sin especificar";
    const exist = obj.find((e) => e.name === val);
    if (!exist) {
      obj.push({
        name: val,
        value: 1,
      });
    } else {
      exist.value++;
    }
    return obj;
  },
  []
); */

const electrocardiogramaData: BarChartData = Data.reduce<BarChartData>(
  (obj, value) => {
    const val =
      value.diagnosticos.electrocardiograma.diagnostico || "Sin especificar";
    const exist = obj[val] !== undefined;
    if (!exist) {
      obj[val] = 1;
    } else {
      obj[val] += 1;
    }
    return obj;
  },
  {}
);

export const electrocardiograma = electrocardiogramaData;
export const generos = generosData;
