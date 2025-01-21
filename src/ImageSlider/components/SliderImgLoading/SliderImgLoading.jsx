import React from 'react';

function SliderImgLoading({loadingPreviewQuantity = 5}) {
    return (
        [...Array(loadingPreviewQuantity)].map((_, i) => (
            <img
                className="slider-img--loading"
                key={i}
                src=''
                alt="Image Slider Loading Skeleton" />
        ))
    );
}

export default SliderImgLoading;