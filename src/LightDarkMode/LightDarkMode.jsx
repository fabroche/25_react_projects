import './LightDarkMode.css'
import {useContext, useState} from "react";
import {AppThemeContex} from "./context/AppThemeContex.jsx";

const THEMES = {
    light: "light",
    dark: "dark",
}

function LightDarkMode() {
    const [theme, setTheme] = useState(THEMES.light);

    const {isDarkMode, setIsDarkMode} = useContext(AppThemeContex)

    function handleOnChangeTheme(e) {
        setTheme(e.target.checked ? THEMES.dark : THEMES.light);
        setIsDarkMode(e.target.checked);
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