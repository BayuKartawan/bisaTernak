import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const tidakTahu = () => {
    return (
        <div>
            <Navbar />
            <div className="w-layout-blockcontainer container w-container" style={{ marginTop: "75px" }}>
                <p className="paragraph-3">Halaman tidak ditemukan!</p><img
                    src="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656b6619d5b2d0fa8a0dae49_NotFound.svg"
                    loading="lazy" width="258" alt="" />
            </div>
            <Footer />
        </div>
    );
};

export default tidakTahu;
