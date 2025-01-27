import './App.css'
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./Home/Home.jsx";
import useUrls from "./urls.jsx";
import {AppThemeContex} from "./LightDarkMode/context/AppThemeContex.jsx";
import {useContext} from "react";

function App() {
    const {routes, ActiveLinkStyles} = useUrls();

    const {isDarkMode} = useContext(AppThemeContex)

    return (
        <>
                <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
                    <nav>
                        <ul className="navbar">
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
                        <Route path="*" element={<Home/>}></Route>
                    </Routes>
                </div>
        </>
    )
}

export default App
