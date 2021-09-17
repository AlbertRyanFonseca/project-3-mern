import './Post.css';
import React from "react";

function Post() {
    return (
        <div>
        <h1>Supply Post</h1> 
        <form>

        <textarea
                placeholder="New post..."
                value={postText}
                className=""
                onChange={handleChange}
            ></textarea>
        <button className="" type="submit">
          Post
        </button>

        </form>

        </div>
    );
};

export default Post;