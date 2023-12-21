import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Safe from 'react-safe'
import Search from './Search';
import Swal from 'sweetalert2';
import Hapus from "../assets/Symbol/Remove.png"
import Ubah from "../assets/Symbol/Updates.png"
import Kembali from "../assets/Symbol/GoBack.png"

const CardDeksripsi = (Des) => {

    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);

    const customDisplayStyle = {
        display: "none"
    };
    const customMarginStyle = {
        marginBottom: "30px"
    };

    const handleDelete = () => {
        Swal.fire({
            title: 'Konfirmasi',
            text: 'Apakah Anda yakin ingin menghapus materi ini?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Hapus!',
            cancelButtonText: 'Batal',
        }).then((result) => {
            if (result.isConfirmed) {
                // Tambahkan logika penghapusan di sini
                // Setelah penghapusan berhasil, Anda dapat menavigasi ke halaman lain atau melakukan tindakan lain yang diperlukan
                Swal.fire(
                    'Materi dihapus!',
                    'Materi telah berhasil dihapus.',
                    'success'
                ).then(() => {
                    navigate('/kelas');
                });
            }
        });
    };

    return (
        <div>

            <div className="w-row" style={{ backgroundColor: "white" }}>

                <Link to="/kelas" style={{
                    textDecoration: "none",
                    fontFamily: "lato",
                    fontSize: "14px",
                    color: "white",
                    border: "2px solid #C1F2B0",
                    padding: "5px 10px 5px 10px",
                    borderRadius: "20px",
                    backgroundColor: "#FFA41B",
                    marginLeft: "10px",
                    position: "relative",
                    top: "10px",
                }}>
                    <img
                        src={Kembali}
                        loading="lazy"
                        height="20"
                        style={{ marginBottom: "5px" }}>
                    </img> Kembali</Link>
                <h3 className="desh" style={{ paddingTop: "10px" }}>{Des.Judul}</h3>

                {/* colom 1 */}
                <div className="column w-col w-col-8" >
                    <div style={{ paddingTop: '56.17021276595745%' }} className="w-embed-youtubevideo youtube">
                        <iframe
                            src={`https://www.youtube.com/embed/${Des.Vidio}?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0`}
                            frameBorder="0"
                            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'auto' }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded YouTube Video"
                        />
                    </div>
                    <p className="desp">{Des.Deskripsi}</p>
                </div>

                {/* colom 2 */}
                <div className="column-2 w-col w-col-4" style={{ backgroundColor: "white" }}>

                    <div style={{ borderRadius: "7px", border: "2px solid #8ADAB2", padding: "10px", backgroundColor: "#F8FFD2", marginBottom: "20px", marginTop: "10px" }}>
                        <p style={{
                            textAlign: "justify",
                            fontFamily: "League Spartan, sans-serif",
                            fontSize: "18px",
                            lineHeight: "25px",
                        }} >
                            Oleh &nbsp;: Agung Budianto Ahmad <br />
                            Diunggah : 10 November 2023 <br /></p>

                        {currentUser && (
                            <>
                                <div style={{ display: "flex", textAlign: "center" }}>
                                    <Link to="/up" className="buttontambah w-button" style={{ width: "50%" }}><img
                                        src={Ubah}
                                        loading="lazy"
                                        height="20">
                                    </img> Ubah
                                    </Link>
                                    <Link to="" className="buttontambah w-button" style={{ marginLeft: "10px", width: "50%" }} onClick={handleDelete}>
                                        <img src={Hapus} loading="lazy" height="20" alt="Hapus" />
                                        Hapus
                                    </Link>

                                </div>
                            </>
                        )}

                    </div>

                    {/* Search */}
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
