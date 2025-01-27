import React, {createContext} from "react";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

const AppThemeContex = createContext();

function AppThemeProvider({children}) {

    const {itemValue: isDarkMode, setItemValue: setIsDarkMode} = useLocalStorage({key: 'darkMode', defaultValue: false})


    return (
        <AppThemeContex.Provider value={{
            isDarkMode,
            setIsDarkMode
        }}>
            {children}
        </AppThemeContex.Provider>
    );
}

export {AppThemeContex, AppThemeProvider};