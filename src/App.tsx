import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import { CityContextProvider } from "./context/cityContext";

function App() {
  return (
    <CityContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </CityContextProvider>
  );
}

export default App;
