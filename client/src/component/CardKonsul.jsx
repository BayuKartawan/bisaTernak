import Icon1 from "../assets/Konsul/icon1.svg"
import Icon2 from "../assets/Konsul/icon2.svg"
import Icon3 from "../assets/Konsul/icon3.svg"

const cardKonsul = (props) => {

    const konsulStyle = props.konsulStyle || {};

    return (
        <div className="konsul_card w-row" style={konsulStyle}>

            {/* KOLOM TEKS */}
            <div className="konsul_card1 w-col w-col-7">
                <h1 className="konul_card_h2">{props.nama}</h1>
                <p className="konsul_card_p">{props.deskripsi}</p>
                <div className="konsul_card_list">
                    <img
                        src={Icon1}
                        loading="lazy"
                        alt=""
                        className="konsul_card_icon"
                    />
                    <div className="konsul_card_li_isi">
                        <h1 className="konsul_card_h1">Keahlian</h1>
                        <p className="konsul_card_p">{props.keahlian}</p>
                    </div>
                </div>
                <div className="konsul_card_list">
                    <img
                        src={Icon2}
                        loading="lazy"
                        alt=""
                        className="konsul_card_icon"
                    />
                    <div className="konsul_card_li_isi">
                        <h1 className="konsul_card_h1">Pendidikan</h1>
                        <p className="konsul_card_p">{props.pendidikan}</p>
                    </div>
                </div>
                <div className="konsul_card_list">
                    <img
                        src={Icon3}
                        loading="lazy"
                        alt=""
                        className="konsul_card_icon"
                    />
                    <div className="konsul_card_li_isi">
                        <h1 className="konsul_card_h1">Layanan Konsultasi</h1>
                        <p className="konsul_card_p">{props.layanan}</p>
                    </div>
                </div>
            </div>

            {/* KOLOM GAMBAR */}
            <div className="konsul_card2 w-col w-col-5">
                <div className="konsul_bg">
                    <img
                        src={props.foto}
                        loading="lazy"
                        alt=""
                        className="konsul_nara"
                    />
                </div>
                <a href="#" className="button_card_konsul w-button">
                    Kirim pesan
                </a>
            </div>
        </div>
    );
};

export default cardKonsul;
