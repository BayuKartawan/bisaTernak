import { Link } from "react-router-dom";

const hero = () => {
    return (
        <section className="component_header">
            <div className="w-layout-blockcontainer header_container w-container">
                <div className="header_container_inti">
                    <div className="header_text">Pelajari rahasia beternak </div>
                    <div className="header_text_ruminansia">hewan ruminansia</div>
                    <div className="header_text">
                        dan dapatkan konsultasi ahli di sini!
                    </div>
                    <div className="header_container_button">
                        <Link to="/kelas" className="button w-button">Ikuti kelas ternak hewan ruminansia</Link>
                        <Link to="/konsultasi" className="button w-button">Konsultasi permasalahan ternak anda</Link>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default hero;
