import "./App.css";
import React from "react";
import {NavBar} from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Ideas } from "./components/Ideas/Ideas";
import { Formulario } from "./components/Formulario/Formulario";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Presentacion } from "./components/Presentacion/Presentacion";

const TITLE = 'Frente Liberal 25 de Mayo Bahia Blanca';

function App() {
  return (
    <div className="global" >
      <title>{ TITLE }</title>
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route
            path="/" 
            element={<Presentacion greeting="Frente Liberal 25 de Mayo Bahia Blanca" />}/>
          <Route path="/Ideas" element={<Ideas />} />
          <Route path="/Formulario" element={<Formulario />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
