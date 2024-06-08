import { createContext, useContext, useMemo, useState } from "react";
import Data from "../mock/mock.json";
import { DataType } from "../types/dataType";

interface Ctx {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  data: DataType[];
}

const CityContext = createContext<Ctx | null>(null);

interface Props {
  children: JSX.Element;
}

export const CityContextProvider = ({ children }: Props) => {
  const [city, setCity] = useState("LA PAZ");
  const data: DataType[] = useMemo(
    () => Data.filter((v) => v.ciudad === city),
    [city]
  );

  return (
    <CityContext.Provider value={{ city, setCity, data }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCityContext = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("this contexts must be used whitin a CityContextProvider");
  }
  return context;
};
