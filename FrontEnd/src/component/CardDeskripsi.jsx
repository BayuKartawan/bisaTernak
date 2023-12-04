import Safe from 'react-safe'
import Search from './Search';

const CardDeksripsi = (Des) => {

    const customDisplayStyle = {
        display: "none"
    };
    const customMarginStyle = {
        marginBottom: "30px"
    };

    return (
        <div>
            <h3 className="desh">{Des.Judul}</h3>
            <div className="w-row">

                {/* colom 1 */}
                <div className="column w-col w-col-8" style={{ backgroundColor: "white" }}>
                    <iframe
                        width="100%"
                        height="470"
                        className="youtube"
                        src={`https://www.youtube.com/embed/${Des.Vidio}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded YouTube Video"
                    />
                    <p className="deslink">Sourch Vidio : https://youtu.be/f1iW734wGns?si=wS7oxJ1h3E7qy3YH{Des.Vidio}</p>
                    <p className="desp">{Des.Deskripsi}</p>
                </div>

                {/* colom 2 */}
                <div className="column-2 w-col w-col-4" style={{ backgroundColor: "white" }}>
                    <div style={{ borderRadius: "7px", border: "2px solid #8ADAB2", padding: "10px", backgroundColor: "#F8FFD2", marginBottom: "20px", marginTop: "10px" }}>
                        <p className="desp" style={{ width: "bold" }} >
                            Pemateri : kjaksjas <br />
                            publish : 10 juli 2008 <br />
                            tentang  : ruminansia</p>
                    </div>
                    <p style={{ fontWeight: "bold", fontSize: "18px" }}>Cari materi lain?</p>
                    <Search
                        Margin={customMarginStyle}
                        Display={customDisplayStyle}
                    />

                    {/* FORM KOMENTAR */}
                    <div id="disqus_thread" style={{ borderRadius: "7px", border: "1px solid #8ADAB2", padding: "10px" }} />
                    <Safe.script>
                        {
                            (function () { // DON'T EDIT BELOW THIS LINE
                                var d = document, s = d.createElement('script');
                                s.src = 'https://bisaternak.disqus.com/embed.js';
                                s.setAttribute('data-timestamp', +new Date());
                                (d.head || d.body).appendChild(s);
                            })()
                        }
                    </Safe.script>
                </div>
            </div>
        </div>

    );
};

export default CardDeksripsi;
