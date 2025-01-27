import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {HashRouter} from "react-router-dom";
import {AppThemeProvider} from "./LightDarkMode/context/AppThemeContex.jsx";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter>
            <AppThemeProvider>
                <App/>
            </AppThemeProvider>
        </HashRouter>
    </StrictMode>,
)
