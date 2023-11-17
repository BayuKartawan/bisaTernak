import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import logo from "../assets/bisaternak.svg";

const Navbar = ({ linkKelas, linkBeranda, linkKonsultasi, linkTentang }) => {
  useEffect(() => {
    // Tambahkan script jQuery
    const scriptJQuery = document.createElement("script");
    scriptJQuery.src =
      "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=655623fb68d5248a0a2ff1cc";
    scriptJQuery.integrity =
      "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=";
    scriptJQuery.crossOrigin = "anonymous";
    document.head.appendChild(scriptJQuery);

    // Tambahkan script webflow
    const scriptWebflow = document.createElement("script");
    scriptWebflow.src =
      "https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/js/webflow.5e6727a5b.js";
    document.head.appendChild(scriptWebflow);

    // Cleanup pada saat komponen di-unmount
    return () => {
      document.head.removeChild(scriptJQuery);
      document.head.removeChild(scriptWebflow);
    };
  }, []); // Empty dependency array agar useEffect hanya dijalankan sekali pada saat mounting

  return (
    <>
      <div className="navbar-no-shadow">
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navbar-no-shadow-container w-nav">
          <div className="container-regular">
            <div className="navbar-wrapper">
              <Link to="/" className="navbar-brand w-nav-brand">
                <img
                  src={logo}
                  loading="lazy"
                  width="168"
                  alt=""
                  className="image"
                />
              </Link>
              <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                <ul role="list" className="nav-menu w-list-unstyled">
                  <li>
                    <Link to="/" style={linkBeranda} className="nav-link">
                      Beranda
                    </Link>
                  </li>
                  <li>
                    <Link to="/kelas" style={linkKelas} className="nav-link">
                      Kelas Ternak
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/konsultasi"
                      style={linkKonsultasi}
                      className="nav-link">
                      Konsultasi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tentang"
                      style={linkTentang}
                      className="nav-link">
                      Tentang
                    </Link>
                  </li>
                  <li className="mobile-margin-top-10">
                    <div className="nav-button-wrapper">
                      <a href="#" className="button-secondary w-button">
                        Daftar
                      </a>
                      <Link to="/masuk" className="button-primary w-button">
                        Masuk
                      </Link>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="menu-button w-nav-button">
                <div className="w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

Navbar.propTypes = {
  linkKelas: PropTypes.object.isRequired,
  linkBeranda: PropTypes.object.isRequired,
  linkKonsultasi: PropTypes.object.isRequired,
  linkTentang: PropTypes.object.isRequired,
};

export default Navbar;
