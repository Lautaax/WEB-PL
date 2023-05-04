import "./App.css";
import {NavBar} from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Presentacion } from "./components/Presentacion/Presentacion";
import { Footer } from "./components/Footer/Footer";
import { Ideas } from "./components/Ideas/Ideas";
import { Contact } from "./components/Contact/Contact";
import { AboutMe } from "./components/AboutMe/AboutMe";

const TITLE = 'Frente Liberal 25 de Mayo Bahia Blanca';

function App() {
  return (
    <div className="fondo">
      <title>{ TITLE }</title>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Presentacion greeting="Bienvenidos a SoyLautaa" />}
          />
          <Route path="/Ideas" element={<Ideas />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
