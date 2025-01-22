import './LoadMoreButton.css'
import useFetchData from "./hooks/useFetchData.jsx";
import {useEffect} from "react";

function LoadMoreButton() {
    const { data, loading, error } = useFetchData();

    useEffect(() => {
        console.log(data)
    }, [data]);

    return (
        <>
            <h1>LoadMoreButton</h1>
            <div className="products-container">

            </div>
            <button>Load More Products</button>
        </>
    );
}

export default LoadMoreButton;