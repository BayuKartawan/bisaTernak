const cardKonsul = (props) => {
  const konsulStyle = props.konsulStyle || {};
  return (
    <div>
      <div className="konsul_card w-row" style={konsulStyle}>
        <div className="konsul_card1 w-col w-col-7">
          <h1 className="konul_card_h2">{props.nama}</h1>
          <p className="konsul_card_p">{props.deskripsi}</p>
          <div className="konsul_card_list">
            <img
              src="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656215e44503332060ec31b9_icon1.svg"
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
              src="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656215e4e79197d7d711e01c_icon2.svg"
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
              src="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/656215e4752a8dbde953453c_icon3.svg"
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
    </div>
  );
};

export default cardKonsul;
