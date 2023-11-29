const cardDeksripsi = (props) => {
  const columnStyle = props.columnStyle || {};
  return (
    <div>
      <div className="htentang_colum w-row" style={columnStyle}>
        <div className="htentang_c2 w-col w-col-8">
          <h1 className="heading_deskripsi">{props.judul}</h1>
          <img
            src={props.gambarDeskripsiSrc}
            loading="lazy"
            width="439"
            alt=""
            className="deskripsi_gambar"
          />
          <p className="deskripsi_paragraf">{props.paragraf1}</p>
          <p className="deskripsi_paragraf">{props.paragraf2}</p>
          <p className="deskripsi_paragraf">{props.paragraf3}</p>
          <p className="deskripsi_paragraf">{props.paragraf4}</p>
        </div>
        <div className="htentang_c1 w-col w-col-4">
          <img
            src={props.gambarSrc}
            loading="lazy"
            width="439"
            alt=""
            className="deskripsi_gambar"
          />
        </div>
      </div>
    </div>
  );
};

export default cardDeksripsi;
