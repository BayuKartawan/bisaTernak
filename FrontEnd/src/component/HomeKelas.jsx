const HomeKelas = () => {
    return (
        <div className="w-layout-blockcontainer card_home w-container">
            <div className="columns_aspirasi w-row">

                {/* KOLOM TEKS */}
                <div className="teks_konten_kelas w-col w-col-6">
                    <h1 className="judul_konten">Kelas</h1>
                    <h1 className="judul_konten2">BisaTernak?</h1>
                    <p className="paragraph_konten">Bingung memulai bisnis peternakan? Mulai dari ikut kelas BisaTernak aja dulu,
                        ada banyak ilmu untuk bekal kamu yang ingin memulai bisnis peternakan</p>
                    <div className="div-block">
                        <div className="list_kelas">
                            <div className="no_list_kelas">1</div>
                            <p className="teks_list_kelas">Penyakit Ternak Ruminansia</p>
                        </div>
                        <div className="list_kelas">
                            <div className="no_list_kelas">2</div>
                            <p className="teks_list_kelas">Bisnis Musiman Peternaka</p>
                        </div>
                        <div className="list_kelas">
                            <div className="no_list_kelas">3</div>
                            <p className="teks_list_kelas">Mengelolah sumber daya obatdan vaksinasi Hewan</p>
                        </div>
                        <div className="list_kelas">
                            <div className="no_list_kelas">4</div>
                            <p className="teks_list_kelas">Menejemen Pemberian Pakan</p>
                        </div>
                        <div className="list_kelas">
                            <div className="no_list_kelas">5</div>
                            <p className="teks_list_kelas">Dan masih bnyak lagi</p>
                        </div>
                    </div><a href="#" className="button_oren w-button">Kunjungi Kelas Ternak Kami</a>
                </div>

                {/* KOLOM GAMBAR */}
                <div className="gambar_konten_kelas w-col w-col-6">
                    <div className="blok_gambar"><img
                        src="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655e0a72c7b3271a8569e2f4_iklani.png"
                        loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 37vw, 40vw"
                        srcSet="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655e0a72c7b3271a8569e2f4_iklani-p-500.png 500w, https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655e0a72c7b3271a8569e2f4_iklani.png 623w"
                        alt="" className="gambar" /></div>
                </div>
            </div>
        </div>
    );
};

export default HomeKelas;
