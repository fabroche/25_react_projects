import './App.css'
import {NavLink, Route, Routes} from "react-router-dom";
import useUrls from "./urls.jsx";
import {Acordion} from "./Acordion/Acordion.jsx";
import {useContext} from "react";
import {ScrollContext} from "./ScrollIndicator/context/ScrollContext.jsx";

function App() {
    const {routes, ActiveLinkStyles} = useUrls();
    const {scrollPercentage} = useContext(ScrollContext);

    return (
        <>
                <div className={`App`}>
                    <nav className="flex-center-column">
                        <ul className={`navbar ${scrollPercentage > 1  ? 'navbar--fixed' : ''}`}>
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
