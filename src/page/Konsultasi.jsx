import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import CardKonsul from "../component/CardKonsul";

const Konsultasi = () => {
  const customLinkStyle = {
    fontWeight: "700",
    textDecoration: "underline",
  };
  const customKonsulStyle = {
    flexDirection: "row-reverse",
  };
  const customBgStyle = {
    backgroundImage:
      "url('https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/6561e5d080f3c207d7a46b18_bg_banner.png')",
  };

  return (
    <>
      <Navbar linkKonsultasi={customLinkStyle} />
      <Banner
        bgStyle={customBgStyle}
        h="Bicarakan Kepada para ahli"
        p="Wujudkan bisnis peternakan yang sukses bersama para ahli dibidang peternakan dengan pengalaman yang luar biasa."
      />
      <div
        className="w-layout-blockcontainer konsul_container w-container"
        style={{ gridColumnGap: "30px", gridRowGap: "30px" }}>
        <CardKonsul
          nama="Drh. Agung Budianto Ahmad, M.Si"
          deskripsi="Bapak drh. Agung Budianto ahmad, M.Si, merupakan dosen Universitas
            Gadjah Mada. beliau merupakan dokter hewan yang sudah banyak
            mengajar dibeberapa perguruan tinggi di Indonesia."
          foto="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655e148ecd9785440256d5c2_333.png"
          keahlian="Anatomi Veteriner | Mikrobiologi | KesehatanHewan | Reproduksi Ternak"
          pendidikan="S1 Kedokteran Hewan Unair | S2 Unair | Profesi Unair"
          layanan="Kesehatan Hewan - Penyakit pada Ternak -Menejemen Reproduksi - Vaksinasi"
        />
        <CardKonsul
          konsulStyle={customKonsulStyle}
          nama="Drh. Agung Budianto Ahmad, M.Si"
          deskripsi="Bapak drh. Agung Budianto ahmad, M.Si, merupakan dosen Universitas
          Gadjah Mada. beliau merupakan dokter hewan yang sudah banyak
          mengajar dibeberapa perguruan tinggi di Indonesia."
          foto="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655e148ecd9785440256d5c2_333.png"
          keahlian="Anatomi Veteriner | Mikrobiologi | KesehatanHewan | Reproduksi Ternak"
          pendidikan="S1 Kedokteran Hewan Unair | S2 Unair | Profesi Unair"
          layanan="Kesehatan Hewan - Penyakit pada Ternak -Menejemen Reproduksi - Vaksinasi"
        />
        <CardKonsul
          nama="Drh. Agung Budianto Ahmad, M.Si"
          deskripsi="Bapak drh. Agung Budianto ahmad, M.Si, merupakan dosen Universitas
        Gadjah Mada. beliau merupakan dokter hewan yang sudah banyak
        mengajar dibeberapa perguruan tinggi di Indonesia."
          foto="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655e148ecd9785440256d5c2_333.png"
          keahlian="Anatomi Veteriner | Mikrobiologi | KesehatanHewan | Reproduksi Ternak"
          pendidikan="S1 Kedokteran Hewan Unair | S2 Unair | Profesi Unair"
          layanan="Kesehatan Hewan - Penyakit pada Ternak -Menejemen Reproduksi - Vaksinasi"
        />
      </div>
      <Footer />
    </>
  );
};

export default Konsultasi;
