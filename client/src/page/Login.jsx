import Navbar from "../component/Navbar";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);


    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(inputs)
            navigate("/");
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="component_form " style={{ marginTop: "100px", }}>
                <div className="form_judul">Masuk ke akun Anda</div>

                <form onSubmit={handleSubmit} className="form">
                    <label htmlFor="email" className="form_label">
                        Alamat email*
                    </label>
                    <input
                        type="text"
                        required
                        className="form_input w-input"
                        maxLength="256"
                        name="username"
                        placeholder="Masukkan username anda"
                        onChange={handleChange}
                    />

                    <label htmlFor="password" className="form_label">
                        Kata sandi*
                    </label>
                    <input
                        type="password"
                        required
                        className="form_input w-input"
                        maxLength="256"
                        name="password"
                        id="password"
                        placeholder="Masukkan kata sandi anda"
                        onChange={handleChange}
                    />
                    <button className="button_oren w-button" onClick={handleSubmit}>Login</button>
                    {err && <p>{err}</p>}

                </form>
                <div className="form_footer">Belum memiliki akun? <Link to="/register" style={{ textDecoration: "none", color: "orange" }}> Daftar disini</Link></div>
                <div className="w-form-done"></div>
                <div className="w-form-fail"></div>
            </div>
        </div>
    );
};

export default Login;