import posts from "../../constants/data.json"
import React, { useEffect, useState } from 'react';





function Overview() {
    const renderBlogPosts = () => {
        return (
            <ul className="blog-post-list">
                {posts.map((post) => (
                    <li key={post.id}>
                        <a href={`/blogposts:id/${post.id}`}>
                            {post.title} ({post.author})
                        </a>
                        <p>
                            {post.comments} reacties - {post.shares} keer gedeeld
                        </p>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="overview">
            <h1>Blog Overzicht</h1>
            {renderBlogPosts()}
        </div>
    );
}

export default Overview;