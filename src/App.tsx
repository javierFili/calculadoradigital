import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CalculadoraNormal from "./pages/calculadoraNormal/CaculadoraNormal";
import CalculadoraCientifica from "./pages/calculadoraCientifica/CalculadoraCientifica";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CalculadoraNormal />} />
      <Route path="/cientifica" element={<CalculadoraCientifica />} />
    </Routes>
  );
}

export default App;
