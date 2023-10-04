import "./Home.css"
import {Link} from "react-router-dom";
import React from "react";

function Home() {
    return(
        <div className="homePage">
        <h1>Welkom op Bl0gventure</h1>
        <h2>Jouw avontuur start hier!</h2>
        <p>Klik <Link to={`/blogposts`}> hier </Link> om te beginnen</p>
        </div>
    )
}

export default Home;