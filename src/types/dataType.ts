export interface DataType {
  id: number;
  codigo: number;
  sexo: string;
  fecha_ingreso: string;
  fecha_nacimiento: string;
  edad: number;
  ciudad: string;
  area_trabajo: any;
  datos_biometricos: DatosBiometricos;
  signos_vitales: SignosVitales;
  habitos: Habitos;
  diagnosticos: Diagnosticos;
}

export interface DatosBiometricos {
  peso: any;
  talla: any;
  imc: any;
}

export interface SignosVitales {
  pa: any;
  temperatura: any;
  saturacion: any;
}

export interface Habitos {
  fuma: any;
  covid: any;
  bebidas_alcoholicas: any;
  deporte: any;
}

export interface Diagnosticos {
  rx: Rx;
  electrocardiograma: Electrocardiograma;
  pap: Pap;
  hemograma: Hemograma;
  quimicas: Quimicas;
  marcador_tumoral: number;
  orina: Orina;
  antecedentes: Antecedentes;
}

export interface Rx {
  conclusion_1: string;
  conclusion_2: string;
}

export interface Electrocardiograma {
  hr: string;
  pr_intervalo: string;
  p_duracion: string;
  qrs_duracion: string;
  t_duracion: string;
  qt_qtc_qtcfri: string;
  p_qrs_taxis: string;
  rv5_sub_sv1: string;
  rv5_x_sv1: string;
  ant_patogenos: string;
  diagnostico: string;
}

export interface Pap {
  celulas_observadas: CelulasObservadas;
  calidad_de_muestra: string;
  clasificacion_general: string;
  resultados: string;
  flora: string;
}

export interface CelulasObservadas {
  escamosas: string;
  glandulares: string;
  metaplasia: string;
}

export interface Hemograma {
  globulos_rojos: number;
  globulos_blancos: number;
  hemoglobina: number;
  hematocito: number;
  vcm: number;
  hbcm: number;
  m: number;
  neutrofilos_segmentados: number;
  eosinofilos: number;
  linfositos: number;
  monocitos: number;
  plaquetas: number;
}

export interface Quimicas {
  glicemia: number;
  urea: number;
  creatinina: number;
  colesterol: number;
  trigliceridos: number;
}

export interface Orina {
  olor: string;
  color: string;
  aspecto: string;
  densidad: number;
  ph: number;
  proteinas: string;
  cuerpos_cetonicos: string;
  sales_biliares: string;
  hemoglobina: string;
  nitritos: string;
  urobilina: number;
  glucosa: string;
  bilirrubinas: string;
  leucocitos: string;
  hematies: string;
  celulas_descamadas: string;
  flora_microbiana: string;
  piocitos: string;
  cristales: string;
  celulas_renales: string;
}

export interface Antecedentes {
  familiares: string;
  patologicos: string;
  traumatologicos: string;
  laboral: string;
}
