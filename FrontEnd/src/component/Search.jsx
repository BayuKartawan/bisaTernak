import { Link } from "react-router-dom"
import PropTypes from "prop-types";

const Search = ({ Display, Margin }) => {
    return (
        <div className="w-layout-blockcontainer componencari w-container" style={Margin}>
            <form
                action="/search"
                className="search w-form">
                <input
                    className="search-input w-input"
                    type="search"
                    autoFocus="true"
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
                className="buttontambah w-button">+ Tambah kelas</Link>
        </div>
    )
}

Search.propTypes = {
    Size: PropTypes.object.isRequired,
    Display: PropTypes.object.isRequired,
    Margin: PropTypes.object.isRequired
};

export default Search
