import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import {Acordion} from "./Acordion/Acordion.jsx";
import Home from "./Home/Home.jsx";
import RandomColor from "./RandomHex/RandomColor.jsx";
import StarRating from "./StarRating/StarRating.jsx";
import ImageSlider from "./ImageSlider/ImageSlider.jsx";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton.jsx";

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
                            <Link to="/random-color">RandomColor</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/star-rating">StarRating</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/image-slider">ImageSlider</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/loadmore-btn">LoadMoreButton</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/acordion" element={<Acordion/>}></Route>
                    <Route path="/random-color" element={<RandomColor/>}></Route>
                    <Route path="/star-rating" element={<StarRating/>}></Route>
                    <Route path="/image-slider" element={<ImageSlider/>}></Route>
                    <Route path="/loadmore-btn" element={<LoadMoreButton/>}></Route>
                    <Route path="*" element={<Home/>}></Route>
                </Routes>
            </div>
        </>
    )
}

export default App
