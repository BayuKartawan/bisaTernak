import Deskripsis from "../component/CardDeskripsi"

const Deskripsi = () => {

    return (
        <div>
            <section className="komponendes" style={{ marginTop: "20px" }}>
                <div className="w-layout-blockcontainer deskontainer w-container">
                    <Deskripsis
                        Judul="Ternak Sapi Gembira"
                        Vidio="yidbHYrDjJM"
                        Deskripsi={
                            <>Peternak sapi adalah individu atau kelompok yang berdedikasi untuk membimbing, merawat, dan mengelola sapi dengan penuh perhatian. Mereka memiliki pengetahuan yang mendalam tentang kebutuhan dan perilaku sapi, serta keterampilan dalam merawat dan memelihara ternak dengan baik.
                                <br /><br />
                                Dalam setiap langkah dari pemilihan bibit, perawatan harian, hingga manajemen pembiakan, peternak sapi berusaha menciptakan lingkungan yang sehat dan produktif bagi ternaknya. Mereka memahami pentingnya nutrisi yang tepat, perawatan medis yang baik, serta pemeliharaan fasilitas yang bersih dan aman.
                                <br /><br />
                                Peternak sapi tidak hanya memiliki hubungan kerja dengan ternaknya, tetapi juga mengembangkan ikatan khusus dengan setiap individu sapi. Mereka melibatkan diri secara aktif dalam memantau kesehatan dan kesejahteraan sapi, serta memberikan perhatian khusus kepada setiap fase kehidupan ternak mereka, dari kelahiran hingga pertumbuhan.
                                <br /><br />
                                Selain itu, peternak sapi sering kali berperan sebagai pelopor dalam praktik pertanian yang berkelanjutan dan etis. Mereka bekerja keras untuk memahami dan menerapkan praktik-praktik terbaik dalam manajemen limbah, penggunaan lahan yang bijaksana, dan perlindungan lingkungan.
                                <br /><br />
                                Dengan komitmen dan dedikasi mereka, peternak sapi tidak hanya menciptakan kehidupan yang baik bagi ternaknya, tetapi juga berkontribusi pada pasokan pangan yang aman dan berkualitas tinggi. Profesi ini mencerminkan harmoni antara keahlian praktis, cinta terhadap hewan, dan tanggung jawab terhadap lingkungan, menjadikannya bagian integral dari sektor pertanian yang berkelanjutan.
                            </>} />
                </div>
            </section>
        </div>
    );
};

export default Deskripsi;
