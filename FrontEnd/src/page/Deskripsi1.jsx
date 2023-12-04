import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Deskripsis from "../component/CardDeskripsi"


const Deskripsi = () => {
    const customLinkStyle = {
        textDecoration: "underline",
    };

    return (
        <div>
            <Navbar linkKelas={customLinkStyle} />
            <section className="komponendes" style={{ marginTop: "20px" }}>
                <div className="w-layout-blockcontainer deskontainer w-container">
                    <Deskripsis
                        Judul="Kelas Ternak Domba Gembira"
                        Vidio="r4Pq5lygij8"
                        Deskripsi="Peternakan domba telah menjadi kegiatan yang mengakar dalam sejarah pertanian manusia. Domba, sebagai hewan ternak yang serbaguna, memberikan manfaat dalam bentuk daging, wol, dan produk lainnya. Pentingnya pemilihan bibit yang tepat, pengelolaan kandang yang efisien, dan manajemen kesehatan yang baik menjadi faktor kunci dalam kesuksesan peternakan domba.
                        Dalam aspek pemilihan bibit, penting untuk memilih ras domba yang sesuai dengan tujuan peternakan, serta memastikan kesehatan dan keturunan yang baik. Pengelolaan kandang yang baik melibatkan desain yang optimal, kebersihan yang terjaga, dan perlindungan dari cuaca ekstrem. Sementara itu, manajemen gizi dan kesehatan domba harus menjadi prioritas utama, termasuk vaksinasi rutin dan pemantauan kesehatan oleh dokter hewan. Dengan merinci aspek-aspek ini, peternak dapat mencapai kesuksesan yang berkelanjutan dan menjaga kesejahteraan domba serta produktivitas peternakan secara keseluruhan."
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Deskripsi;
