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

console.log("spotshow state=>", spot)

    useEffect(()=>{
        dispatch(getSpot(spotId))
    }, [dispatch, spotId])
if(!spot) return null
return(
    <section>
        <h2>{spot.name}</h2>
        <div>
            <h5>{spot.city}</h5>
            <h5>{spot.state}</h5>
            <h5>{spot.country}</h5>
        </div>

        <ReviewShow spotId={spotId}/>
        <CreateReviewForm spotId={spotId}/>
        {/* <h1>{spot.name}</h1> */}
        {/* <OpenModalButton
    buttonText="My Button Text"
    modalComponent={<CreateReview spotId={spotId}/>
}
/> */}
<> </>
    </section>
)
}
export default SpotShow;
