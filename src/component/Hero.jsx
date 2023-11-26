const hero = () => {
  return (
    <div>
      <section className="component_header">
        <div className="w-layout-blockcontainer header_container w-container">
          <div className="header_container_inti">
            <div className="header_text">Pelajari rahasia beternak </div>
            <div className="header_text_ruminansia">hewan ruminansia</div>
            <div className="header_text">
              dan dapatkan konsultasi ahli di sini!
            </div>
            <div className="header_container_button">
              <a href="#" className="button w-button">
                Ikuti kelas ternak hewan ruminansia
              </a>
              <a href="#" className="button w-button">
                Konsultasi permasalahan ternak anda
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default hero;
