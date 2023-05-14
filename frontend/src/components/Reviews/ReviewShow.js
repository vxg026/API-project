import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { clearReviews, getSpotReviewsThunk } from "../../store/reviews";
import ReviewIndexItem from '../Reviews/ReviewIndexItem'
import OpenModalButton from '../OpenModalButton'
import './ReviewShow.css'

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

reviewsList.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))

if (!spot || spotsArr.length === 0) return null;
// if(!user) return null;
    // console.log("spooooot", spot)
    const reviewExists = reviewsList.find(review => review.userId == user?.id)
//   const renderButton = (user?.id !== spot.ownerId && user !==null)

  const renderButton = user && user.id !== spot.ownerId;

    // console.log("REVIEWS EXISTS         ", reviewExists)
    // console.log("reviewsLIST===>", reviewsList)
    // console.log("           USER            ", user?.id)
    // reviewsList.forEach(review => console.log("reviewsuserid", review.userId))


    //review.userId!==user.id &&



    // const renderButton =
    //     user.id !== spot.ownerId;


    return (
        <>

            {console.log("reviewslist----->>>>", reviewsList)}
            {/* {renderButton && !reviewsList && <h2>Be the first to post a review!</h2>} */}
            <div className="reviewshow-main-container">
            {reviewsList && reviewsList.map(review => (

                <div className="review-container" key={review.id}id>

                    <div className="review">
                        <div className="review-show-user-name">
                    <h3>{review.User?.firstName}</h3>
                    </div>
                    <div className="review-show-date">
                    <h3>{new Date(review.createdAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</h3>

                    </div>
                    <div  className="review-show-review">
                    <h3>{review.review} review</h3>
                    </div>
                    {/* <h3>{review.stars} stars</h3> */}

                    </div>
                    {/* <ReviewIndexItem review={review}/> */}
                    {review.userId === user?.id &&
                        <OpenModalButton
                        className="reviewshow-delete-button"
                            buttonText="Delete Review"
                            modalComponent={
                                <ReviewIndexItem review={review} spotId={spotId}/>

                            }
                        />
                    }

                </div>
            ))}


  {renderButton && !reviewExists &&

               (<>

                 <CreateReviewForm spotId={spotId}/>

               <h4>Be the first to post a review!</h4>
               </>)
            }

</div>
        </>
    )
}

export default ReviewShow;
