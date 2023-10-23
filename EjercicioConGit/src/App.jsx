import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeScreen from "./components/Pages/HomeScreen";
import AboutScreen from "./components/Pages/AboutScreen";
import NotFound from "./components/Pages/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// hacer un router con un navbar con bootstrap con el cdn crear un componente navbar y un componente de rutas en donde viculas las rutas
