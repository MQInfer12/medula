import type { PieChartData } from "../components/charts/pieGraph";
import { DataType } from "../types/dataType";

export const edad = (data: DataType[]) => {
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

  data.forEach((v) => {
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
  });

  return dataAge;
};

export const talla = (data: DataType[]) => {
  const dataTallas: PieChartData[] = [
    {
      name: "No especificado",
      value: 0,
    },
    {
      name: "150 - 160",
      value: 0,
    },
    {
      name: "161 - 170",
      value: 0,
    },
    {
      name: "171 - 180",
      value: 0,
    },
    {
      name: "Otras",
      value: 0,
    },
  ];

  data.forEach((v) => {
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
  });

  return dataTallas;
};

export const peso = (data: DataType[]) => {
  const dataPesos: PieChartData[] = [
    {
      name: "No especificado",
      value: 0,
    },
    {
      name: "menos de 50kg",
      value: 0,
    },
    {
      name: "50kg - 60kg",
      value: 0,
    },
    {
      name: "60kg - 70kg",
      value: 0,
    },
    {
      name: "70kg - 80kg",
      value: 0,
    },
    {
      name: "80kg - 90kg",
      value: 0,
    },
    {
      name: "90kg - 100kg",
      value: 0,
    },
    {
      name: "100kg - 110kg",
      value: 0,
    },
    {
      name: "110kg - 120kg",
      value: 0,
    },
    {
      name: "120 < x",
      value: 0,
    },
  ];

  data.forEach((v) => {
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
  });

  return dataPesos;
};

export const temperatura = (data: DataType[]) => {
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

  data.forEach((v) => {
    const temp = v.signos_vitales.temperatura
      ? v.signos_vitales.temperatura / 10
      : -1;
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
  });

  return dataTemp;
};

export const saturacion = (data: DataType[]) => {
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

  data.forEach((v) => {
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
  });

  return dataSat;
};

export const fuma = (data: DataType[]) => {
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

  data.forEach((v) => {
    const fuma = v.habitos.fuma;
    if (fuma === null) {
      dataSmoke[0].value++;
    } else if (fuma === "NO") {
      dataSmoke[2].value++;
    } else {
      dataSmoke[1].value++;
    }
  });

  return dataSmoke;
};

export const covid = (data: DataType[]) => {
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

  data.forEach((v) => {
    const covid = v.habitos.covid;
    if (covid === null) {
      dataCovid[0].value++;
    } else if (covid === "NO") {
      dataCovid[2].value++;
    } else {
      dataCovid[1].value++;
    }
  });

  return dataCovid;
};

export const bebidas_alcoholicas = (data: DataType[]) => {
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

  data.forEach((v) => {
    const ba = v.habitos.bebidas_alcoholicas;
    if (ba === null) {
      dataBA[0].value++;
    } else if (ba === "NO") {
      dataBA[2].value++;
    } else {
      dataBA[1].value++;
    }
  });

  return dataBA;
};

export const deporte = (data: DataType[]) => {
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

  data.forEach((v) => {
    const deporte = v.habitos.deporte;
    if (deporte === null) {
      dataDep[0].value++;
    } else if (deporte === "NO") {
      dataDep[2].value++;
    } else {
      dataDep[1].value++;
    }
  });

  return dataDep;
};
