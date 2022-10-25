import React from "react";
import "./App.css";
import HEADER from "./components/Header";
import Listacurso from "./components/Listacurso";
import Picture from "./components/picture";


function App() {
  return (
    <>
      <header>
        <HEADER />
      </header>
      <Picture /> 
      <Listacurso />
    </>
  );
}

export default App;
