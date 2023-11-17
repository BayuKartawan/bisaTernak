import React from "react";
import Navbar from "../component/Navbar";
import "../style/Navbar.css";

const Konsultasi = () => {
  const customLinkStyle = {
    fontWeight: "700 ",
    textDecoration: "underline",
  };

  return (
    <>
      <Navbar linkKonsultasi={customLinkStyle} />
      <h1 style={{ textAlign: "center" }}>HALAMAN KONSULTASI</h1>
    </>
  );
};

export default Konsultasi;
