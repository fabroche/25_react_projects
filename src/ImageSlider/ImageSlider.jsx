import './ImageSlider.css'
import {Suspense, lazy} from "react";
import useImages from "./hooks/useImages.js";
import SliderImgLoading from "./components/SliderImgLoading/SliderImgLoading.jsx";
import SliderImg from "./components/SliderImg/SliderImg.jsx";


function ImageSlider() {
    const {images, error, loading} = useImages();

    if (loading) return <SliderImgLoading/>;

    if (error) return <p>{error}</p>

    return (
        <>
            <h1>Image Slider</h1>
                    {
                        images.map((image) => (
                            <SliderImg key={image.id} id={image.id} url={image.download_url}/>
                        ))
                    }
        </>
    );
}

export default ImageSlider;