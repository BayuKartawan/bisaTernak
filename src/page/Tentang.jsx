import React from "react";
import Navbar from "../component/Navbar";
import "../style/Navbar.css";

const Tentang = () => {
  const customLinkStyle = {
    fontWeight: "700 ",
    textDecoration: "underline",
  };

  return (
    <div>
      <Navbar linkTentang={customLinkStyle} />
      <h1 style={{ textAlign: "center" }}>HALAMAN TENTANG</h1>
    </div>
  );
};

export default Tentang;
