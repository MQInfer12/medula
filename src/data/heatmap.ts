import { DataType } from "../types/dataType";
import { edad } from "./edad";

export interface HeatmapData {
  name: string;
  data: Axis[];
}
[];

interface Axis {
  x: string;
  y: number;
}

export type Range = "normal" | "below" | "above";
export type HeatmapType = "quimicas" | "hemograma";

type Keys = {
  [key: string]: {
    key: string;
    type: HeatmapType;
  };
};

const keys: Keys = {
  "Glóbulos rojos": {
    key: "globulos_rojos",
    type: "hemograma",
  },
  "Glóbulos blancos": {
    key: "globulos_blancos",
    type: "hemograma",
  },
  Hemoglobina: {
    key: "hemoglobina",
    type: "hemograma",
  },
  "V.C.M.": {
    key: "vcm",
    type: "hemograma",
  },
  "Hb.C.M.": {
    key: "hbcm",
    type: "hemograma",
  },
  "Hemoglobina corpuscular": {
    key: "m",
    type: "hemograma",
  },
  Plaquetas: {
    key: "plaquetas",
    type: "hemograma",
  },
  Úrea: {
    key: "urea",
    type: "quimicas",
  },
  Creatinina: {
    key: "creatinina",
    type: "quimicas",
  },
  Colesterol: {
    key: "colesterol",
    type: "quimicas",
  },
  Trigliceridos: {
    key: "trigliceridos",
    type: "quimicas",
  },
};

const filterData = (
  range: Range,
  type: HeatmapType,
  dataFiltered: DataType[]
) => {
  const filteredKeys: Keys = {};
  for (const key in keys) {
    const value = keys[key];
    if (value.type === type) {
      filteredKeys[key] = value;
    }
  }
  const data = Object.keys(filteredKeys).map<HeatmapData>((v) => {
    const { key } = keys[v];
    return {
      name: v,
      data: dataFiltered.reduce<Axis[]>(
        (obj, value) => {
          const edad = value.edad;
          const val =
            type === "quimicas"
              ? //@ts-ignore
                value.diagnosticos.quimicas[key].value
              : //@ts-ignore
                value.diagnosticos.hemograma[key].value;
          const max =
            type === "quimicas"
              ? //@ts-ignore
                value.diagnosticos.quimicas[key].max
              : //@ts-ignore
                value.diagnosticos.hemograma[key].max;
          const min =
            type === "quimicas"
              ? //@ts-ignore
                value.diagnosticos.quimicas[key].min
              : //@ts-ignore
                value.diagnosticos.hemograma[key].min;
          let valueInRange = false;
          switch (range) {
            case "normal":
              valueInRange = val >= min && val <= max;
              break;
            case "below":
              valueInRange = val < min;
              break;
            case "above":
              valueInRange = val > max;
              break;
          }
          if (valueInRange) {
            const existing = obj.find(
              (e) => e.x.replace(" años", "") === String(edad)
            );
            if (existing) {
              existing.y++;
            }
          }
          /* obj.sort((a, b) => Number(a.x) - Number(b.x)); */
          return obj;
        },
        edad(dataFiltered).map((e) => ({
          x: e.name,
          y: 0,
        }))
      ),
    };
  });
  return data;
};

export const heatmap = filterData;
