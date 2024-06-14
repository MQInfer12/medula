import type { RadarChartData } from "../components/charts/radarChart";
import { DataType } from "../types/dataType";

const generosDataPie = (data: DataType[]) => {
  let counter = 0;
  const result = data
    .reduce<RadarChartData[]>(
      (obj, value) => {
        const h = value.diagnosticos.hemograma.hematocito.value;
        const n = value.diagnosticos.hemograma.neutrofilos_segmentados.value;
        const e = value.diagnosticos.hemograma.eosinofilos.value;
        const l = value.diagnosticos.hemograma.linfositos.value;
        const m = value.diagnosticos.hemograma.monocitos.value;

        if (h && n && e && l && m) {
          counter++;
          obj[0].value += h;
          obj[1].value += n;
          obj[2].value += e;
          obj[3].value += l;
          obj[4].value += m;
        }

        return obj;
      },
      [
        {
          name: "Hematocitos",
          value: 0,
        },
        {
          name: "Neutrófilos",
          value: 0,
        },
        {
          name: "Eosinófilos",
          value: 0,
        },
        {
          name: "Linfositos",
          value: 0,
        },
        {
          name: "Monocitos",
          value: 0,
        },
      ]
    )
    .map((v) => ({ ...v, value: v.value / counter }));
  return result;
};

export const hemogramaPerc = generosDataPie;
