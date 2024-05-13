import type { PieChartData } from "../components/charts/pieGraph";
import Data from "../mock/mock.json";

const dataAge: PieChartData[] = [
  {
    name: "20-30",
    value: 0,
  },
  {
    name: "31-40",
    value: 0,
  },
  {
    name: "41-50",
    value: 0,
  },
  {
    name: "51-60",
    value: 0,
  },
  {
    name: "Otras",
    value: 0,
  },
];

const dataTallas: PieChartData[] = [
  {
    name: "No especificado",
    value: 0,
  },
  {
    name: "150-160",
    value: 0,
  },
  {
    name: "161-170",
    value: 0,
  },
  {
    name: "171-180",
    value: 0,
  },
  {
    name: "Otras",
    value: 0,
  },
];

const dataPesos: PieChartData[] = [
  {
    name: "No especificado",
    value: 0,
  },
  {
    name: "x < 50",
    value: 0,
  },
  {
    name: "50 <= x <= 60",
    value: 0,
  },
  {
    name: "60 < x <= 70",
    value: 0,
  },
  {
    name: "70 < x <= 80",
    value: 0,
  },
  {
    name: "80 < x <= 90",
    value: 0,
  },
  {
    name: "90 < x <= 100",
    value: 0,
  },
  {
    name: "100 < x <= 110",
    value: 0,
  },
  {
    name: "110 < x <= 120",
    value: 0,
  },
  {
    name: "120 < x",
    value: 0,
  },
];

const dataTemp: PieChartData[] = [
  {
    name: "No especificado",
    value: 0,
  },
  {
    name: "36 a 37",
    value: 0,
  },
  {
    name: "37 a 38",
    value: 0,
  },
  {
    name: "38 a 39",
    value: 0,
  },
  {
    name: "Otros",
    value: 0,
  },
];

const dataSat: PieChartData[] = [
  {
    name: "No especificado",
    value: 0,
  },
  {
    name: "Por debajo (< 95)",
    value: 0,
  },
  {
    name: "Normal (95 - 100)",
    value: 0,
  },
  {
    name: "Por encima (> 100)",
    value: 0,
  },
  {
    name: "Otros",
    value: 0,
  },
];

const dataSmoke: PieChartData[] = [
  {
    name: "No especificado",
    value: 0,
  },
  {
    name: "SI",
    value: 0,
  },
  {
    name: "NO",
    value: 0,
  },
];

const dataCovid: PieChartData[] = [
  {
    name: "No especificado",
    value: 0,
  },
  {
    name: "SI",
    value: 0,
  },
  {
    name: "NO",
    value: 0,
  },
];

const dataBA: PieChartData[] = [
  {
    name: "No especificado",
    value: 0,
  },
  {
    name: "SI",
    value: 0,
  },
  {
    name: "NO",
    value: 0,
  },
];

const dataDep: PieChartData[] = [
  {
    name: "No especificado",
    value: 0,
  },
  {
    name: "SI",
    value: 0,
  },
  {
    name: "NO",
    value: 0,
  },
];

Data.forEach((v) => {
  const edad = v.edad;
  if (edad >= 20 && edad <= 30) {
    dataAge[0].value++;
  } else if (edad >= 31 && edad <= 40) {
    dataAge[1].value++;
  } else if (edad >= 41 && edad <= 50) {
    dataAge[2].value++;
  } else if (edad >= 51 && edad <= 60) {
    dataAge[3].value++;
  } else {
    dataAge[4].value++;
  }

  const talla = v.datos_biometricos.talla || -1;
  if (talla === -1) {
    dataTallas[0].value++;
  } else if (talla >= 150 && talla <= 160) {
    dataTallas[1].value++;
  } else if (talla >= 161 && talla <= 170) {
    dataTallas[2].value++;
  } else if (talla >= 171 && talla <= 180) {
    dataTallas[3].value++;
  } else {
    dataTallas[4].value++;
  }

  const Peso = v.datos_biometricos.peso || -1;
  if (Peso === -1) {
    dataPesos[0].value++;
  } else if (Peso < 50) {
    dataPesos[1].value++;
  } else if (Peso >= 50 && Peso <= 60) {
    dataPesos[2].value++;
  } else if (Peso > 60 && Peso <= 70) {
    dataPesos[3].value++;
  } else if (Peso > 70 && Peso <= 80) {
    dataPesos[4].value++;
  } else if (Peso > 80 && Peso <= 90) {
    dataPesos[5].value++;
  } else if (Peso > 90 && Peso <= 100) {
    dataPesos[6].value++;
  } else if (Peso > 100 && Peso <= 110) {
    dataPesos[6].value++;
  } else {
    dataPesos[7].value++;
  }

  const temp = v.signos_vitales.temperatura
    ? v.signos_vitales.temperatura / 10
    : -1;
  console.log(temp);
  if (temp === -1) {
    dataTemp[0].value++;
  } else if (temp >= 36 && temp <= 37) {
    dataTemp[1].value++;
  } else if (temp <= 38) {
    dataTemp[2].value++;
  } else if (temp <= 39) {
    dataTemp[3].value++;
  } else {
    dataTemp[4].value++;
  }

  const sat = v.signos_vitales.saturacion || -1;
  if (sat === -1) {
    dataSat[0].value++;
  } else if (sat < 95) {
    dataSat[1].value++;
  } else if (sat >= 95 && sat <= 100) {
    dataSat[2].value++;
  } else if (sat >= 100) {
    dataSat[3].value++;
  } else {
    dataSat[4].value++;
  }

  const fuma = v.habitos.fuma;
  if (fuma === null) {
    dataSmoke[0].value++;
  } else if (fuma === "NO") {
    dataSmoke[2].value++;
  } else {
    dataSmoke[1].value++;
  }
  const covid = v.habitos.covid;
  if (covid === null) {
    dataCovid[0].value++;
  } else if (covid === "NO") {
    dataCovid[2].value++;
  } else {
    dataCovid[1].value++;
  }
  const ba = v.habitos.bebidas_alcoholicas;
  if (ba === null) {
    dataBA[0].value++;
  } else if (ba === "NO") {
    dataBA[2].value++;
  } else {
    dataBA[1].value++;
  }
  const deporte = v.habitos.deporte;
  if (deporte === null) {
    dataDep[0].value++;
  } else if (deporte === "NO") {
    dataDep[2].value++;
  } else {
    dataDep[1].value++;
  }
});

export const edad = dataAge;
export const talla = dataTallas;
export const peso = dataPesos;
export const temperatura = dataTemp;
export const saturacion = dataSat;
export const fuma = dataSmoke;
export const covid = dataCovid;
export const bebidas_alcoholicas = dataBA;
export const deporte = dataDep;
