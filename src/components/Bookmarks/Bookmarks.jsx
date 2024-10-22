import PropTypes from "prop-types";
import Bookmark from "../BookMark/Bookmark";

// Define the component first
const Bookmarks = ({ bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-5 mt-2 pt-4">
        <div>
            <h3 className="text-4xl">Reading time: {readingTime}</h3>
        </div>
            <h2 className="text-2xl text-center">BookMarks Blogs: {bookmarks.length}</h2>
            {bookmarks.map((bookmark) => (
                <Bookmark key={bookmark.id} bookmark={bookmark} />
            ))}
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired, 
    readingTime: PropTypes.number
}

export default Bookmarks;
