const Footer = () => {
    return (
        <section className="componen_footer">
            <div className="w-layout-blockcontainer container_footer w-container">
                <div className="colum_footer w-row">

                    {/* KOLOM LOGO */}
                    <div className="column_footer1 w-col w-col-6">
                        <a href="#" className="footer_blok_logo w-inline-block">
                            <img
                                src="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/6558bf9a378415d1dbd3e7eb_logo%20baru.svg"
                                loading="lazy"
                                width="164"
                                alt=""
                                className="logo_footer"
                            />
                        </a>
                        <p className="teks-_copyrigt">
                            © 2023 All Rights Reserved Bisaternak
                        </p>
                    </div>

                    {/* KOLOM SOSMED */}
                    <div className="colum_footer2 w-col w-col-6">
                        <div className="blok_hubungi">
                            <h6 className="heading_footer">Ikuti Kami :</h6>
                            <a href="#" className="w-inline-block">
                                <img
                                    src="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655ea7e32299eef8548e99d0_social.svg"
                                    loading="lazy"
                                    width="41"
                                    alt=""
                                    className="sosmed"
                                />
                            </a>
                            <a href="#" className="w-inline-block">
                                <img
                                    src="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655ea7e31c75248c5fb53d3e_fb.svg"
                                    loading="lazy"
                                    width="41"
                                    alt=""
                                    className="sosmed"
                                />
                            </a>
                            <a href="#" className="w-inline-block">
                                <img
                                    src="https://assets-global.website-files.com/655623fb68d5248a0a2ff1cc/655ea7e3739afdd09407745e_tweet.svg"
                                    loading="lazy"
                                    width="41"
                                    alt=""
                                    className="sosmed"
                                />
                            </a>
                        </div>
                        <div className="blok_hubungi">
                            <h6 className="heading_footer">Hubungi Kami :</h6>
                            <a href="#" className="link">
                                083 112 016 292
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
