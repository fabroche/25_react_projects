import './ImageSlider.css'
import useImages from "./hooks/useImages.js";
import SliderImgLoading from "./components/SliderImgLoading/SliderImgLoading.jsx";
import SliderImg from "./components/SliderImg/SliderImg.jsx";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import {useEffect, useState} from "react";


function ImageSlider() {
    const {images, error, loading} = useImages();
    const [currentSlide, setCurrentSlide] = useState(0)
    const currentSlideImage = images[currentSlide];

    useEffect(() => {
        const autoRotateSlideInterval = setInterval(() => {
            handleNextSliderImage()
        }, 3500);


        return () => clearInterval(autoRotateSlideInterval);
    }, [currentSlideImage])


    if (loading) return <SliderImgLoading/>;

    if (error) return <p>{error}</p>

    function handlePreviousSliderImage() {

        setCurrentSlide(
            currentSlide === 0
                ? images.length - 1
                : currentSlide - 1
        )
    }

    function handleNextSliderImage() {

        setCurrentSlide(
            currentSlide === images.length - 1
                ? 0
                : currentSlide + 1
        )
    }

    function handleOnClickSliderIndicator(index) {
        setCurrentSlide(index);
    }


    return (
        <>
            <h1>Image Slider</h1>

            <div className="slider-container">

                <div className="slider__image-container">
                    {
                        images.map(image => (
                            <SliderImg
                                style={{
                                    translate: `${-100 * currentSlide}%`
                                }}
                                key={image.id}
                                id={image.id}
                                url={image.download_url}
                            />))
                    }
                </div>

                <BsArrowLeftCircleFill
                    className="slider-control slider-control-left"
                    onClick={handlePreviousSliderImage}
                />
                <div className="slider-controls-container">
                    <span className="slider-indicators-container">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={
                                `slider-indicator ${currentSlide === index
                                    ? 'slider-indicator--active'
                                    : ''}`
                            }
                            onClick={() => handleOnClickSliderIndicator(index)}
                        >
                        </button>
                    ))}
                </span>
                </div>
                <BsArrowRightCircleFill
                    className="slider-control slider-control-right"
                    onClick={handleNextSliderImage}
                />
            </div>
        </>
    );
}

export default ImageSlider;