import './LightDarkMode.css'
import {useContext} from "react";
import {AppThemeContex} from "./context/AppThemeContex.jsx";

function LightDarkMode() {

    const {isDarkMode, setIsDarkMode, rootElementRef} = useContext(AppThemeContex)

    function handleOnChangeTheme(e) {
        setIsDarkMode(e.target.checked);

        rootElementRef.current.setAttribute("data-isDarkMode", String(e.target.checked));
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

            <div className="text-container" data-isDarkMode={isDarkMode}>
                <h3>Yo soy un texto</h3>
            </div>
        </div>
    );
}

export default LightDarkMode;