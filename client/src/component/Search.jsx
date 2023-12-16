import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import Tambah from "../assets/Symbol/AddAlbum.png"

const Search = ({ Display, Margin }) => {
    return (
        <div className="w-layout-blockcontainer componencari w-container" style={Margin}>
            <form
                action="/search"
                className="search ">
                <input
                    className="search-input w-input"
                    type="search"
                    maxLength="256"
                    name="query"
                    placeholder="Cari kelas..."
                    id="search"
                    required="" />
                <input
                    type="submit"
                    value="Cari"
                    className="search-button w-button" />
            </form>
            <Link to="/up"
                style={Display}
                className="buttontambah w-button">
                <img
                    src={Tambah}
                    height="20px"
                    loading="lazy"
                    style={{ marginBottom: "3px" }}>
                </img> Tambah kelas</Link>
        </div>
    )
}

Search.propTypes = {
    Display: PropTypes.object.isRequired,
    Margin: PropTypes.object.isRequired
};

export default Search
