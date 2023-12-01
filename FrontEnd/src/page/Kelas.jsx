import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import CardKelas from "../component/CardKelas";
import Bg from "../assets/bg-kelas.png"

const Kelas = () => {
    const customLinkStyle = {
        textDecoration: "underline",
    };
    const customBgStyle = {
        backgroundImage: `url(${Bg})`,
    };

    return (
        <div>
            <Navbar linkKelas={customLinkStyle} />
            <Banner
                bgStyle={customBgStyle}
                h="Upgrade Ilmu Untuk Keuntungan yang Lebih Baik"
            />
            <section className="component_kelass">
                <div className="w-layout-blockcontainer kelass_kontainer w-container">
                    <CardKelas
                        link="/deskripsi"
                        judul="Gurihnya bisnis ternak"
                        oleh="Uzumaki bambang"
                        img="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656223ff5479269f8042e551_gambar_kelas.png"
                    />
                    <CardKelas
                        link="/sasa"
                        judul="Pengenalan Agribisnis Sektor Peternakan"
                        oleh="adadadadad"
                        img="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656223ff5479269f8042e551_gambar_kelas.png"
                    />
                    <CardKelas
                        link="/sasa"
                        judul="Menejemen Pemakaian Obat dan Vaksinasi pada Ternak"
                        oleh="adadadadad"
                        img="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656223ff5479269f8042e551_gambar_kelas.png"
                    />
                    <CardKelas
                        link="/sasa"
                        judul="Probiotik Dalam Pakan bagi Ternak Ruminansia"
                        oleh="adadadadad"
                        img="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656223ff5479269f8042e551_gambar_kelas.png"
                    />
                    <CardKelas
                        link="/sasa"
                        judul="Pengenalan Agribisnis Sektor Peternakan"
                        oleh="adadadadad"
                        img="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656223ff5479269f8042e551_gambar_kelas.png"
                    />
                    <CardKelas
                        link="/sasa"
                        judul="Menejemen Pemakaian Obat dan Vaksinasi pada Ternak"
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
