import './NavBar.css'
import React, {useContext, useState} from 'react';
import {FiAlignJustify, FiXCircle} from "react-icons/fi";
import {NavLink} from "react-router-dom";
import {ScrollContext} from "../pages/ScrollIndicator/context/ScrollContext.jsx";

function NavBar({routes, ActiveLinkStyles}) {
    const {scrollPercentage} = useContext(ScrollContext);

    const [isNavBarActive, setIsNavBarActive] = useState(false)

    const scrollIndicatorComponentURL = routes.find(route => route.name === "ScrollIndicator").path;

    const isScrollIndicator = location.hash.includes(scrollIndicatorComponentURL)

    function handleToggleNavBar() {
        setIsNavBarActive(!isNavBarActive);
    }

    return (
        <>
            <FiAlignJustify
                className={`navbar__hamburger-btn ${isNavBarActive ? "navbar__hamburger-btn--active" : ""}`}
                onClick={handleToggleNavBar}
            />
            <nav
                className={`navbar__container flex-center-column ${isNavBarActive ? "navbar__container--active" : ""}`}>
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
                                    to={route.path}
                                    onClick={handleToggleNavBar}
                                >
                                    {route.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    );
}

export default NavBar;