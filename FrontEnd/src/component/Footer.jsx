import IG from "../assets/Sosmed/ig.svg"
import Tweet from "../assets/Sosmed/tweet.svg"
import FB from "../assets/Sosmed/fb.svg"
import Logo from "../assets/Logo/bisaternak.svg"

const Footer = () => {
    return (
        <section className="componen_footer">
            <div className="w-layout-blockcontainer container_footer w-container">
                <div className="colum_footer w-row">

                    {/* KOLOM LOGO */}
                    <div className="column_footer1 w-col w-col-6">
                        <a href="#" className="footer_blok_logo w-inline-block">
                            <img
                                src={Logo}
                                loading="lazy"
                                width="164"
                                alt=""
                                className="logo_footer"
                            />
                        </a>
                        <p className="teks-_copyrigt">
                            © 2023 All Rights Reserved Bisaternak
                        </p>
                    </div>

                    {/* KOLOM SOSMED */}
                    <div className="colum_footer2 w-col w-col-6">
                        <div className="blok_hubungi">
                            <h6 className="heading_footer">Ikuti Kami :</h6>
                            <a href="#" className="w-inline-block">
                                <img
                                    src={IG}
                                    loading="lazy"
                                    width="41"
                                    alt=""
                                    className="sosmed"
                                />
                            </a>
                            <a href="#" className="w-inline-block">
                                <img
                                    src={FB}
                                    loading="lazy"
                                    width="41"
                                    alt=""
                                    className="sosmed"
                                />
                            </a>
                            <a href="#" className="w-inline-block">
                                <img
                                    src={Tweet}
                                    loading="lazy"
                                    width="41"
                                    alt=""
                                    className="sosmed"
                                />
                            </a>
                        </div>
                        <div className="blok_hubungi">
                            <h6 className="heading_footer">Hubungi Kami :</h6>
                            <a href="#" className="link">
                                083 112 016 292
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
