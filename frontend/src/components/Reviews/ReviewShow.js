import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { clearReviews, getSpotReviewsThunk } from "../../store/reviews";
import ReviewIndexItem from '../Reviews/ReviewIndexItem'

const ReviewShow = ({spotId}) => {
    const dispatch = useDispatch()
    // const {spotId} = useParams()

    const reviews = useSelector(state=>state.reviews.allReviews)
    const reviewsList = Object.values(reviews)
    // const user = useSelector(state=> state.session.user)
    console.log("reviewsLIST===>", reviews)
// console.log("           USER            " ,user)

    useEffect(()=>{
        dispatch(getSpotReviewsThunk(spotId))

        return ()=> {
            dispatch(clearReviews())
        }
    }, [dispatch, spotId])

    return(
        <>

        {reviewsList.map(review=>(

            <div key={review.id}>

            <h3>{review.review}</h3>
            <h3>{review.stars}</h3>
<ReviewIndexItem review={review}/>
            </div>
        ))}
        </>
    )
}

export default ReviewShow;
