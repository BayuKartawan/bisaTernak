import axios from "axios";
import { useEffect, useState } from "react";

const Profil = () => {

    const [user, setUser] = useState({});

    const fetchUser = async () => {
        await axios.post(`http://127.0.0.1:8800/api/users/user`, {uuid : localStorage.getItem("uuid")}).then(res => {
            console.log(res)
            setUser(res.data[0]);
        })
    }

    useEffect(() => {
        if(localStorage.getItem('uuid')) {
            fetchUser();
        }
    }, [])
    return (
        <section className="component_profil">
            <div className="w-layout-blockcontainer profil_bg w-container"></div>
            <div className="w-layout-blockcontainer profil_isi w-container"><img
                src="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655a32f3fdb0172c587e95ee_foto%20aspirasi.png"
                loading="lazy" sizes="(max-width: 479px) 50vw, 120px"
                srcSet="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655a32f3fdb0172c587e95ee_foto%20aspirasi-p-500.png 500w, https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655a32f3fdb0172c587e95ee_foto%20aspirasi.png 660w"
                alt="" className="profil_img" />
                <h4 className="heading-3">{user.name}</h4>
                <div className="w-layout-vflex">
                    <div className="biodata">Nama : {user.name}</div>
                    <div className="biodata">Email : {user.email}</div>
                    <div className="biodata">Alamat : Koniha</div>
                    <div className="biodata">No HP : Koniha</div>
                </div><a href="#" className="button-copy w-button">Perbaiki data</a>
            </div>
        </section>
    );
};

export default Profil;
