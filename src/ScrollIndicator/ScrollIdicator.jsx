import './ScrollIndicator.css'
import useProducts from "./hooks/useProducts.jsx";
import ProductCard from "../LoadMoreButton/components/ProductCard.jsx";
import {useEffect, useState} from "react";

function ScrollIdicator() {

    const {data: products, loading, error} = useProducts();

    const [scrollPercentage, setScrollPercentage] = useState(0)


    function handleScrollPercentage() {

        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
        const height = scrollHeight - clientHeight;
        const scrollPorcentage = (scrollTop / height) * 100;

        setScrollPercentage(scrollPorcentage);

        console.log('scrollTop=', scrollTop);
        console.log('Height=', height);
        console.log('Scroll Percentage=', scrollPorcentage);

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)

        return () => window.removeEventListener('scroll', handleScrollPercentage)
    }, []);

    if (loading) return (
        <>
            <h1>Scroll Indicator</h1>
            <div className="spinner-container">
                <div className="spinner spinner-loadModeButton"></div>
            </div>
        </>
    );

    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <h1>Scroll Indicator</h1>
            <div className="wrapper-container" style={{
                opacity: scrollPercentage > 0 ? 1 : 0,
            }}>
                <div className="scrollIndicator-container">
                <span className="scrollIndicator" style={{
                    right: `-${scrollPercentage}%`,
                }}></span>
                </div>
            </div>
            <ul className="product-list-container">
                {
                    products.map((product) => (
                        <li key={product.id}>{product.title}</li>
                    ))
                }
            </ul>
        </>
    );
}

export default ScrollIdicator;