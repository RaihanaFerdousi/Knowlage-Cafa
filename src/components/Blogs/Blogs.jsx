import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {blogs.map((blog) => (
                <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                />
            ))}
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blogs;
