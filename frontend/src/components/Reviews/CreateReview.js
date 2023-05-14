import ReviewForm from "./CreateReviewFormModal";
import OpenModalButton from '../OpenModalButton'
import { useSelector } from "react-redux";
import { useState } from "react";


const CreateReviewForm = ({spotId})=>{
    const newReview = {review:"", starRating:""};
    // const [reviewSubmitted, setReviewSubmitted] = useState(false)

const user = useSelector(state=>state.session.user)
const spotsObj = useSelector(state=>state.spots.allSpots)
const spotsArr = Object.values(spotsObj)
// console.log("userincreatereviedw            =>", spotsArr)

// console.log("spoooo id      ", spotId)
const spot = spotsArr.find((spot)=>{
    console.log(spot.id)
    return spotId==spot.id})


// console.log("spooooot", spot)
if(!spot || spotsArr.length===0) return;

 const renderButton =
    user?.id !== spot.ownerId;

// const renderButton =(user.id !== spot.ownerId || (reviewSubmitted===false && user.id == spot.ownerId))

// const handleReviewButton = ()=>{
//     setReviewSubmitted(true)
//     // renderButton=false

// }
// const hideButton = ()=>{
//     renderButton=false
// }
// spotsArr.forEach(spot=>spot.ownerId)
    return(
        <>
        {/* <ReviewForm disabled={false} spotId={spotId} user={user} review={newReview} ormType="Create Review"/> */}

<OpenModalButton
    buttonText="Post your review!"
    modalComponent={

        <ReviewForm
            // disabled={false}
            spotId={spotId}
            reviews={newReview}
            formType="Create Review"
            // onClick={hideButton}
            // onClick={handleReviewButton}
        />
    }/>


        </>
    )
}
export default CreateReviewForm;
