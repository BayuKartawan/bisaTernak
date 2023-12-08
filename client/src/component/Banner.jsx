const banner = (props) => {

    const bgStyle = props.bgStyle || {};

    return (
        <section className="component_banner" style={bgStyle}>
            <div className="w-layout-blockcontainer banner_container w-container">
                <div className="banner_bloktks">
                    <h1 className="heading-2">{props.h}</h1>
                    <p className="paragraph-2">{props.p}</p>
                </div>
                <img
                    src={props.logoPutih}
                    loading="lazy"
                    width="345"
                    alt=""
                    className="image-4"
                />
            </div>
        </section>
    );
};

export default banner;
