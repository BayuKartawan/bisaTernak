import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Berger from "../assets/Symbol/berger-ikon.svg";
import Logo from "../assets/Symbol/bisaternak.svg";
import "../media/Aktif.css";
import axios from "axios";
import Swal from 'sweetalert2';

const Navbar = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [isColorChanged, setColorChanged] = useState(false);

    const fetchUser = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8800/api/users/user', { uuid: localStorage.getItem("uuid") });
            setUser(response.data[0]);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }

    const logout = async () => {
        // Tampilkan SweetAlert untuk konfirmasi keluar
        const confirmLogout = await Swal.fire({
            title: 'Konfirmasi',
            text: 'Apakah Anda yakin ingin keluar?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Keluar!',
            cancelButtonText: 'Batal',
        });

        // Jika pengguna mengonfirmasi keluar, lakukan proses logout
        if (confirmLogout.isConfirmed) {
            try {
                await axios.post('http://127.0.0.1:8800/api/auth/logout', { uuid: localStorage.getItem("uuid") });
                localStorage.clear();
                window.location.reload();
                navigate("/");
            } catch (error) {
                // Tampilkan SweetAlert untuk pesan kesalahan
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Gagal keluar. Silakan coba lagi.',
                });
            }
        }
    }

    // Periksa apakah pengguna sudah login
    const isLoggedIn = !!user.uuid;

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

        // Fetch user data if UUID is present
        if (localStorage.getItem('uuid')) {
            fetchUser();
        }

        // Cleanup on component unmount
        return () => {
            document.body.removeChild(jqueryScript);
            document.body.removeChild(webflowScript);
        };
    }, []); // empty dependency array means this effect will only run once when the component mounts

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
                                        {isLoggedIn ? (
                                            <>
                                                <button className="button w-button" onClick={logout}>Keluar</button>
                                                <Link
                                                    to="/profil"
                                                    className="button w-button">
                                                    Profil
                                                </Link>
                                            </>
                                        ) : (
                                            <Link to="/login" className="button w-button">Masuk</Link>
                                        )}
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
        </div>
    );
};

export default Navbar;
