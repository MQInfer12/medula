import { createContext, useContext, useState } from "react";

interface Ctx {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const CityContext = createContext<Ctx | null>(null);

interface Props {
  children: JSX.Element;
}

export const CityContextProvider = ({ children }: Props) => {
  const [city, setCity] = useState("LA PAZ");
  return (
    <CityContext.Provider value={{ city, setCity }}>
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
