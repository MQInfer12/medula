interface RangedValue {
  value: number | null;
  max: number | null;
  min: number | null;
}

export interface DataType {
  id: number;
  codigo: number;
  sexo: "M" | "F";
  fecha_ingreso: string | null;
  fecha_nacimiento: string | null;
  edad: number | null;
  ciudad: string | null;
  area_trabajo: string | null;
  datos_biometricos: {
    peso: number | null;
    talla: number | null;
    imc: string | null;
  };
  signos_vitales: {
    pa: string | null;
    temperatura: number | null;
    saturacion: number | null;
  };
  habitos: {
    fuma: string | null;
    covid: string | null;
    bebidas_alcoholicas: string | null;
    deporte: string | null;
  };
  diagnosticos: {
    rx: {
      conclusion_1: string | null;
    };
    electrocardiograma: {
      hr: string | null;
      pr_intervalo: string | null;
      p_duracion: string | null;
      qrs_duracion: string | null;
      t_duracion: string | null;
      qt_qtc_qtcfri: string | null;
      p_qrs_taxis: string | null;
      rv5_sub_sv1: string | null;
      rv5_x_sv1: string | null;
      ant_patogenos: string | null;
      diagnostico: string | null;
    };
    pap: {
      celulas_observadas: {
        escamosas: string | null;
        glandulares: string | null;
        metaplasia: string | null;
      };
      calidad_de_muestra: string | null;
      clasificacion_general: string | null;
      resultados: string | null;
      flora: string | null;
    };
    hemograma: {
      globulos_rojos: RangedValue;
      globulos_rojos_max: RangedValue;
      globulos_rojos_min: RangedValue;
      globulos_blancos: RangedValue;
      hemoglobina: RangedValue;
      hematocito: RangedValue;
      vcm: RangedValue;
      hbcm: RangedValue;
      m: RangedValue;
      neutrofilos_segmentados: RangedValue;
      eosinofilos: RangedValue;
      linfositos: RangedValue;
      monocitos: RangedValue;
      plaquetas: RangedValue;
    };
    quimicas: {
      glicemia: RangedValue;
      urea: RangedValue;
      creatinina: RangedValue;
      colesterol: RangedValue;
      trigliceridos: RangedValue;
    };
    marcador_tumoral: number | null;
    orina: {
      olor: string | null;
      color: string | null;
      aspecto: string | null;
      densidad: number | null;
      ph: number | null;
      proteinas: string | null;
      cuerpos_cetonicos: string | null;
      sales_biliares: string | null;
      hemoglobina: string | null;
      nitritos: string | null;
      urobilina: number | null;
      glucosa: string | null;
      bilirrubinas: string | null;
      leucocitos: string | null;
      hematies: string | null;
      celulas_descamadas: string | null;
      flora_microbiana: string | null;
      piocitos: string | null;
      cristales: string | null;
      celulas_renales: string | null;
    };
    antecedentes: {
      familiares: string | null;
      patologicos: string | null;
      traumatologicos: string | null;
      laboral: string | null;
    };
  };
}
