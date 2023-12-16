import { Link } from "react-router-dom";
import "../media/Kelas.css"

const CardKelas = (konten) => {
    return (
        <Link to={`${konten.link}`} className="link-kelas" style={konten.Link} >
            <div className="klelass_card">
                <div className="kelass_blok_gambar">
                    <img
                        src={konten.img}
                        loading="lazy"
                        width="375"
                        sizes="(max-width: 479px) 76vw, 300px"
                        alt=""
                        srcSet={`${konten.img} 500w, ${konten.img} 587w`}
                        className="kelass_img"
                    />
                </div>
                <h6 className="kelass_h1_card">{konten.judul}</h6>
                <h6 className="kelass_h2_card">Oleh : {konten.oleh}</h6>
            </div>
        </Link >
    );
}

export default CardKelas;
