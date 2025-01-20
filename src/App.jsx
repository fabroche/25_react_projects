import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import {Acordion} from "./Acordion/Acordion.jsx";
import Home from "./Home/Home.jsx";
import RandomColor from "./RandomHex/RandomColor.jsx";

function App() {

    return (
        <>
            <div className="App">
                <nav>
                    <ul className="navbar">
                        <li className="navbar-item">
                            <Link to="/25_react_projects">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/25_react_projects/acordion">Acordion</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/25_react_projects/random-color">RandomColor</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/25_react_projects" element={<Home/>}></Route>
                    <Route path="/25_react_projects/acordion" element={<Acordion/>}></Route>
                    <Route path="/25_react_projects/random-color" element={<RandomColor/>}></Route>
                    <Route path="*" element={<Home/>}></Route>
                </Routes>
            </div>
        </>
    )
}

export default App
