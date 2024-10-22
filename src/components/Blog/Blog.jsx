import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {
        title,
        cover,
        author,
        author_img,
        reading_time,
        posted_date,
        hashtags,
    } = blog;

    return (
        <div className="mb-20 space-y-4">
            <img
                className="w-full rounded-xl"
                src={cover}
                alt={`Cover picture of ${title}`}
            />
            <div className="flex justify-between mt-5 items-center space-y-4">
                <div className="flex gap-5">
                    <img
                        className="w-14"
                        src={author_img}
                        alt="Author's image"
                    />{" "}
                    <div>
                        <h3 className="text-2xl font-bold">{author}</h3>
                        <p className="text-stone-500">{posted_date}</p>
                    </div>
                </div>
                <div className="items-center">
                    <span>{reading_time} Min Read</span>
                    <button onClick={() => handleAddToBookmark(blog)}>
                        <CiBookmark />
                    </button>
                </div>
            </div>
            <h2 className="text-3xl font-bold mt-5 mb-3 w-[550px]">{title}</h2>
            <p>
                {hashtags.map((hash, index) => (
                    <span key={index}>
                        <a href="#">{hash}</a>{" "}
                    </span>
                ))}
            </p>
            <button
                onClick={() => handleMarkAsRead(reading_time)}
                className="text-purple-800 font-bold underline"
            >
                Mark as read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired, 
    handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
