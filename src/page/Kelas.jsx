import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import CardKelas from "../component/CardKelas";

const Kelas = () => {
  const customLinkStyle = {
    fontWeight: "700 ",
    textDecoration: "underline",
  };
  const customBgStyle = {
    backgroundImage:
      "url('https://gsas.gord.qa/wp-content/uploads/2021/10/gsas-plaque2.jpg')",
  };

  return (
    <div>
      <Navbar linkKelas={customLinkStyle} />
      <Banner
        bgStyle={customBgStyle}
        h="qqwretetetetrtetetetet"
        p="rerjjhgfdsdfghjkjhgfdsasdfghj"
      />
      <section className="component_kelass">
        <div className="w-layout-blockcontainer kelass_kontainer w-container">
          <CardKelas
            judul="daadaad"
            oleh="adadadadad"
            img="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656223ff5479269f8042e551_gambar_kelas.png"
          />
          <CardKelas
            judul="daadaad"
            oleh="adadadadad"
            img="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656223ff5479269f8042e551_gambar_kelas.png"
          />
          <CardKelas
            judul="daadaad"
            oleh="adadadadad"
            img="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656223ff5479269f8042e551_gambar_kelas.png"
          />
          <CardKelas
            judul="daadaad"
            oleh="adadadadad"
            img="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656223ff5479269f8042e551_gambar_kelas.png"
          />
          <CardKelas
            judul="daadaad"
            oleh="adadadadad"
            img="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656223ff5479269f8042e551_gambar_kelas.png"
          />
          <CardKelas
            judul="daadaad"
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
