import { PieChartData } from "../components/charts/pieGraph";
import { DataType } from "../types/dataType";

export const edad = (data: DataType[]): PieChartData[] =>
  data
    .reduce<PieChartData[]>((obj, v) => {
      const exist = obj.find((e) => e.name === String(v.edad));
      if (!exist) {
        obj.push({
          name: String(v.edad),
          value: 1,
        });
      } else {
        exist.value++;
      }
      obj.sort((a, b) => Number(a.name) - Number(b.name));
      return obj;
    }, [])
    .map((v) => ({ ...v, name: `${v.name} años` }));
