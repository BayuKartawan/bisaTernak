const homeTentang = () => {
  return (
    <div>
      <div className="w-layout-blockcontainer card_home w-container">
        <div className="columns_tentang w-row">
          <div className="teks_konten_tentang w-col w-col-6">
            <h1 className="judul_konten">Mengapa Memilih</h1>
            <h1 className="judul_konten2">BisaTernak?</h1>
            <p className="paragraph_konten">BisaTernak merupakan website yang berisi informasi, tata cara, dan solusi
              terbaik untuk peternak dikarenakan semua yang ada di BisaTernak merupakan hasil dari pemikiran para
              ahli dibidang peternakan.</p>
            <div className="text-block">Bekerjasama dengan para ahli peternakan</div>
            <div className="text-block">Tempat belajar seputar hewan ruminansia</div><a href="#"
              className="button_oren w-button">Lebih lengkap Tentang BisaTernak</a>
          </div>
          <div className="gambar_konten_tentang w-col w-col-6">
            <div className="blok_gambar"><img
              src="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655e04beacb6cb16afa22cf1_tentangg.png"
              loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 41vw, 40vw"
              srcSet="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655e04beacb6cb16afa22cf1_tentangg-p-500.png 500w, https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655e04beacb6cb16afa22cf1_tentangg.png 620w"
              alt="" className="gambar" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homeTentang;
