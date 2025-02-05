import {useEffect, useState} from 'react';

function useLazyLoading({imageRef,imageUrl}) {

    const [currentImageUrl, setCurrentImageUrl] = useState('');

    useEffect(() => {
        const imageObserver = new IntersectionObserver(imageObserverCallback)

        function imageObserverCallback(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCurrentImageUrl(imageUrl);
                    observer.unobserve(entry.target);
                }
            })

        }

        if (imageRef.current) {
            imageObserver.observe(imageRef.current)
        }

        return () => {
            if (imageRef.current) {
                imageObserver.unobserve(imageRef.current);
            }
        }

    }, [imageUrl])

    return {
        currentImageUrl,
    };
}

export default useLazyLoading;