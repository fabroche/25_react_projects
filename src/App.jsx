import './App.css'
import {Link, NavLink, Route, Routes} from "react-router-dom";
import {Acordion} from "./Acordion/Acordion.jsx";
import Home from "./Home/Home.jsx";
import RandomColor from "./RandomHex/RandomColor.jsx";
import StarRating from "./StarRating/StarRating.jsx";
import ImageSlider from "./ImageSlider/ImageSlider.jsx";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton.jsx";
import {useState} from "react";

const isActiveLinkStyles = {
    active: "navbar-item navbar-item--active",
    inactive: "navbar-item",
}

function App() {

    return (
        <>
            <div className="App">
                <nav>
                    <ul className="navbar">
                        <li className="navbar-item-container">
                            <NavLink
                                className={
                                    ({isActive}) => isActive ? isActiveLinkStyles.active : isActiveLinkStyles.inactive
                                }
                                to="/">Home</NavLink>
                        </li>
                        <li className="navbar-item-container">
                            <NavLink
                                to="/acordion"
                                className={
                                    ({isActive}) => isActive ? isActiveLinkStyles.active : isActiveLinkStyles.inactive
                                }
                            >Acordion</NavLink>
                        </li>
                        <li className="navbar-item-container">
                            <NavLink
                                to="/random-color"
                                className={
                                    ({isActive}) => isActive ? isActiveLinkStyles.active : isActiveLinkStyles.inactive
                                }
                            >RandomColor</NavLink>
                        </li>
                        <li className="navbar-item-container">
                            <NavLink
                                to="/star-rating"
                                className={
                                    ({isActive}) => isActive ? isActiveLinkStyles.active : isActiveLinkStyles.inactive
                                }
                            >StarRating</NavLink>
                        </li>
                        <li className="navbar-item-container">
                            <NavLink
                                to="/image-slider"
                                className={
                                    ({isActive}) => isActive ? isActiveLinkStyles.active : isActiveLinkStyles.inactive
                                }
                            >ImageSlider</NavLink>
                        </li>
                        <li className="navbar-item-container">
                            <NavLink
                                to="/loadmore-btn"
                                className={
                                    ({isActive}) => isActive ? isActiveLinkStyles.active : isActiveLinkStyles.inactive
                                }
                            >LoadMoreButton</NavLink>
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
