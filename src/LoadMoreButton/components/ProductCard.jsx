import React from 'react';
import './ProductCard.css'
import {FaStar} from "react-icons/fa";

function ProductCard({product}) {
    return (
        <div className="ProductCard-container">
            <div className="ProductCard__image-container">
                <img className="ProductCard__image" src={product.thumbnail} alt={product.title}/>
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