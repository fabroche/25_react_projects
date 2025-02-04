import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {HashRouter} from "react-router-dom";
import {AppThemeProvider} from "./LightDarkMode/context/AppThemeContex.jsx";
import {ScrollContextProvider} from "./ScrollIndicator/context/ScrollContext.jsx";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter>
            <ScrollContextProvider>
                <AppThemeProvider>
                    <App/>
                </AppThemeProvider>
            </ScrollContextProvider>
        </HashRouter>
    </StrictMode>,
)
