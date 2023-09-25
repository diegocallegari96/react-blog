import './App.css'
import logo from './assets/logo-white.png'
import NavBar from "./constants/NavBar/NavBar.jsx";

function App() {
    return (
        <>
            <div className="page-container">
            <img src={logo} alt="Company logo"/>
                <NavBar/>
            </div>


        </>
    )
}

export default App
