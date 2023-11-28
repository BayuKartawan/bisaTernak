
import Navbar from "../component/Navbar"
import { Link } from "react-router-dom";

const Daftar = () => {
    return (
        <>
            <Navbar />
            <div className="component_form w-form" style={{ marginTop: "100px", }}>
                <div className="form_judul">Buat Akun</div>
                <form id="wf-form-form-daftar" name="wf-form-form-daftar" data-name="form daftar" method="get" className="form"
                    data-wf-page-id="655623fb68d5248a0a2ff1d2" data-wf-element-id="18705a74-af6a-68d4-7d36-27f77fe93604"><label
                        htmlFor="name" className="form_label">Nama pengguna*</label><input type="text" className="form_input w-input"
                            autoFocus="true" maxLength="256" name="name" data-name="Name" placeholder="Masukkan nama lengkap anda"
                            id="name" required="" /><label htmlFor="email" className="form_label">Alamat email*</label><input type="email"
                                className="form_input w-input" autoFocus="true" maxLength="256" name="email" data-name="Email"
                                placeholder="Masukkan email anda" id="email" required="" /><label htmlFor="field" className="form_label">Kata
                                    sandi*</label><input type="password" className="form_input w-input" autoFocus="true" maxLength="256"
                                        name="field" data-name="Field" placeholder="Masukkan kata sandi yang kuat" id="field"
                                        required="" /><label htmlFor="field-2" className="form_label">Konfirmasi kata sandi*</label><input
                        type="password" className="form_input w-input" autoFocus="true" maxLength="256" name="field-2"
                        data-name="Field 2" placeholder="Konfirmasi kata sandi anda" id="field-2" required="" /><input
                        type="submit" value="Konfirmasi dan lanjutkan" data-wait="Please wait..."
                        className="button_oren w-button" /></form>
                <div className="form_footer">Sudah memiliki akun? <Link to="/masuk" style={{ textDecoration: "none", color: "orange" }}> Masuk disini</Link></div>
                <div className="w-form-done"></div>
                <div className="w-form-fail"></div>
            </div>
        </>
    )
}

export default Daftar
