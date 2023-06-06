import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.tsx";
import Watch from "./components/Watch.tsx";
import * as React from "react";

function App() {
  return (
    <div className="text-slate-50">
      <h1 className="text-center text-6xl mt-5 tracking-wider font-bold">
        <span className="text-red-500">Q</span>FLIX
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:Id" element={<Watch />} />
      </Routes>
    </div>
  );
}

export default App;
