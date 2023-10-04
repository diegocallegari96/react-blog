import "./Home.css"
import {Link} from "react-router-dom";
import React from "react";

function Home() {
    return(
        <div className="homePage">
        <h1>Welkom op Bl0gventure</h1>
        <h2>Jouw avontuur start hier!</h2>
        <p>Schrijf <Link to={`/blogposts`}> hier </Link></p>jouw persoonlijke blog item
        </div>
    )
}

export default Home;