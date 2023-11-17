import Navbar from "../component/Navbar";
import "../style/Navbar.css";

const Beranda = () => {
  const customLinkStyle = {
    fontWeight: "700 ",
    textDecoration: "underline",
  };

  return (
    <div>
      <Navbar linkBeranda={customLinkStyle} />
      <h1 style={{ textAlign: "center" }}>HALAMAN BERANDA</h1>
    </div>
  );
};

export default Beranda;
