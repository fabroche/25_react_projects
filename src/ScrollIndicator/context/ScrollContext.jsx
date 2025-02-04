import {createContext, useEffect, useState} from "react";

const ScrollContext = createContext(null);

function ScrollContextProvider({children}) {

    const [scrollPercentage, setScrollPercentage] = useState(0)


    function handleScrollPercentage() {

        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
        const height = scrollHeight - clientHeight;
        const scrollPorcentage = (scrollTop / height) * 100;

        setScrollPercentage(scrollPorcentage);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)

        return () => window.removeEventListener('scroll', handleScrollPercentage)
    }, []);

    return (
        <ScrollContext.Provider value={{
            scrollPercentage,
            setScrollPercentage,
        }}>
            {children}
        </ScrollContext.Provider>
    )
}

export {ScrollContext, ScrollContextProvider};