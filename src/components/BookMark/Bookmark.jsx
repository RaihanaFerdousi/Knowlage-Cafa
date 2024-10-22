import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="bg-slate-100 p-4 m-4 rounded-xl">
            <h3>{title}</h3>
        </div>
    );
};

// Correcting "PropTypes" to "propTypes"
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired, // Ensure bookmark is required or adjust based on your needs
};

export default Bookmark;
