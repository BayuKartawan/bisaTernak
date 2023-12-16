import { Link } from "react-router-dom";
import Nara1 from "../assets/Narasumber/pakAgung.jpg"
import Nara2 from "../assets/Narasumber/pakSyahril.jpg"
import Nara3 from "../assets/Narasumber/buSiti.jpg"

const HomeNara = () => {
    return (
        <div className="w-layout-blockcontainer component_nara w-container">
            <h1 className="nara_heading">Bicarakan Kepada para Ahli</h1>
            <div className="nara_columns w-row">

                <div className="nara_colum_card w-col w-col-4">
                    <div className="nara_card">
                        <div className="nara_blok_gbr"><img
                            src={Nara1}
                            loading="lazy" width="375" alt="" className="narasumber" /></div>
                        <h6 className="nara_heading_card">drh. Agung Budianto ahmad, M.Si</h6>
                        <p className="nara_tks_card">Bapak drh. Agung Budianto ahmad, M.Si, merupakan dosen Universitas Gadjah
                            Mada. beliau merupakan dokter hewan yang sudah banyak mengajar dibeberapa perguruan tinggi di
                            Indonesia.</p>
                    </div>
                </div>

                <div className="nara_colum_card w-col w-col-4">
                    <div className="nara_card">
                        <div className="nara_blok_gbr"><img
                            src={Nara2}
                            loading="lazy" width="378" alt="" className="narasumber" /></div>
                        <h6 className="nara_heading_card">Ir. Syahril Akil</h6>
                        <p className="nara_tks_card">Bapak Ir. Syahrir Akil, IPU yang merupakan direktur dari PT. BSB, anak
                            perusahan dari PT Charoen Phokpand Indonesia. beliau merupakan konsultan ternak, dan sudah
                            memiliki pengalaman selama 26 tahun dibidang peternakan.</p>
                    </div>
                </div>

                <div className="nara_colum_card w-col w-col-4">
                    <div className="nara_card">
                        <div className="nara_blok_gbr"><img
                            src={Nara3}
                            loading="lazy" width="370" alt="" className="narasumber" /></div>
                        <h6 className="nara_heading_card">drh. Siti Eliana, M.Si</h6>
                        <p className="nara_tks_card">Ibu Siti Eliana Rochmi adalah dosen Program Paramedis Veteriner Universitas
                            Airlangga. Ibu Rochmi melakukan penelitian tentang Teknologi Terapan Kesehatan Hewan Tropis dan
                            Kesehatan Hewan.</p>
                    </div>
                </div>

            </div>
            <Link to="/konsultasi" className="button_oren w-button">Pergi ke Konsultasi</Link>
        </div>
    );
};

export default HomeNara;
