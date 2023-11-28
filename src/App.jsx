import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./page/Beranda";
import Konsultasi from "./page/Konsultasi";
import Kelas from "./page/Kelas";
import Profil from "./page/Profil";
import Tentang from "./page/Tentang";
import Masuk from "./page/Masuk";
import Daftar from "./page/Daftar"
import Kosong from "./page/tidakTahu";
import "./media/style.css";
import "./media/body.css";

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
          <Route path="/daftar" element={<Daftar />} />
          <Route path="*" element={<Kosong />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
