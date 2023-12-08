import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Beranda from "./page/Beranda";
import Konsultasi from "./page/Konsultasi";
import Kelas from "./page/Kelas";
import Profil from "./page/Profil";
import Tentang from "./page/Tentang";
import Masuk from "./page/Masuk";
import Daftar from "./page/Daftar"
import Kosong from "./page/TidakTahu";
import Deskripsi from "./page/Deskripsi";
import Deskripsi1 from "./page/Deskripsi1";
import Up from "./page/Up";
import "./media/Laptop.css";
import "./media/style2.css";




function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/konsultasi" element={<Konsultasi />} />
          <Route path="/kelas" element={<Kelas />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/masuk" element={<Masuk />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="/deskripsi" element={<Deskripsi />} />
          <Route path="/deskripsi1" element={<Deskripsi1 />} />
          <Route path="/up" element={<Up />} />
          <Route path="*" element={<Kosong />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
