import './StarRating.css'
import {FaStar} from "react-icons/fa";
import {useState} from "react";


function StarRating({starsQuantity = 5}) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0)

    function handleClick(currentRatingIndex) {
        if (currentRatingIndex === rating) {
            setRating(0)
            return
        }
        setRating(currentRatingIndex);
    }

    function handleMouseEnter(currentRatingIndex) {
        setHover(currentRatingIndex);

    }

    function handleMouseLeave() {
        setHover(rating);
    }

    return (
        <>
            <h1>Star Rating</h1>
            <div className="star-rating-container">
                {
                    [...Array(starsQuantity)].map((_, index) => {

                        const position = index + 1;

                        return <FaStar
                            key={`star-rating_${position}`}
                            className={`star-item ${position <= (hover || rating) ? "star-item--active" : ""}`}
                            onClick={() => handleClick(position)}
                            onMouseMove={() => handleMouseEnter(position)}
                            onMouseLeave={handleMouseLeave}
                            size={40}
                        />
                    })
                }
            </div>
        </>
    );
}

export default StarRating;