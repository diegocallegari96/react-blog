import {Link, useParams} from "react-router-dom";
import "./OverviewDetail.css"
import posts from "../../constants/data.json"


function OverviewDetail() {
    const { id } = useParams();
    const blogPost = posts.find(post => post.id === parseInt(id));
    console.log(id);
    console.log(useParams());


    if (!blogPost) {
        return <div className="blogpostNotFound" >Blogpost niet gevonden
               <Link to="/blogposts">Terug naar de overzichtspagina</Link>
        </div>;


    }

    return (
        <div className="blogpost">
            <h1>{blogPost.title} ({blogPost.readTime} minuten)</h1>
            <p>{blogPost.subtitle}</p>
            <p>Geschreven door {blogPost.author} op {new Date(blogPost.created).toLocaleDateString()}</p>
            <p>{blogPost.content}</p>
            <p>{blogPost.comments} reacties - {blogPost.shares} keer gedeeld</p>

            <Link to="/blogposts">Terug naar de overzichtspagina</Link>
        </div>
    );
}

export default OverviewDetail;