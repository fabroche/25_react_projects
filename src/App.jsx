import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import {Acordion} from "./Acordion/Acordion.jsx";
import Home from "./Home/Home.jsx";
import RandomHex from "./RandomHex/RandomHex.jsx";

function App() {

    return (
        <>
            <div className="App">
                <nav>
                    <ul className="navbar">
                        <li className="navbar-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/acordion">Acordion</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/randomhex">RandomHex</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/acordion" element={<Acordion/>}></Route>
                    <Route path="/randomhex" element={<RandomHex/>}></Route>
                    <Route path="*" element={<Home/>}></Route>
                </Routes>
            </div>
        </>
    )
}

export default App
