import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import CardKelas from "../component/CardKelas";
import Bg from "../assets/bg-kelas.png"
import Search from "../component/Search";
import Bg2 from "../assets/aspirasi.png"

const Kelas = () => {
    const customLinkStyle = {
        textDecoration: "underline",
    };
    const customBgStyle = {
        backgroundImage: `url(${Bg})`,
    };

    const customMarginStyle = {
        marginTop: "50px",
        marginBottom: "20px"
    };
    const customSearchStyle = {
        marginLeft: "10px",
    };


    return (
        <div>
            <Navbar linkKelas={customLinkStyle} />
            <Banner
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
                        judul="Gurihnya bisnis ternak"
                        oleh="Uzumaki bambang"
                        img="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656223ff5479269f8042e551_gambar_kelas.png"
                    />
                    <CardKelas
                        link="/Deskripsi1"
                        judul="Kelas Ternak Domba"
                        oleh="Uciha Udin"
                        img={Bg2}
                    />
                    <CardKelas
                        link="/sasa"
                        judul="-"
                        oleh="adadadadad"
                        img="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656223ff5479269f8042e551_gambar_kelas.png"
                    />
                    <CardKelas
                        link="/sasa"
                        judul="-"
                        oleh="adadadadad"
                        img="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656223ff5479269f8042e551_gambar_kelas.png"
                    />
                    <CardKelas
                        link="/sasa"
                        judul="-"
                        oleh="adadadadad"
                        img="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656223ff5479269f8042e551_gambar_kelas.png"
                    />
                    <CardKelas
                        link="/sasa"
                        judul="-"
                        oleh="adadadadad"
                        img="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656223ff5479269f8042e551_gambar_kelas.png"
                    />
                    <CardKelas
                        link="/sasa"
                        judul="-"
                        oleh="adadadadad"
                        img="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656223ff5479269f8042e551_gambar_kelas.png"
                    />
                    <CardKelas
                        link="/sasa"
                        judul="-"
                        oleh="adadadadad"
                        img="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656223ff5479269f8042e551_gambar_kelas.png"
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Kelas;
