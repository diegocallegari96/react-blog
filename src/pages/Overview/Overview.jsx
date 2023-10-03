import "./Overview.css"
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";







function Overview() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [showPosts, setShowPosts] = useState(false);

    const fetchBlogPosts = () => {
            axios
                .get("http://localhost:3000/posts")
                .then((response) => {
                    const data = response.data;
                    setBlogPosts(data);
                    setShowPosts(true);
                });
        }

        const renderBlogPosts = () => {
            if (showPosts) {
                return (
                    <ul className="blog-post-list">
                        {blogPosts.map((blogPosts) => (
                            <li key={blogPosts.id} className="blog-post-item">
                                <Link to={`/blogposts/${blogPosts.id}`}>
                                    {blogPosts.title} ({blogPosts.author})
                                </Link>
                                <p>
                                    {blogPosts.comments} reacties - {blogPosts.shares} keer gedeeld
                                </p>
                            </li>
                        ))}
                    </ul>
                );
            }
            return null;
        };

        return (
            <div className="overview">
                <h1>Blog Overzicht</h1>
                <button type="button" onClick={fetchBlogPosts}>Haal posts op</button>
                {renderBlogPosts()}
            </div>
        );
    }


export default Overview;