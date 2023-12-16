import "../media/Carosel.css"
import Dekorasi from "../assets/Symbol/dekorasi.svg"
import IL from "../assets/Symbol/logo stekholder/IL.png"
import MSIB from "../assets/Symbol/logo stekholder/MSIB.png"
import Ternaknesia from "../assets/Symbol/logo stekholder/Ternaknesia.png"
import ZEST from "../assets/Symbol/logo stekholder/ZEST.png"
import UNAIR from "../assets/Symbol/logo stekholder/UNAIR.png"

const caroselLogo = () => {
    return (
        <div className="w-layout-blockcontainer component_carosel w-container">
            <div className="w-layout-blockcontainer caroselcontainer w-container">

                <div className="logocontainer scroll">
                    <img
                        src={UNAIR}
                        loading="lazy"
                        height="50"
                        className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy"
                        height="50"
                        className="dekorasilogo" />
                    <img
                        src={Ternaknesia}
                        loading="lazy"
                        height="50"
                        className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy"
                        height="50"
                        className="dekorasilogo" />
                    <img
                        src={ZEST}
                        loading="lazy"
                        height="50"
                        className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy"
                        height="50"
                        className="dekorasilogo" />
                    <img
                        src={MSIB}
                        loading="lazy"
                        height="50"
                        className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy"
                        height="50"
                        className="dekorasilogo" />
                    <img
                        src={IL}
                        loading="lazy"
                        height="50"
                        className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy"
                        height="50"
                        className="dekorasilogo" />
                </div>

                <div className="logocontainer scroll">
                    <img
                        src={UNAIR}
                        loading="lazy"
                        height="50"
                        className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy"
                        height="50"
                        className="dekorasilogo" />
                    <img
                        src={Ternaknesia}
                        loading="lazy"
                        height="50"
                        className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy"
                        height="50"
                        className="dekorasilogo" />
                    <img
                        src={ZEST}
                        loading="lazy"
                        height="50"
                        className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy"
                        height="50"
                        className="dekorasilogo" />
                    <img
                        src={MSIB}
                        loading="lazy"
                        height="50"
                        className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy"
                        height="50"
                        className="dekorasilogo" />
                    <img
                        src={IL}
                        loading="lazy"
                        height="50"
                        className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy"
                        height="50"
                        className="dekorasilogo" />
                </div>
            </div>
        </div>
    );
};

export default caroselLogo;
