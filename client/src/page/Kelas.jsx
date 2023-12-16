import Banner from "../component/Banner";
import CardKelas from "../component/CardKelas";
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
                        judul="kelas ternak sapi"
                        oleh="Uzumaki bambang"
                        img={Cover1}
                    />
                    <CardKelas
                        link="/Deskripsi1"
                        judul="Kelas Ternak Domba"
                        oleh="Uciha Udin"
                        img={Cover2}
                    />
                    <CardKelas
                        link="/sasa"
                        judul="-"
                        oleh="adadadadad"
                        img={Cover3}
                    />
                    <CardKelas
                        link="/sasa"
                        judul="-"
                        oleh="adadadadad"
                        img={Cover4}
                    />
                    <CardKelas
                        link="/sasa"
                        judul="-"
                        oleh="adadadadad"
                        img={Cover5}
                    />
                    <CardKelas
                        link="/sasa"
                        judul="-"
                        oleh="adadadadad"
                        img={Cover6}
                    />
                    <CardKelas
                        link="/sasa"
                        judul="-"
                        oleh="adadadadad"
                        img={Cover7}
                    />
                    <CardKelas
                        link="/sasa"
                        judul="-"
                        oleh="adadadadad"
                        img={Cover8}
                    />
                </div>
            </section>
        </div>
    );
};

export default Kelas;
