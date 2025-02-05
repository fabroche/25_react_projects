import './App.css'
import {Route, Routes} from "react-router-dom";
import useUrls from "./urls.jsx";
import {Acordion} from "./pages/Acordion/Acordion.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
    const {routes, ActiveLinkStyles} = useUrls();
    return (
        <>
            <div className={`App`}>
                <NavBar routes={routes} ActiveLinkStyles={ActiveLinkStyles}/>
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
