import React from "react";
import Navbar from "../component/Navbar";
import "../style/Navbar.css";

const Kelas = () => {
  const customLinkStyle = {
    fontWeight: "700 ",
    textDecoration: "underline",
  };

  return (
    <div>
      <Navbar linkKelas={customLinkStyle} />
      <h1 style={{ textAlign: "center" }}>HALAMAN KELAS</h1>
    </div>
  );
};

export default Kelas;
