import "../media/Carosel.css"
import Dekorasi from "../assets/dekorasi.svg"
import IL from "../assets/logo stekholder/IL.png"
import MSIB from "../assets/logo stekholder/MSIB.png"
import Ternaknesia from "../assets/logo stekholder/Ternaknesia.png"
import ZEST from "../assets/logo stekholder/ZEST.png"
import UNAIR from "../assets/logo stekholder/UNAIR.png"

const caroselLogo = () => {
    return (
        <div className="w-layout-blockcontainer component_carosel w-container">
            <div className="w-layout-blockcontainer caroselcontainer w-container">

                <div className="logocontainer scroll">
                    <img
                        src={UNAIR}
                        loading="lazy" height="50" alt="" className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy" height="50" alt="" className="dekorasilogo" />
                    <img
                        src={Ternaknesia}
                        loading="lazy" height="50" alt="" className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy" height="50" alt="" className="dekorasilogo" />
                    <img
                        src={ZEST}
                        loading="lazy" height="50" alt="" className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy" height="50" alt="" className="dekorasilogo" />
                    <img
                        src={MSIB}
                        loading="lazy" height="50" alt="" className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy" height="50" alt="" className="dekorasilogo" />
                    <img
                        src={IL}
                        loading="lazy" height="50" alt="" className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy" height="50" alt="" className="dekorasilogo" />
                </div>

                <div className="logocontainer scroll">
                    <img
                        src={UNAIR}
                        loading="lazy" height="50" alt="" className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy" height="50" alt="" className="dekorasilogo" />
                    <img
                        src={Ternaknesia}
                        loading="lazy" height="50" alt="" className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy" height="50" alt="" className="dekorasilogo" />
                    <img
                        src={ZEST}
                        loading="lazy" height="50" alt="" className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy" height="50" alt="" className="dekorasilogo" />
                    <img
                        src={MSIB}
                        loading="lazy" height="50" alt="" className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy" height="50" alt="" className="dekorasilogo" />
                    <img
                        src={IL}
                        loading="lazy" height="50" alt="" className="logostekholder" />
                    <img
                        src={Dekorasi}
                        loading="lazy" height="50" alt="" className="dekorasilogo" />
                </div>
            </div>
        </div>
    );
};

export default caroselLogo;
