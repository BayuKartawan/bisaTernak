import Banner from "../component/Banner";
import CardKelas from "../component/CardKelas";
import Bg from "../assets/Banner/bgKelas.jpg"
import Search from "../component/Search";
import { Link } from "react-router-dom";
import Kembali from "../assets/Symbol/GoBack.png"
import Cover8 from "../assets/Kelas/sapi.jpg"
import Cover4 from "../assets/Kelas/kandangSapi.jpg"
import Cover6 from "../assets/Kelas/kandangSapi2.jpg"

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
            <div className="blok-cari">
                <Link to="/kelas"
                    className="btn-cari" >
                    <img
                        src={Kembali}
                        loading="lazy"
                        height="20"
                        style={{ marginBottom: "5px" }}>
                    </img> Semua kelas</Link>
            </div>

            <section className="component_kelass" >
                <div className="w-layout-blockcontainer kelass_kontainer w-container">
                    <CardKelas
                        link="/deskripsi"
                        judul="Peternak sapi sukses"
                        oleh="Agung Budianto Ahmad"
                        img={Cover8}
                    />
                    <CardKelas
                        link="/deskripsi"
                        judul="Desain Kandang dan Pengelolaan Lahan Sapi"
                        oleh="Asril Nurul Huda, S.Pt, M.Sc"
                        img={Cover4}
                    />
                    <CardKelas
                        link="/deskripsi"
                        judul="Teknologi Canggih di Peternakan Sapi"
                        oleh="Bayu kartawan"
                        img={Cover6}
                    />
                </div>
            </section>
        </div>
    );
};

export default Kelas;
