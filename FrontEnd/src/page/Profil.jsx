import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Profil = () => {
    return (
        <>
            <Navbar />
            <section className="component_profil">
                <div className="w-layout-blockcontainer profil_bg w-container"></div>
                <div className="w-layout-blockcontainer profil_isi w-container"><img
                    src="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655e148ecd9785440256d5c2_333.png"
                    loading="lazy" alt="" className="profil_img" />
                    <h4 className="heading-3">Uzumaki Bambang</h4>
                    <div className="w-layout-vflex">
                        <div className="biodata">Nama : Uzumaki Bambang</div>
                        <div className="biodata">Email : bambangUzumaki@gmail.com</div>
                        <div className="biodata">Alamat : Koniha</div>
                    </div><a href="#" className="button-copy w-button">Perbaiki data</a>
                </div>
                <Footer />
            </section>
        </>
    );
};

export default Profil;
