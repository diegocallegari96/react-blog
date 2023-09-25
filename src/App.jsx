import './App.css'
import logo from './assets/logo-white.png'
import NavBar from "./constants/NavBar/NavBar.jsx";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import NewPosts from "./pages/NewPosts/NewPosts.jsx"
import Overview from "./pages/Overview/Overview.jsx"
import OverviewDetail from "./pages/OverviewDetail/OverviewDetail.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
    return (
        <>
            <div className="page-container">
            <img src={logo} alt="Company logo"/>
                <NavBar/>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/new" element={<NewPosts/>}/>
                    <Route path="/blogposts" element={<Overview/>}/>
                    <Route path="/blogposts:id" element={<OverviewDetail/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>


        </>
    )
}

export default App
