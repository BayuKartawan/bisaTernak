

const FormUp = () => {
    return (
        <div>
            <section className="componenupload" style={{ marginTop: "100px" }}>
                <div className="w-layout-blockcontainer container-2 w-container">
                    <h3 className="heading-4">Unggah koten</h3>
                    <p className="paragraph-4">Unggah konten dalam ruang linkup hewan ruminansia</p>
                    <div className="form-block w-form">

                        <form name="wf-form-unggah" data-name="unggah" method="post" >
                            <label htmlFor="judul" className="deslabel">Judul*</label>
                            <input type="text" className="desfield w-input" autoFocus="true" maxLength="256" name="judul" data-name="judul" placeholder="Masukkan judul materi..." required="" />
                            <label htmlFor="deskripsi" className="deslabel">Skripsi*</label>
                            <textarea
                                name="deskripsi" maxLength="5000" data-name="deskripsi"
                                placeholder="Tuliskan deskripsi materi ini..." required="" autoFocus="true"
                                className="desfield w-input">
                            </textarea>
                            <label htmlFor="linkVidio" className="deslabel">Link vidio youtube (privasi)*</label>
                            <input type="text" className="desfield w-input" autoFocus="true" maxLength="256"
                                name="linkVidio" data-name="linkVidio"
                                placeholder="contoh : https://www.youtube.com/bausaUBbjbU6HB..."
                                required="" />
                            <input type="submit" value="Unggah" data-wait="Please wait..."
                                className="buttontambah w-button" />
                        </form>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormUp
