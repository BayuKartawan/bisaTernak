import Safe from 'react-safe'
import Search from './Search';

const CardDeksripsi = () => {

    const customSizeStyle = {
        width: "100%"
    };
    const customDisplayStyle = {
        display: "none"
    };
    const customMarginStyle = {
        marginBottom: "30px"
    };

    return (
        <div>
            <h3 className="desh">&quot;Californication&quot; - Red Hot Chili Peppers (Cover by First to Eleven)</h3>
            <div className="w-row">
                <div className="column w-col w-col-8" style={{ backgroundColor: "white" }}>

                    <div>
                        <iframe width="100%" height="470"
                            className="youtube"
                            src="https://www.youtube.com/embed/f1iW734wGns?si=Dim4YKZseXAzgSdQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <p className="deslink">Sourch Vidio : https://youtu.be/f1iW734wGns?si=wS7oxJ1h3E7qy3YH</p>
                    <p className="desp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                        eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                        commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                        Nunc ut sem vitae risus tristique posuere.</p>
                </div>
                <div className="column-2 w-col w-col-4" style={{ backgroundColor: "white" }}>

                    <div style={{ borderRadius: "7px", border: "1px solid #8ADAB2", padding: "10px", backgroundColor: "#F8FFD2", marginBottom: "20px", marginTop: "10px" }}>
                        <p className="desp" style={{ width: "bold" }} >
                            Pemateri : kjaksjas <br />
                            publish : 10 juli 2008 <br />
                            tentang  : ruminansia</p>
                    </div>

                    <p style={{ fontWeight: "bold", paddingLeft: "5px", fontSize: "18px" }}>Cari materi lain?</p>
                    <Search
                        Margin={customMarginStyle}
                        Size={customSizeStyle}
                        Display={customDisplayStyle}
                    />

                    {/* FORM KOMENTAR */}
                    <div id="disqus_thread" />
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
