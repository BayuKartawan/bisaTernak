import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Img from "../assets/Beranda/aspirasi.png"

const Profil = () => {

    //belum login
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Cek apakah pengguna sudah login
        if (!currentUser) {
            // Jika belum login, arahkan ke halaman login
            navigate("/login");
        }
    }, [currentUser, navigate]);
    //---

    const [user, setUser] = useState({});

    const fetchUser = async () => {
        await axios.post(`http://127.0.0.1:8800/api/users/user`, { uuid: localStorage.getItem("uuid") }).then(res => {
            console.log(res)
            setUser(res.data[0]);
        })
    }

    useEffect(() => {
        if (localStorage.getItem('uuid')) {
            fetchUser();
        }
    }, [])

    return (
        <section className="component_profil">
            <div className="w-layout-blockcontainer profil_bg w-container"></div>
            <div className="w-layout-blockcontainer profil_isi w-container">
                <img
                    src={Img}
                    loading="lazy" sizes="(max-width: 479px) 50vw, 120px"
                    srcSet={`${Img}500w, ${Img} 660w`}
                    alt="" className="profil_img" />
                <h4 className="heading-3">{user.name}</h4>
                <div className="w-layout-vflex">
                    <div className="biodata">Nama : {user.name}</div>
                    <div className="biodata">Email : {user.email}</div>
                </div>
                <a href="#" className="button-copy w-button">Perbaiki data</a>
            </div>
        </section>
    );
};

export default Profil;
