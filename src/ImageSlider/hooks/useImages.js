import {useEffect, useState} from "react";
import fetchPicsumImages from "../api/picsumImages.js";

export default function useImages() {

    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadImages() {
            try {
                setLoading(true);
                const imagesData = await fetchPicsumImages();
                setImages(imagesData);
                setLoading(false);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        loadImages();
    }, []);


    return {
        images,
        loading,
        error,
    };
}