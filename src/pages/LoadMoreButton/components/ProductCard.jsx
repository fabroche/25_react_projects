import React, {useContext, useEffect, useRef, useState} from 'react';
import './ProductCard.css'
import {FaStar} from "react-icons/fa";
import useLazyLoading from "../hooks/useLazyLoading.jsx";
import {AppThemeContex} from "../../LightDarkMode/context/AppThemeContex.jsx";

function ProductCard({product}) {

    const [isImageLoading, setIsImageLoading] = useState(true);

    const imageRef = useRef(null);

    const {
        currentImageUrl
    } = useLazyLoading({imageRef: imageRef, imageUrl: product.thumbnail});

    const {isDarkMode} = useContext(AppThemeContex)

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
                <span className="ProductCard__rating">
                    <b>{product.rating}</b>
                <FaStar
                    className="ProductCard__star-icon"
                    size={20}
                />
                </span>
            </div>
            <h3 className="ProductCard__title">{product.title}</h3>

            <div className={
                `ProductCard__info-container ${isDarkMode 
                    ? 'ProductCard__info-container--dark' 
                    : 'ProductCard__info-container--light'
                }`}
            >
                <em className="ProductCard__description">
                    {product.description}
                </em>
            </div>
        </div>
    );
}

export default ProductCard;