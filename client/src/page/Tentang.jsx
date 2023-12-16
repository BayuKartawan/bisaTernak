import CardTentang from "../component/CardTentang";
import Banner from "../component/Banner";
import Bg from "../assets/Banner/bgKelas.jpg"
import Logo from "../assets/Symbol/logo_putih.svg"
import Sapi from "../assets/Tentang/sapi.svg"
import Kambing from "../assets/Tentang/kambing.svg"

const Tentang = () => {

    const customColumnStyle = {
        flexDirection: "row-reverse",
    };
    const customBgStyle = {
        backgroundImage: `url(${Bg})`
    };
    const customLogoStyle = {
        marginTop: "150px"
    };

    return (
        <div>
            <Banner
                bgStyle={customBgStyle}
                logoPutih={Logo}
                MarginL={customLogoStyle}
            />
            <div className="w-layout-blockcontainer tentang_container w-container">
                <CardTentang
                    gambarSrc={Sapi}
                    judul="Tentang Kami"
                    paragraf1="Bisaternak merupakan website yang berisi informasi, tata cara, 
                    dan solusi terbaik untuk peternak dikarenakan semua yang ada di Bisaternak merupakan hasil dari pemikiran para ahli dibidang peternakan."
                    paragraf2="Bekerjasama dengan ahli peternakan dan menawarkan solusi terkait 
                    seputar dunia peternakan khususnya peternak hewan ruminansia, seperti sapi, kambing, 
                    rusa dan sebagainya. Dengan hadirnya website Bisaternak salah satu keuntungannya adalah 
                    adanya layanan konsultasi dengan para ahli di bidang peternakan."
                />
                <CardTentang
                    columnStyle={customColumnStyle}
                    gambarSrc={Kambing}
                    paragraf1="Tempat belajar seputar hewan ruminansia dari mulai cara merawat 
                    obat untuk hewan ruminansia dan semua hal lainnya terkait hewan ruminansia."
                    paragraf2="Bisaternak pertama juga pertama kali terbentuk dari diskusi project massive yang beranggotakan 6 orang yang topik utamanya
                    telah disepakati yaitu tentang peternakan ruminansia. Dengan hadirnya Bisaternak ini,bertujuan untuk menjadi salah satu
                    solusi mudah dalam menangani semua hal seperti salah satunya yaitu bagaimana cara merawat obat-obat untuk hewan ruminansia
                    dan lainnya yang masih seputar peternakan ruminansia"
                />
            </div>
        </div>
    );
};

export default Tentang;
