import { BarChartData } from "../components/charts/barGraph";
import { DataType } from "../types/dataType";

const generosData = (data: DataType[]): BarChartData =>
  data.reduce<BarChartData>((obj, value) => {
    const val = value.sexo || "Sin especificar";
    const exist = obj[val] !== undefined;
    if (!exist) {
      obj[val] = 1;
    } else {
      obj[val] += 1;
    }
    return obj;
  }, {});

const electrocardiogramaData = (data: DataType[]): BarChartData =>
  data.reduce<BarChartData>((obj, value) => {
    const val =
      value.diagnosticos.electrocardiograma.diagnostico || "Sin especificar";
    const exist = obj[val] !== undefined;
    if (!exist) {
      obj[val] = 1;
    } else {
      obj[val] += 1;
    }
    return obj;
  }, {});

export const electrocardiograma = electrocardiogramaData;
export const generos = generosData;
