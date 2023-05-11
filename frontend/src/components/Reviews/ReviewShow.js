import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { clearReviews, getSpotReviewsThunk } from "../../store/reviews";
import ReviewIndexItem from '../Reviews/ReviewIndexItem'
import OpenModalButton from '../OpenModalButton'
const ReviewShow = ({spotId}) => {
    const dispatch = useDispatch()
    // const {spotId} = useParams()

    const reviews = useSelector(state=>state.reviews.allReviews)
    const reviewsList = Object.values(reviews)
    const user = useSelector(state=> state.session.user)
    console.log("reviewsLIST===>", reviewsList)
console.log("           USER            " ,user)
reviewsList.forEach(review=>console.log("reviewsuserid", review.userId))
    useEffect(()=>{
        dispatch(getSpotReviewsThunk(spotId))

        return ()=> {
            dispatch(clearReviews())
        }
    }, [dispatch, spotId])
//review.userId!==user.id &&
    return(
        <>

        {reviewsList && reviewsList.map(review=>(

            <div key={review.id}>

            <h3>{review.review}</h3>
            <h3>{review.stars}</h3>
{/* <ReviewIndexItem review={review}/> */}
{review.userId ===user.id &&
<OpenModalButton
    buttonText="Delete Review"
    modalComponent={
            <ReviewIndexItem review={review}/>

        }
    />
    }
            </div>
        ))}
        </>
    )
}

export default ReviewShow;
