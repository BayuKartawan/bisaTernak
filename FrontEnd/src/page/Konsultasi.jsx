import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import CardKonsul from "../component/CardKonsul";
import Nara1 from "../assets/Narasumber/1.jpg"
import Nara2 from "../assets/Narasumber/2.jpg"
import Nara3 from "../assets/Narasumber/3.jpg"

const Konsultasi = () => {
    const customLinkStyle = {
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
                    Gadjah Mada. beliau merupakan dokter hewan yang sudah banyak mengajar dibeberapa perguruan tinggi di Indonesia."
                    foto={Nara1}
                    keahlian="Anatomi Veteriner | Mikrobiologi | KesehatanHewan | Reproduksi Ternak"
                    pendidikan="S1 Kedokteran Hewan Unair | S2 Unair | Profesi Unair"
                    layanan="Kesehatan Hewan - Penyakit pada Ternak -Menejemen Reproduksi - Vaksinasi"
                />
                <CardKonsul
                    konsulStyle={customKonsulStyle}
                    nama="Ir. Syahril Akil, S.Pt"
                    deskripsi="Bapak Ir. Syahrir Akil, IPU yang merupakan direktur dari PT. BSB, anak perusahan dari PT Charoen Phokpand Indonesia. 
                    beliau merupakan konsultan ternak, dan sudah memiliki pengalaman selama 26 tahun dibidang peternakan."
                    foto={Nara2}
                    keahlian="Teknologi Hasil Ternak | Tekologi Pakan | Usaha Peternakan | Menejemen Lahan Ternak dan Konstruksi"
                    pendidikan="S1 Peternakan Unhas  | Profesi UGM"
                    layanan="Kesehatan Hewan - Penyakit pada Ternak - Menejemen Reproduksi - Vaksinasi"
                />
                <CardKonsul
                    nama="Drh. Siti Eliana Rochmi, M.Si"
                    deskripsi="Ibu Siti Eliana Rochmi adalah dosen Program Paramedis Veteriner Universitas Airlangga. 
                    Ibu Rochmi melakukan penelitian tentang Teknologi Terapan Kesehatan Hewan Tropis dan Kesehatan Hewan."
                    foto={Nara3}
                    keahlian="Pemuliaan Ternak | Farmkologi Veteriner | Vaksinologi | Legislasi Veteriner"
                    pendidikan="S1 Kedokteran Hewan - S2 Unair Profesi Unair"
                    layanan="Kesehatan Hewan - Penyakit pada Ternak - Menejemen Reproduksi - Vaksinasi"
                />
            </div>
            <Footer />
        </>
    );
};

export default Konsultasi;
