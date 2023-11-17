import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./page/Beranda";
import Konsultasi from "./page/Konsultasi";
import Kelas from "./page/Kelas";
import Profil from "./page/Profil";
import Tentang from "./page/Tentang";
import Masuk from "./page/Masuk";
import Kosong from "./page/tidakTahu";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/konsultasi" element={<Konsultasi />} />
          <Route path="/kelas" element={<Kelas />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/masuk" element={<Masuk />} />
          <Route path="*" element={<Kosong />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
