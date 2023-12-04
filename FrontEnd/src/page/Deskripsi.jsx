import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Deskripsis from "../component/CardDeskripsi"


const Deskripsi = () => {
    const customLinkStyle = {
        textDecoration: "underline",
    };

    return (
        <div>
            <Navbar linkKelas={customLinkStyle} />
            <section className="komponendes">
                <div className="w-layout-blockcontainer deskontainer w-container">
                    <Deskripsis />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Deskripsi;
