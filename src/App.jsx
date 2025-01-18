import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import {Acordion} from "./Acordion/Acordion.jsx";
import Home from "./Home/Home.jsx";

function App() {

    return (
        <>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/acordion">Acordion</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/acordion" element={<Acordion/>}></Route>
                </Routes>
            </div>
        </>
    )
}

export default App
