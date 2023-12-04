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
            <section className="komponendes" style={{ marginTop: "20px" }}>
                <div className="w-layout-blockcontainer deskontainer w-container">
                    <Deskripsis
                        Judul="&quot;Californication&quot; - Red Hot Chili Peppers (Cover by First to Eleven)"
                        Vidio="f1iW734wGns"
                        Deskripsi="gLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Deskripsi;
