import { Link, useParams } from 'react-router-dom'
import {getSpot} from '../../store/spots'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OpenModalButton from '../OpenModalButton'
import CreateReviewForm from '../Reviews/CreateReview'
import ReviewShow from '../Reviews/ReviewShow'
import { useModal } from '../../context/Modal'

const SpotShow = ()=>{
    const dispatch = useDispatch()
    const {spotId} = useParams();


// console.log("spotshow id=>", spotId)

    const spot = useSelector(state=>state.spots.allSpots[spotId])
    // const stateObj = useSelector(state=>state)
    // console.log("STATEOBJECTINCURR===>", stateObj.reviews.allReviews)


console.log("spotshow state=>", spot)

    useEffect(()=>{
        dispatch(getSpot(spotId))
    }, [dispatch, spotId])

if(!spot) return null
// if(!stateObj) return null
if(!spot.SpotImages) return;
return(
    <section>
        <h2>{spot.name}</h2>
        <div>
            <h5>{spot.city}, {spot.state}, {spot.country}</h5>
            <h5>{spot.description}</h5>
        </div>
        {spot.SpotImages.map(image => (<img src={`${image.url}`}/>))}


    <ReviewShow spotId={spotId}/>
    <CreateReviewForm spotId={spotId}/>

<> </>
    </section>
)
}
export default SpotShow;




        {/* <h1>{spot.name}</h1> */}
        {/* <OpenModalButton
    buttonText="My Button Text"
    modalComponent={<CreateReview spotId={spotId}/>
}
/> */}
