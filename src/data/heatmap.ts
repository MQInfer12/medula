import Data from "../mock/mock.json";
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
    unit: string;
    min: number;
    max: number;
  };
};

const keys: Keys = {
  "Glóbulos rojos": {
    key: "globulos_rojos",
    type: "hemograma",
    unit: "mm3",
    min: 4000000,
    max: 5800000,
  },
  "Glóbulos blancos": {
    key: "globulos_blancos",
    type: "hemograma",
    unit: "mm3",
    min: 4990,
    max: 10100,
  },
  Hemoglobina: {
    key: "hemoglobina",
    type: "hemograma",
    unit: "g/dL",
    min: 14,
    max: 18.5,
  },
  "V.C.M.": {
    key: "vcm",
    type: "hemograma",
    unit: "fL",
    min: 82,
    max: 98,
  },
  "Hb.C.M.": {
    key: "hbcm",
    type: "hemograma",
    unit: "Pg",
    min: 27,
    max: 31,
  },
  "Hemoglobina corpuscular": {
    key: "m",
    type: "hemograma",
    unit: "g/dL",
    min: 30,
    max: 36,
  },
  Plaquetas: {
    key: "plaquetas",
    type: "hemograma",
    unit: "mm3",
    min: 150000,
    max: 450000,
  },
  Úrea: {
    key: "urea",
    type: "quimicas",
    unit: "mg/dL",
    min: 17,
    max: 29,
  },
  Creatinina: {
    key: "creatinina",
    type: "quimicas",
    unit: "mg/dL",
    min: 0.5,
    max: 1.4,
  },
  Colesterol: {
    key: "colesterol",
    type: "quimicas",
    unit: "mg/dL",
    min: 120,
    max: 220,
  },
  Trigliceridos: {
    key: "trigliceridos",
    type: "quimicas",
    unit: "mg/dL",
    min: 30,
    max: 150,
  },
};

const filterData = (range: Range, type: HeatmapType) => {
  const filteredKeys: Keys = {};
  for (const key in keys) {
    const value = keys[key];
    if (value.type === type) {
      filteredKeys[key] = value;
    }
  }
  const data = Object.keys(filteredKeys).map<HeatmapData>((v) => {
    const { key, unit, max, min } = keys[v];
    return {
      name: `${v} (${min}${unit} - ${max}${unit})`,
      data: Data.reduce<Axis[]>(
        (obj, value) => {
          const edad = value.edad;
          const val =
            type === "quimicas"
              ? //@ts-ignore
                value.diagnosticos.quimicas[key]
              : //@ts-ignore
                value.diagnosticos.hemograma[key];
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
        edad.map((e) => ({
          x: e.name,
          y: 0,
        }))
      ),
    };
  });
  return data;
};

export const heatmap = filterData;
