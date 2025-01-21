import './SliderImg.css'
import {useEffect, useRef, useState} from "react";

function SliderImg({id, url}) {

    const imageRef = useRef(null);

    const [isIntersecting, setIsIntersecting] = useState(false);

    const [isImageLoading, setIsImageLoading] = useState(true);

    function handleOnLoadImage() {
        setIsImageLoading(false);
        console.log('Loaded')
    }

    useEffect(() => {

        function imageObserverCallback(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.unobserve(entry.target);
                }
            })
        }

        const imageObserver = new IntersectionObserver(imageObserverCallback)

        if (imageRef.current) {
            imageObserver.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                imageObserver.unobserve(imageRef.current);
            }
        }
    }, [url])

    return (
        <img
            className={`slider-img ${isImageLoading ? 'slider-img--blur' : ''}`}
            id={id}
            src={isIntersecting ? url : ''}
            ref={imageRef}
            alt="Image Slider"
            onLoad={handleOnLoadImage}
        />
    );
}

export default SliderImg;