import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import CardKelas from "../component/CardKelas";
import UpImg from "../assets/Symbol/AddImage.png"
import Unggah from "../assets/Symbol/Up.png"
import "../media/up.css"

const Up = () => {

    //jika belumlogin 
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to login if user is not authenticated
        if (!currentUser) {
            navigate('/login');
        }
    }, [currentUser, navigate]);

    //up gambar n preview
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    const customCardKelasStyle = {
        pointerEvents: "none"
    };

    //form set
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Form submitted!");

        // Tambahkan logika pengiriman data atau tindakan yang sesuai di sini
        try {
            // ... Logika pengiriman data ...
        } catch (error) {
            console.error("Error:", error);
        }
    };

    //pop up
    const [isPopupVisible, setPopupVisible] = useState(false);

    const showPopup = () => {
        setPopupVisible(true);
    };

    const hidePopup = () => {
        setPopupVisible(false);
    };

    return (

        <section className="componenupload" style={{ marginTop: "10px" }}>
            <div className="w-layout-blockcontainer container-2 w-container">
                <h3 className="heading-4">Unggah koten</h3>
                <p className="paragraph-4" style={{ padding: "20px", borderRadius: "10px" }}>Unggah konten dalam ruang linkup hewan ruminansia</p>
                <div className="form-block">

                    <form name="wf-form-unggah"
                        method="post"
                        onSubmit={handleSubmit} >

                        <label className="deslabel"
                            htmlFor="file"
                            style={{
                                borderRadius: "5px",
                                textAlign: "center",
                                marginBottom: "20px",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                backgroundColor: "#FAF8ED",
                                borderStyle: "dashed", // Gaya garis jalan (dashed)
                                borderColor: "#F86F03", // Warna garis jalan
                            }}>
                            <img
                                src={UpImg}
                                height="30px"
                                loading="lazy"
                                style={{ marginBottom: "5px", marginRight: "5px" }}>
                            </img><p>Unggah sampul kelas*</p>
                            {selectedImage && (
                                <div style={{ backgroundColor: "white", paddingTop: "10px", display: "flex", flexDirection: "column", alignItems: "center", borderTop: "1px solid lightgray", marginTop: "10px" }} >
                                    <p style={{ fontFamily: "League Spartan" }}>Pratinjau :</p>
                                    <CardKelas
                                        Link={customCardKelasStyle}
                                        img={selectedImage}
                                        judul="(pratinjau)"
                                        oleh="(pratinjau)" />
                                </div>
                            )}
                        </label>

                        {/* upload cover */}
                        <input
                            style={{ display: "none" }}
                            type="file"
                            id="file"
                            name=""
                            onChange={handleImageChange}
                        />

                        {/* link youtube */}
                        <label htmlFor="linkVidio" className="deslabel">
                            ID vidio youtube (privasi)*<button onClick={showPopup}>?</button>

                            {isPopupVisible && (
                                <div className="popup">
                                    <p>Cara melihat id Youtube <br />
                                        - Contoh url youtube : https://www.youtube.com/watch?v=sSuyO0f9KmM <br />
                                        - ID dilihat setelah v= yaitu : <b>sSuyO0f9KmM</b> <br />
                                        - Jumlah id youtub 11 angka/huruf</p>
                                    <button onClick={hidePopup} className="popup-click">Close</button>
                                </div>
                            )}
                        </label>
                        <input
                            type="text"
                            className="desfield w-input"
                            maxLength="256"
                            name="linkVidio"
                            data-name="linkVidio"
                            placeholder="contoh : sSuyO0f9KmM"
                            required="" />

                        {/* INPUT JUDUL} */}
                        <label htmlFor="judul" className="deslabel">Judul*</label>
                        <input
                            type="text"
                            className="desfield w-input"
                            maxLength="256"
                            name="judul"
                            data-name="judul"
                            placeholder="Masukkan judul materi..."
                            required="" />

                        {/* Form Deskripsi */}
                        <p className="deslabel">Deskripsi*</p>
                        <div style={{
                            height: "300px",
                            overflow: "scroll",
                            border: "1px solid lightgray",
                            marginBottom: "10px",
                        }}>
                            <ReactQuill
                                style={{
                                    height: "100%",
                                    border: "none",
                                }}
                                theme="snow"
                                value=""
                                onChange=""
                            />
                        </div>

                        <button
                            style={{ marginBottom: "20px", marginTop: "20px", width: "100%" }}
                            type="submit"
                            data-wait="Please wait..."
                            className="buttontambah w-button"
                        ><img src={Unggah} height="20px" loading="lazy" alt="Unggah" style={{ marginBottom: "5px", marginRight: "5px" }} />
                            Unggah
                        </button>
                    </form>

                </div>
            </div>
        </section >
    )
}

export default Up
