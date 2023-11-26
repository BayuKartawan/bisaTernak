import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ linkKelas, linkBeranda, linkKonsultasi, linkTentang }) => {
  return (
    <>
      <div className="component_navbar">
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navbar w-nav">
          <div className="container_navbar">
            <div className="container_item">
              <a href="#" className="navbar_brand w-nav-brand">
                <img
                  src="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/6558bf9a378415d1dbd3e7eb_logo%20baru.svg"
                  loading="lazy"
                  width="164"
                  alt=""
                  className="logo_navbar"
                />
              </a>
              <nav role="navigation" className="navbar_menu w-nav-menu">
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
                  <li>
                    <div className="nav-button-wrapper">
                      <Link to="/masuk" className="button w-button">
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
      </div>
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
