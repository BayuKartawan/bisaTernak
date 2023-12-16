import Navbar from "../component/Navbar"
import { useState } from 'react';
import { Link } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Tambahkan logika pendaftaran atau pengiriman data ke server di sini
        console.log('Data Pendaftaran:', { name, email, password, confirmPassword });

        // Setelah pengiriman, Anda mungkin ingin mengatur state kembali ke nilai awal
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <>
            <Navbar />
            <div className="component_form" style={{ marginTop: "100px", }}>
                <div className="form_judul">Buat Akun</div>
                <form onSubmit={handleSubmit} className="form">
                    <label htmlFor="name" className="form_label">
                        Nama pengguna*
                    </label>
                    <input
                        type="text"
                        className="form_input w-input"
                        maxLength="256"
                        name="name"
                        id="name"
                        placeholder="Masukkan nama lengkap anda"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="email" className="form_label">
                        Alamat email*
                    </label>
                    <input
                        type="email"
                        className="form_input w-input"
                        maxLength="256"
                        name="email"
                        id="email"
                        placeholder="Masukkan email anda"
                        required
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
                        placeholder="Masukkan kata sandi yang kuat"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label htmlFor="confirmPassword" className="form_label">
                        Konfirmasi kata sandi*
                    </label>
                    <input
                        type="password"
                        className="form_input w-input"
                        maxLength="256"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Konfirmasi kata sandi anda"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <input
                        type="submit"
                        value="Konfirmasi dan lanjutkan"
                        data-wait="Please wait..."
                        className="button_oren w-button"
                    />
                </form>
                <div className="form_footer">Sudah memiliki akun? <Link to="/login" style={{ textDecoration: "none", color: "orange" }}> Masuk disini</Link></div>
                <div className="w-form-done"></div>
                <div className="w-form-fail"></div>
            </div>
        </>
    )
}

export default Register
