import './LightDarkMode.css'
import {useContext} from "react";
import {AppThemeContex} from "./context/AppThemeContex.jsx";

const THEMES = {
    light: "light",
    dark: "dark",
}

function LightDarkMode() {

    const {isDarkMode, setIsDarkMode, rootElementRef} = useContext(AppThemeContex)

    function handleOnChangeTheme(e) {
        setIsDarkMode(e.target.checked);

        if (!isDarkMode) {
            rootElementRef.current.classList.remove(THEMES.light);
            rootElementRef.current.classList.add(THEMES.dark);
        } else {
            rootElementRef.current.classList.remove(THEMES.dark);
            rootElementRef.current.classList.add(THEMES.light);
        }
    }


    return (
        <div className="lightDarkMode">
            <label
                className="changeTheme"
            >
                <input
                    id="changeTheme-btn"
                    type="checkbox"
                    name="ChangeTheme"
                    onChange={handleOnChangeTheme}
                    checked={isDarkMode}
                />
            </label>

            <div className={`text-container ${isDarkMode ? 'light' : 'dark'}`}>
                <h3>Yo soy un texto</h3>
            </div>
        </div>
    );
}

export default LightDarkMode;