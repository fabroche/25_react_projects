import React, {createContext, useEffect, useRef} from "react";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

const AppThemeContex = createContext();

function AppThemeProvider({children}) {

    const {itemValue: isDarkMode, setItemValue: setIsDarkMode} = useLocalStorage({key: 'darkMode', defaultValue: false})

    const rootElementRef = useRef(null);

    useEffect(() => {
        // Asignar el elemento root a la referencia
        rootElementRef.current = document.getElementById('root');
    }, []);

    return (
        <AppThemeContex.Provider value={{
            isDarkMode,
            setIsDarkMode,
            rootElementRef,
        }}>
            {children}
        </AppThemeContex.Provider>
    );
}

export {AppThemeContex, AppThemeProvider};