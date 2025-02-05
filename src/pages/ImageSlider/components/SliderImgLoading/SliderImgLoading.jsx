import React from 'react';

function SliderImgLoading({loadingPreviewQuantity = 1}) {
    return (
        <>
            <h1 className="loading-title">Image Slider</h1>
            {
                [...Array(loadingPreviewQuantity)].map((_, i) => (
                    <div
                        className="slider-img--loading"
                        key={i}
                    ></div>
                ))
            }
        </>
    );
}

export default SliderImgLoading;