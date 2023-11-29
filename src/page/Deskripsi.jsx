import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CardDeskripsi from "../component/CardDeskripsi";

const Deskripsi = () => {
  const customLinkStyle = {
    fontWeight: "700 ",
    textDecoration: "underline",
  };
  const customColumnStyle = {
    flexDirection: "row-reverse",
  };

  return (
    <div>
      <Navbar linkKelas={customLinkStyle} />
      <section className="component_hal_tentang">
        <div className="w-layout-blockcontainer deskripsi_container w-container">
          <CardDeskripsi
            gambarDeskripsiSrc="https://s3-alpha-sig.figma.com/img/62d4/4995/a1c9a90d9e7e3111ca7a44ddec987fb3?Expires=1702252800&Signature=nKIGml-u1jFBCIZS~iJFK8vc7B~ZGSo13HnoDWMVQ2cTO0E60ADR~oCwbzntYNNGyQexkK14wowLR01ASPgzzMD~~DW4zPOeLnIkuixuMK-Jo0l0lmnrCQCd9W7r~50WFs94654QcfVNnz-cdaKuj~CrvwO64MshGHnkadPhaB0IXGbOHnX5tnH-dNZK6J4cKU9-yfQZFYS15dnkE9fQDkqi9U3W3vpfnyhQEDEgyfY4M1RkrftMADIuhbsOhlpJpNn4A3HUvvCbjLGjoOnIxIyrDDoA-fC4e4v2SjMtVUyHqSs4Bv9o7HDYlmQaqNk-~7xIjv-aZFS5AbYApHku3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            gambarSrc="https://s3-alpha-sig.figma.com/img/0206/1c65/40f694a167274b2f84af79b92e49e74b?Expires=1702252800&Signature=OdFtiiwhOZWbiuTRMegaPXf3-icPMCrDUJ0FAPJlciiZKdRhgbklHlm0ikVkfq8IQ4zOvPstg4HUH20o2VaEik~z3GSZ~sr9nPwuT~0qM3OqmrHP~Ws~6MDwKLFImJMhh~JDd6vr05ty~fv57wF0ftUuH-nkeSsUpJ0nuo7p9KuBCmjxVZv2HcZaPCVE3c4ckXKu7LiZmtjYzonGn~rLfNMayOsZQUmuy68CqT9-~nLBiYbhHeZ-7du9Zr30KdQN2XmsM~TZP3tJkYklp2Mi4lr3friFN~3nttJgnDGePj-rAxdAAZxCYZ7lpoh6gMlaSDDtaksdWjL37fP4rh5FcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            judul="Gurihnya bisnis ternak musiman"
            paragraf1="Menjadikan hewan ternak sebagai pilihan menjalankan usaha tentu akan memberikan peluang untung yang besar. Di Indonesia, terdapat beberapa jenis hewan yang umumnya dikenal masyarakat untuk dijadikan ternak, kambing, ataupun sapi. Selain itu, dengan usaha beternak, ada beberapa manfaat selain mendapatkan keuntungan. Dalam hal ini adalah beternak hewan kurban, yang salah satunya adalah membantu masyarakat dalam memenuhi perintah ajaran agamanya, seperti saat memperingati hari raya Idul Adha."
            paragraf2="Dalam memeringati hari raya Idul Adha, masyarakat biasanya melakukan prosesi penyembelihan hewan kurban. Masyarakat Indonesia umumnya menggunakan sapi, domba, kerbau dan kambing sebagai hewan yang dikurbankan. Hal tersebut menjadikan permintaan hewan dari para peternak melonjak mendekati hari besar ini.Mengutip dari Republika.co.id, pada Idul Adha 2018, pemerintah melalui Kementerian Pertanian memprediksikan kebutuhan hewan kurban mencapai 1.5 juta ekor. Jumlah tersebut terdiri dari kambing 793 ribu ekor, domba 238 ribu ekor, sapi, 462 ekor, dan kerbau 10 ribu ekor. Melihat angka yang sangat besar terhadap kebutuhan hewan kurban, dan didominasi oleh jenis kambing, dapat diproyeksikan bahwa dalam prosesi keagamaan kaum muslim, khususnya saat Idul Adha, adalah peluang yang sangat baik bagi peternak kambing untuk menjual hewan ini."
            paragraf3="Dalam konteks bisnis, ternak kambing dan sapi tentu memiliki peluang yang cukup besar. Apalagi ketika dikaitkan dengan momentum Idul Adha tersebut. Sudah pasti hal ini akan menjadi lahan bisnis yang basah dan akan menghasilkan keuntungan yang besar."
            paragraf4="Peluang untuk menjadi peternak tidak dapat hadir secara cuma-cuma. Kejelian dalam meraih peluang itulah yang harus diperhatikan. Maka, cara yang paling mudah menemukan peluang itu dan untuk memenuhi kebutuhan masyarakat terhadap hewan kurban adalah waktu untuk memulai ternak kambing. Proses ternak harus dimulai sebelum hari besar tiba karena proses perkembangan kambing memerlukan waktu yang cukup lama.Selain mengandalkan momentum Idul Adha, ternak kambing sebenarnya juga telah memiliki segmen pasar yang luas untuk menarik keuntungan dalam bisnis. Contohnya adalah sebagai penyalur dan penjual olahan daging kambing, seperti sate, sop, tongseng, kari, dan lain sebagainya. Target pasar ini mudah untuk ditembus karena bisnis warung makan olahan daging kambing menjamur di setiap daerah."
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Deskripsi;
