import './LoadMoreButton.css'
import useFetchData from "./hooks/useFetchData.jsx";
import {useEffect, useState} from "react";
import ProductCard from "./components/ProductCard.jsx";

const query = {
    limit: 20,
    skip: 20,
    select: {
        id: "id",
        title: "title",
        description: "description",
        price: "price",
        rating: "rating",
    }
}

function LoadMoreButton() {

    const [skipCount, setSkipCount] = useState(0)

    const url = `https://dummyjson.com/products?limit=${query.limit}&skip=${skipCount === 0 ? 0 : skipCount * 20}`

    const {data: products, setData: setProducts, loading, error} = useFetchData(url);

    const isProductsMaxLength = products.length === 100;


    function handleLoadMoreData() {
        setSkipCount(skipCount + 1)
    }

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <h1>LoadMoreButton</h1>
            <div className="products-container">
                {
                    products.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </div>
            {
                isProductsMaxLength && <p>There is not more products</p>
            }
            <button
                className="LoadMoreButton"
                onClick={handleLoadMoreData}
                disabled={isProductsMaxLength}
            >Load More Products
            </button>

        </>
    );
}

export default LoadMoreButton;