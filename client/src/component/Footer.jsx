import { Link } from "react-router-dom";
import IG from "../assets/Symbol/Sosmed/ig.svg"
import Tweet from "../assets/Symbol/Sosmed/tweet.svg"
import FB from "../assets/Symbol/Sosmed/fb.svg"
import Logo from "../assets/Symbol/bisaternak.svg"

const Footer = () => {
    return (
        <section className="componen_footer">
            <div className="w-layout-blockcontainer container_footer w-container">
                <div className="colum_footer w-row">

                    {/* KOLOM LOGO */}
                    <div className="column_footer1 w-col w-col-6">
                        <Link to="/" className="footer_blok_logo w-inline-block">
                            <img
                                src={Logo}
                                loading="lazy"
                                width="164"
                                className="logo_footer"
                            />
                        </Link>
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
                                    className="sosmed"
                                />
                            </a>
                            <a href="#" className="w-inline-block">
                                <img
                                    src={FB}
                                    loading="lazy"
                                    width="41"
                                    className="sosmed"
                                />
                            </a>
                            <a href="#" className="w-inline-block">
                                <img
                                    src={Tweet}
                                    loading="lazy"
                                    width="41"
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
