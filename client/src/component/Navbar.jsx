import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Img from "../assets/Beranda/aspirasi.png"
import Berger from "../assets/Symbol/berger-ikon.svg"
import Logo from "../assets/Symbol/bisaternak.svg"
import "../media/Aktif.css"
import axios from "axios";

const Navbar = () => {

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const fetchUser = async () => {
        await axios.post('http://127.0.0.1:8800/api/users/user', { uuid: localStorage.getItem("uuid") }).then(res => {
            setUser(res.data[0]);
        })
    }

    const logout = async () => {

        await axios.post('http://127.0.0.1:8800/api/auth/logout', { uuid: localStorage.getItem("uuid") }).then(res => {

            if (res.statusText == 'OK') {
                localStorage.clear();
                window.location.reload();
                navigate("/")

            }
        })

    }

    useEffect(() => {
        // Load jQuery
        const jqueryScript = document.createElement('script');
        jqueryScript.src = 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=655623fb68d5248a0a2ff1cc';
        jqueryScript.integrity = 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=';
        jqueryScript.crossOrigin = 'anonymous';
        document.body.appendChild(jqueryScript);

        // Load other scripts
        const webflowScript = document.createElement('script');
        webflowScript.src = 'https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/js/webflow.2a12922c5.js';
        webflowScript.type = 'text/javascript';
        document.body.appendChild(webflowScript);
        if (localStorage.getItem('uuid')) {
            fetchUser();
        }

        // Cleanup on component unmount
        return () => {
            document.body.removeChild(jqueryScript);
            document.body.removeChild(webflowScript);
        };
    }, []); // empty dependency array means this effect will only run once when the component mounts

    // color berger on di cekik
    const [isColorChanged, setColorChanged] = useState(false);

    const handleClick = () => {
        setColorChanged(!isColorChanged);
    };

    const imageStyle = {
        filter: isColorChanged ? 'invert(100%)' : 'none',
    };

    return (
        <div className="component_navbar">
            <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease"
                role="banner" className="navbar w-nav">
                <div className="navbar_container">

                    <div className="navbar_container_item">
                        <Link to="/" className="navbar_brand w-nav-brand">
                            <img
                                src={Logo}
                                loading="lazy" width="164" alt="" className="logo_navbar" />
                        </Link>
                        <nav role="navigation" className="navbar_menu w-nav-menu" >
                            <ul role="list" className="nav-menu w-list-unstyled" >
                                <li><NavLink to="/" activeClassName="active" className="nav-link">Beranda</NavLink></li>
                                <li><NavLink to="/kelas" activeClassName="active" className="nav-link">Kelas Ternak</NavLink></li>
                                <li><NavLink to="/konsultasi" activeClassName="active" className="nav-link">Konsultasi</NavLink></li>
                                <li><NavLink to="/tentang" activeClassName="active" className="nav-link">Tentang</NavLink></li>
                                <li>
                                    <div className="nav-button-wrapper">
                                        {user.uuid ? <btn className="button w-button" onClick={logout}>Logout</btn> :
                                            <Link to="/login" className="button w-button">Masuk</Link>
                                        }
                                        <Link
                                            to="/profil"
                                            className="nav-profil" >
                                            <img
                                                src={Img}
                                                loading="lazy"
                                                height="45"
                                                width="45"
                                                style={{ objectFit: "cover", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)", display: "inline-block", borderRadius: "50%" }}
                                            />
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <div className="nav_menu_button w-nav-button">
                            <div className="nav_icon">
                                <img
                                    src={Berger}
                                    loading="lazy"
                                    height="35"
                                    width="35"
                                    style={imageStyle}
                                    onClick={handleClick}
                                    alt=""
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
