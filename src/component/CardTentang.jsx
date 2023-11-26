const cardTentang = (props) => {
  const columnStyle = props.columnStyle || {};
  return (
    <div>
      <div className="htentang_colum w-row" style={columnStyle}>
        <div className="htentang_c1 w-col w-col-5">
          <img
            src={props.gambarSrc}
            loading="lazy"
            width="439"
            alt=""
            className="tentang_gambar"
          />
        </div>
        <div className="htentang_c2 w-col w-col-7">
          <h1 className="heading">{props.judul}</h1>
          <p className="tentang_paragraf">{props.paragraf1}</p>
          <p className="tentang_paragraf">{props.paragraf2}</p>
        </div>
      </div>
    </div>
  );
};

export default cardTentang;
