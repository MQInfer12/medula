import { PieChartData } from "../components/charts/pieGraph";
import Data from "../mock/mock.json";

export const edad: PieChartData[] = Data.reduce<PieChartData[]>((obj, v) => {
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
}, []);
