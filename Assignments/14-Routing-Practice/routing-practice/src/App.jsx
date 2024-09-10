import React from "react";
import { Link, useNavigate, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Choices from "./components/Choices";
import RenderNumber from "./components/RenderNumber";
import RenderWord from "./components/RenderWord";
import RenderPrettyWords from "./components/RenderPrettyWords";
import DisplayWordOrNumber from "./components/DisplayWordOrNumber";
import PrettyText from "./components/PrettyText";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Choices" element={<Choices />} />
        <Route path="/RenderNumber" element={<RenderNumber />} />
        <Route path="/RenderWord" element={<RenderWord />} />
        <Route path="/RenderPrettyWords" element={<RenderPrettyWords />} />
        <Route
          path="/DisplayWordOrNumber/:value"
          element={<DisplayWordOrNumber />}
        />
        <Route
          path="/PrettyText/:word/:color/:bgColor"
          element={<PrettyText />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
