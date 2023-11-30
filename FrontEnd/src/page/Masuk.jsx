import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import { useState } from 'react';

const Masuk = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika pengiriman data atau otentikasi di sini
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <Navbar />
      <div className="component_form w-form" style={{ marginTop: "100px", }}>
        <div className="form_judul">Masuk ke akun Anda</div>

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="email" className="form_label">
            Alamat email*
          </label>
          <input
            type="email"
            className="form_input w-input"
            autoFocus
            maxLength="256"
            name="email"
            id="email"
            placeholder="Masukkan email anda"
            required=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="form_label">
            Kata sandi*
          </label>
          <input
            type="password"
            className="form_input w-input"
            maxLength="256"
            name="password"
            id="password"
            placeholder="Masukkan kata sandi anda"
            required=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="submit"
            value="Masuk"
            data-wait="Please wait..."
            className="button_oren w-button"
          />
        </form>
        <div className="w-layout-hflex flex-block">
          <img
            src="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/6565c78b3ae93ba265fab74d_ggel.png"
            loading="lazy" alt="" className="image-5" />
          <div className="text-block-2">Lanjutkan dengan google</div>
        </div>
        <div className="form_footer">Belum memiliki akun? <Link to="/daftar" style={{ textDecoration: "none", color: "orange" }}> Daftar disini</Link></div>
        <div className="w-form-done"></div>
        <div className="w-form-fail"></div>
      </div>
    </div>
  );
};

export default Masuk;
