import Hero from "../component/Hero";
import CaroselLogo from "../component/CaroselLogo";
import Aspirasi from "../component/Aspirasi";
import HomeTentang from "../component/HomeTentang";
import HomeKelas from "../component/HomeKelas";
import HomeNara from "../component/HomeNara";
import Iklan from "../component/Iklan";

const Beranda = () => {

    return (
        <div>
            <Hero />
            <CaroselLogo />
            <Aspirasi />
            <HomeTentang />
            <HomeKelas />
            <HomeNara />
            <Iklan />
        </div>
    );
};

export default Beranda;
