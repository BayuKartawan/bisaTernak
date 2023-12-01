const Aspirasi = () => {
    return (
        <div className="w-layout-blockcontainer card_home w-container">
            <div className="columns_aspirasi w-row">

                {/* KOLOM 1 */}
                <div className="teks_konten w-col w-col-6">
                    <h1 className="judul_konten">Aspirasi dan</h1>
                    <h1 className="judul_konten2">Tujuan kami</h1>
                    <p className="paragraph_konten">
                        Mengacu data Sistem Informasi Kesehatan Hewan Nasional (ISIKHNAS)
                        pada november 2023, telah ditemukan 115.067 hewan ruminansia
                        terjangkit penyakit diseluruh indonesia. Ini disebabkan karena
                        kurangnya pengetahuan peternak untuk mencegah dan menyembuhkan
                        penyakit pada hewan ternak mereka.
                    </p>
                    <p className="paragraph_konten">
                        Terkait data diatas kami ingin menyediakan informasi untuk membantu
                        peternak dan memberikan layanan jaringan koneksi antar komunitas
                        peternak serta memberikan konsultasi edukatif terkait ilmu
                        peternakan dan kesehatan hewan.
                    </p>
                </div>

                {/* KOLOM 2 */}
                <div className="gambar_konten w-col w-col-6">
                    <div className="blok_gambar">
                        <img
                            src="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655a32f3fdb0172c587e95ee_foto%20aspirasi.png"
                            loading="lazy"
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 41vw, 40vw"
                            srcSet="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655a32f3fdb0172c587e95ee_foto%20aspirasi-p-500.png 500w, https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655a32f3fdb0172c587e95ee_foto%20aspirasi.png 660w"
                            alt=""
                            className="gambar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aspirasi;
