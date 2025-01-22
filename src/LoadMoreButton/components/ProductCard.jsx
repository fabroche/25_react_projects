import React, {useEffect, useRef, useState} from 'react';
import './ProductCard.css'
import {FaStar} from "react-icons/fa";
import useLazyLoading from "../hooks/useLazyLoading.jsx";

function ProductCard({product}) {

    const [isImageLoading, setIsImageLoading] = useState(true);

    const imageRef = useRef(null);

    const {
        currentImageUrl
    } = useLazyLoading({imageRef: imageRef, imageUrl: product.thumbnail});


    function handleOnLoadImage() {
        setIsImageLoading(false);
    }

    return (
        <div className="ProductCard-container">
            <div className="ProductCard__image-container">
                <img
                    ref={imageRef}
                    className={`ProductCard__image ${isImageLoading ? 'ProductCard__image--loading' : ''}`}
                    src={currentImageUrl}
                    alt={product.title}
                    onLoad={handleOnLoadImage}
                />
            </div>
            <h3 className="ProductCard__title">{product.title}</h3>
            <div className="ProductCard__info-container">
                <em className="ProductCard__description">
                    {product.description}
                </em>
            </div>
            <span className="ProductCard__rating">
                    <b>{product.rating}</b>
                <FaStar
                    className="ProductCard__star-icon"
                    size={20}
                />
                </span>
        </div>
    );
}

export default ProductCard;