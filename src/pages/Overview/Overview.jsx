import posts from "../../constants/data.json"
import "./Overview.css"
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";





function Overview() {
    const renderBlogPosts = () => {
        return (
            <ul className="blog-post-list">
                {posts.map((post) => (
                    <li key={post.id} className="blog-post-item">
                        <Link to={`/blogposts/${post.id}`}> {/* Fix de link hier */}
                            {post.title} ({post.author})
                        </Link> {/* Sluit de link hier af */}
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