import {Link, useParams} from "react-router-dom";
import "./OverviewDetail.css"
// import posts from "../../constants/data.json"
import React, {useEffect, useState} from "react";
import axios from "axios";



function OverviewDetail() {
    const { id } = useParams();
    // const blogPost = posts.find(post => post.id === parseInt(id));
    const [specificPost, setSpecificPost] = useState([]);
    const [showPost, setShowPost] = useState(false);
    const [error, setError] = useState(null);



const fetchSpecificBlogPost = () => {
    axios
        .get(`http://localhost:3000/posts/${id}`)
        .then((response) => {
            const data = response.data;
            // const blogPost = posts.find(post => post.id === parseInt(id));
            setSpecificPost(data);
            setShowPost(true);
            setError(null);
        })
        .catch(() => {
            setError("Fout bij het ophalen van de post.")
            setShowPost(false);
        });
};



const renderSpecificBlogPost = () => {
    if (error) {
        return <div className="blogpostNotFound" >{error}
               <Link to="/blogposts">Terug naar de overzichtspagina</Link>
        </div>;
    }
    if (showPost) {
        return (
            <div className="blogpost">
                <h1>{specificPost.title} ({specificPost.readTime} minuten)</h1>
                <p>{specificPost.subtitle}</p>
                <p>Geschreven door {specificPost.author} op {new Date(specificPost.created).toLocaleDateString()}</p>
                <p>{specificPost.content}</p>
                <p>{specificPost.comments} reacties - {specificPost.shares} keer gedeeld</p>

                <Link to="/blogposts">Terug naar de overzichtspagina</Link>
            </div>
        );
    }
    return null;
}
    return (
        <div>
            <button type="button" onClick={fetchSpecificBlogPost}>Haal blogpost op</button>
            {renderSpecificBlogPost()}
        </div>
    )
}

export default OverviewDetail;