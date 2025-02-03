import './App.css'
import {NavLink, Route, Routes} from "react-router-dom";
import useUrls from "./urls.jsx";
import {Acordion} from "./Acordion/Acordion.jsx";

function App() {
    const {routes, ActiveLinkStyles} = useUrls();

    return (
        <>
                <div className={`App`}>
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
                        <Route path="*" element={<Acordion/>}></Route>
                    </Routes>
                </div>
        </>
    )
}

export default App
