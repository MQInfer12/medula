import { DataType } from "../../types/dataType";

export const diabetes = (data: DataType[]) => {
  const totalConDiabetes = data.reduce((suma, v) => {
    const glicemia = v.diagnosticos.quimicas.glicemia.value;
    if (glicemia && glicemia >= 126) {
      return suma + 1;
    }
    return suma;
  }, 0);
  return totalConDiabetes;
};
