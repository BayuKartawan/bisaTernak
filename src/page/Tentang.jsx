import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CardTentang from "../component/cardTentang";
import Banner from "../component/banner";

const Tentang = () => {
  const customLinkStyle = {
    fontWeight: "700 ",
    textDecoration: "underline",
  };
  const customColumnStyle = {
    flexDirection: "row-reverse",
  };
  const customBgStyle = {
    backgroundImage:
      "url('https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/6561e5d080f3c207d7a46b18_bg_banner.png')",
  };

  return (
    <div>
      <Navbar linkTentang={customLinkStyle} />
      <Banner
        bgStyle={customBgStyle}
        logoPutih="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/6561e53dc7d1f8d7a3f17382_logo_putih.svg"
      />

      <div className="w-layout-blockcontainer tentang_container w-container">
        <CardTentang
          gambarSrc="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/6561e53d1f695122e04fc401_ill_sapi.svg"
          judul="Tentang Kami"
          paragraf1="Bisaternak merupakan website yang berisi informasi, tata cara, 
            dan solusi terbaik untuk peternak dikarenakan semua yang ada di Bisaternak 
            merupakan hasil dari pemikiran para ahli dibidang peternakan."
          paragraf2="Bekerjasama dengan ahli peternakan dan menawarkan solusi terkait 
            seputar dunia peternakan khususnya peternak hewan ruminansia, seperti sapi, kambing,
             rusa dan sebagainya. Dengan hadirnya website Bisaternak salah satu keuntungannya adalah
              adanya layanan konsultasi dengan para ahli di bidang peternakan."
        />
        <CardTentang
          columnStyle={customColumnStyle}
          gambarSrc="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/6561e53dafefa88debd6d804_ill_kambing.svg"
          paragraf1="Tempat belajar seputar hewan ruminansia dari mulai cara merawat
            obat untuk hewan ruminansia dan semua hal lainnya terkait hewan
            ruminansia."
          paragraf2="Bisaternak pertama juga pertama kali terbentuk dari diskusi
            project massive yang beranggotakan 6 orang yang topik utamanya
            telah disepakati yaitu tentang peternakan ruminansia. Dengan
            hadirnya Bisaternak ini,bertujuan untuk menjadi salah satu
            solusi mudah dalam menangani semua hal seperti salah satunya
            yaitu bagaimana cara merawat obat-obat untuk hewan ruminansia
            dan lainnya yang masih seputar peternakan ruminansia"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Tentang;
