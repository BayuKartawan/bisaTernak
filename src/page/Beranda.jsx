import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import CaroselLogo from "../component/CaroselLogo";
import Footer from "../component/Footer";
import Aspirasi from "../component/Aspirasi";
import HomeTentang from "../component/HomeTentang";
import HomeKelas from "../component/HomeKelas";
import HomeNara from "../component/HomeNara";
import Iklan from "../component/Iklan";

const Beranda = () => {
  const customLinkStyle = {
    fontWeight: "700 ",
    textDecoration: "underline",
  };
  return (
    <div>
      <Navbar linkBeranda={customLinkStyle} />
      <Hero />
      <CaroselLogo />
      <Aspirasi />
      <HomeTentang />
      <HomeKelas />
      <HomeNara />
      <Iklan />
      <Footer />
    </div>
  );
};

export default Beranda;
