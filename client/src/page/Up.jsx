import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from 'react';

const Up = () => {

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
    };

    return (
        <div>
            <section className="componenupload" style={{ marginTop: "10px" }}>
                <div className="w-layout-blockcontainer container-2 w-container">
                    <h3 className="heading-4">Unggah koten</h3>
                    <p className="paragraph-4">Unggah konten dalam ruang linkup hewan ruminansia</p>
                    <div className="form-block w-form">

                        <form name="wf-form-unggah"
                            method="post" >
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

                            {/* link youtube */}
                            <label htmlFor="linkVidio" className="deslabel">ID vidio youtube (privasi)*</label>
                            <input
                                type="text"
                                className="desfield w-input"
                                maxLength="256"
                                name="linkVidio"
                                data-name="linkVidio"
                                placeholder="contoh : https://www.youtube.com/bausaUBbjbU6HB..."
                                required="" />

                            {/* upload cover */}
                            <input
                                style={{ display: "none" }}
                                type="file"
                                id="file"
                                name=""
                                onChange={handleImageChange}
                            />
                            <label className="deslabel"
                                htmlFor="file"
                                style={{
                                    border: "1px solid lightgray",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    backgroundColor: "#C1F2B0",
                                    textAlign: "center",
                                    marginBottom: "30px"
                                }}>
                                Unggah latar kelas*
                            </label>

                            {selectedImage && (
                                <div style={{ marginBottom: "30px" }}>
                                    <p>Preview:</p>
                                    <img src={selectedImage} alt="Uploaded" style={{ maxWidth: '100%' }} />
                                </div>
                            )}

                            <input
                                type="submit"
                                value="Unggah"
                                data-wait="Please wait..."
                                className="buttontambah w-button" />
                        </form>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Up
