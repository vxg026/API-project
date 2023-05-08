import { Link, useParams } from 'react-router-dom'
import {getSpot} from '../../store/spots'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OpenModalButton from '../OpenModalButton'
import CreateReview from '../Reviews/CreateReview'
import ReviewShow from '../Reviews/ReviewShow'

const SpotShow = ()=>{
    const dispatch = useDispatch()
    const {spotId} = useParams();


// console.log("spotshow id=>", spotId)

    const spot = useSelector(state=>state.spots.allSpots[spotId])

// console.log("spotshow state=>", spot)

    useEffect(()=>{
        dispatch(getSpot(spotId))
    }, [dispatch, spotId])

return(
    <section>
        <ReviewShow spotId={spotId}/>
        <OpenModalButton
    buttonText="My Button Text"
    modalComponent={<CreateReview spotId={spotId}/>}
    
/>
    </section>
)
}
export default SpotShow;
