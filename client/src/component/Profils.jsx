

const Profils = () => {
    return (
        <section className="component_profil">
            <div className="w-layout-blockcontainer profil_bg w-container"></div>
            <div className="w-layout-blockcontainer profil_isi w-container"><img
                src="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655a32f3fdb0172c587e95ee_foto%20aspirasi.png"
                loading="lazy" sizes="(max-width: 479px) 50vw, 120px"
                srcSet="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655a32f3fdb0172c587e95ee_foto%20aspirasi-p-500.png 500w, https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655a32f3fdb0172c587e95ee_foto%20aspirasi.png 660w"
                alt="" className="profil_img" />
                <h4 className="heading-3">Uzumaki Bambang</h4>
                <div className="w-layout-vflex">
                    <div className="biodata">Nama : Uzumaki Bambang</div>
                    <div className="biodata">Email : bambangUzumaki@gmail.com</div>
                    <div className="biodata">Alamat : Koniha</div>
                    <div className="biodata">No HP : Koniha</div>
                </div><a href="#" className="button-copy w-button">Perbaiki data</a>
            </div>
        </section>
    )
}

export default Profils
