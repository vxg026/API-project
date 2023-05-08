import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getSpotReviewsThunk } from "../../store/reviews";

const ReviewShow = ({spotId}) => {
    const dispatch = useDispatch()
    // const {spotId} = useParams()

    const reviews = useSelector(state=>state.reviews.allReviews)
    const reviewsList = Object.values(reviews)
    console.log("reviewsLIST===>", reviews)


    useEffect(()=>{
        dispatch(getSpotReviewsThunk(spotId))
    }, [dispatch, spotId])

    return(
        <>
        {reviewsList.map(review=>(
            <div key={review.id}>
            <h3>{review.review}</h3>
            <h3>{review.stars}</h3>
            </div>
        ))}
        </>
    )
}

export default ReviewShow;
