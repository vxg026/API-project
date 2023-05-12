import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { clearReviews, getSpotReviewsThunk } from "../../store/reviews";
import ReviewIndexItem from '../Reviews/ReviewIndexItem'
import OpenModalButton from '../OpenModalButton'


import CreateReviewForm from "./CreateReview";
const ReviewShow = ({ spotId }) => {
    const dispatch = useDispatch()
    // const {spotId} = useParams()


    const reviews = useSelector(state => state.reviews.allReviews)
    const reviewsList = Object.values(reviews)
    const user = useSelector(state => state.session.user)

    const spotsObj = useSelector(state => state.spots.allSpots)
    const spotsArr = Object.values(spotsObj)


    const spot = spotsArr.find((spot) => {
        // console.log(spot.id)
        return spotId == spot.id
    })

  useEffect(() => {
        dispatch(getSpotReviewsThunk(spotId))

        return () => {
            dispatch(clearReviews())
        }
    }, [dispatch, spotId])

if (!spot || spotsArr.length === 0) return;
    // console.log("spooooot", spot)
    const reviewExists = reviewsList.find(review => review.userId == user.id)
  const renderButton = user.id !== spot.ownerId
    console.log("REVIEWS EXISTS         ", reviewExists)
    console.log("reviewsLIST===>", reviewsList)
    console.log("           USER            ", user.id)
    reviewsList.forEach(review => console.log("reviewsuserid", review.userId))


    //review.userId!==user.id &&



    // const renderButton =
    //     user.id !== spot.ownerId;


    return (
        <>
            {
               renderButton && !reviewExists &&
               ( <CreateReviewForm spotId={spotId} />)
            }

            {reviewsList && reviewsList.map(review => (

                <div key={review.id}>

                    <h3>{review.review}</h3>

                    <h3>{review.stars}</h3>


                    {/* <ReviewIndexItem review={review}/> */}
                    {review.userId === user.id &&
                        <OpenModalButton
                            buttonText="Delete Review"
                            modalComponent={
                                <ReviewIndexItem review={review} />

                            }
                        />
                    }
                </div>
            ))}
        </>
    )
}

export default ReviewShow;
