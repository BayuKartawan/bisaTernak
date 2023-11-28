import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

const Masuk = () => {
  return (
    <div>
      <Navbar />
      <div className="component_form w-form" style={{ marginTop: "100px", }}>
        <div className="form_judul">Masuk ke akun Anda</div>

        <form
          id="wf-form-form-masuk"
          name="wf-form-form-masuk"
          data-name="form masuk"
          method="get"
          className="form"
          data-wf-page-id="655623fb68d5248a0a2ff1d2"
          data-wf-element-id="25898d28-a3a3-1243-0807-6746b6840197">
          <label
            htmlFor="email-2"
            className="form_label">Alamat email*</label>
          <input
            type="email"
            className="form_input w-input"
            autoFocus="true"
            maxLength="256"
            name="email-2"
            data-name="Email 2"
            placeholder="Masukkan email anda"
            id="email-2"
            required="" />
          <label
            htmlFor="field-3"
            className="form_label">Kata sandi*</label>
          <input type="password"
            className="form_input w-input"
            autoFocus="true"
            maxLength="256"
            name="field-3"
            data-name="Field 3"
            placeholder="Masukkan kata sandi anda"
            id="field-3"
            required="" />

          <input
            type="submit"
            value="Masuk"
            data-wait="Please wait..."
            className="button_oren w-button" />
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
