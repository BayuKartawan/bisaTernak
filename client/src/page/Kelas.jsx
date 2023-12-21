import Banner from "../component/Banner";
import CardKelas from "../component/CardKelas";
import Kembali from "../assets/Symbol/GoBack.png"
import { Link } from "react-router-dom";
import Bg from "../assets/Banner/bgKelas.jpg"
import Search from "../component/Search";
import Cover1 from "../assets/Kelas/domba.jpg";
import Cover2 from "../assets/Kelas/girlGoat.jpg"
import Cover3 from "../assets/Kelas/kambing.jpg"
import Cover4 from "../assets/Kelas/kandangSapi.jpg"
import Cover5 from "../assets/Kelas/kandangDomba.jpg"
import Cover6 from "../assets/Kelas/kandangSapi2.jpg"
import Cover7 from "../assets/Kelas/manajemen.jpg"
import Cover8 from "../assets/Kelas/sapi.jpg"

const Kelas = () => {

    const customBgStyle = {
        backgroundImage: `url(${Bg})`,
    };

    const customMarginStyle = {
        marginTop: "50px",
        marginBottom: "50px"
    };
    const customSearchStyle = {
        marginLeft: "10px",
    };
    const customBannerStyle = {
        marginTop: "190px",
    };


    return (
        <div>
            <Banner
                styleH={customBannerStyle}
                bgStyle={customBgStyle}
                h="Upgrade Ilmu Untuk Keuntungan yang Lebih Baik"
            />
            <Search
                Display={customSearchStyle}
                Margin={customMarginStyle} />
            <section className="component_kelass" >
                <div className="w-layout-blockcontainer kelass_kontainer w-container">
                    <CardKelas
                        link="/deskripsi"
                        judul="Peternak sapi sukses"
                        oleh="Agung Budianto Ahmad"
                        img={Cover8}
                    />
                    <CardKelas
                        link="/Deskripsi1"
                        judul="Desain dan Pengelolaan Kandang Domba"
                        oleh="Agung Budianto Ahmad"
                        img={Cover1}
                    />
                    <CardKelas
                        link="/Deskripsi1"
                        judul="Nutrisi Kambing yang Seimbang"
                        oleh="ir. Syahril Akil"
                        img={Cover3}
                    />
                    <CardKelas
                        link="/Deskripsi1"
                        judul="Desain Kandang dan Pengelolaan Lahan Sapi"
                        oleh="Fakultas Peternakan UGM"
                        img={Cover4}
                    />
                    <CardKelas
                        link="/deskripsi"
                        judul="Penggunaan Herbal dalam Perawatan Domba"
                        oleh="Asril Nurul Huda, S.Pt, M.Sc"
                        img={Cover5}
                    />
                    <CardKelas
                        link="/Deskripsi"
                        judul="Teknologi Canggih di Peternakan Sapi"
                        oleh="Bayu kartawan"
                        img={Cover6}
                    />
                    <CardKelas
                        link="/Deskripsi"
                        judul="Penerapan Sistem Informasi Peternakan"
                        oleh="ir. Syahril Akil"
                        img={Cover7}
                    />
                    <CardKelas
                        link="/Deskripsi1"
                        judul="Penggunaan Herbal dalam Perawatan Kambing"
                        oleh="Bayu kartwan"
                        img={Cover2}
                    />
                </div>
            </section>
            <div className="blok-cari" style={{ textAlign: "center", alignContent: "center", marginTop: "20px" }}>
                <Link to="/kelas"
                    className="btn-cari"
                    style={{ padding: "10px" }}>
                    <img
                        src={Kembali}
                        loading="lazy"
                        height="20"
                        style={{ marginBottom: "5px", transform: "rotate(-90deg)", marginRight: "5px" }}>
                    </img>Lihat lebih banyak</Link>
            </div>
        </div>
    );
};

export default Kelas;
