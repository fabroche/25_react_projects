import './App.css'
import {NavLink, Route, Routes} from "react-router-dom";
import useUrls from "./urls.jsx";
import {Acordion} from "./Acordion/Acordion.jsx";
import {useContext, useState} from "react";
import {ScrollContext} from "./ScrollIndicator/context/ScrollContext.jsx";
import {FiAlignJustify, FiXCircle, FiAlignCenter} from "react-icons/fi";

function App() {
    const {routes, ActiveLinkStyles} = useUrls();
    const {scrollPercentage} = useContext(ScrollContext);

    const [isNavBarActive, setIsNavBarActive] = useState(false)

    const scrollIndicatorComponentURL = routes.find(route => route.name === "ScrollIndicator").path;

    const isScrollIndicator = location.hash.includes(scrollIndicatorComponentURL)

    function handleToggleNavBar() {
        setIsNavBarActive(!isNavBarActive);
    }

    return (
        <>
            <div className={`App`}>
                <FiAlignJustify
                    className={`navbar__hamburger-btn ${isNavBarActive ? "navbar__hamburger-btn--active" : ""}`}
                    onClick={handleToggleNavBar}
                />
                <nav className={`navbar__container flex-center-column ${isNavBarActive ? "navbar__container--active" : ""}`}>
                            <FiXCircle
                                className="navbar__hamburgerClose-btn"
                                onClick={handleToggleNavBar}
                            />
                    <ul className={
                        `navbar ${scrollPercentage > 1 ? 'navbar--fixed' : ''} ${isScrollIndicator ? 'navbar--fixed-withScrollIndicator' : ''}`
                    }>
                        {
                            routes.map(route => (
                                <li key={route.name} className="navbar-item-container">
                                    <NavLink
                                        className={
                                            ({isActive}) => isActive ? ActiveLinkStyles.active : ActiveLinkStyles.inactive
                                        }
                                        to={route.path}>{route.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Routes>
                    {
                        routes.map(route => (
                            <Route key={route.path} path={route.path} element={route.element}></Route>
                        ))
                    }
                    <Route path="*" element={<Acordion/>}></Route>
                </Routes>
            </div>
        </>
    )
}

export default App
