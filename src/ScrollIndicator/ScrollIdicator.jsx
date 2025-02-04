import './ScrollIndicator.css'
import useProducts from "./hooks/useProducts.jsx";
import ProductCard from "../LoadMoreButton/components/ProductCard.jsx";
import {useContext, useEffect, useState} from "react";
import {ScrollContext} from "./context/ScrollContext.jsx";

function ScrollIdicator({scrollPercentage}) {

    const {data: products, loading, error} = useProducts();

    // const {scrollPercentage} = useContext(ScrollContext);

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
                    width: `${scrollPercentage}%`,
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