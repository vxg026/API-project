import { Link, useParams } from 'react-router-dom'
import { getSpot } from '../../store/spots'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import OpenModalButton from '../OpenModalButton'
import CreateReviewForm from '../Reviews/CreateReview'
import ReviewShow from '../Reviews/ReviewShow'
import ReviewIndexItem from '../Reviews/ReviewIndexItem'
import OpenModalButton from '../OpenModalButton'
import './SpotShow.css'
// import { useModal } from '../../context/Modal'

const SpotShow = () => {
    const dispatch = useDispatch()
    const { spotId } = useParams();


    // console.log("spotshow id=>", spotId)

    const spot = useSelector(state => state.spots.allSpots[spotId])
    // const stateObj = useSelector(state=>state)
    // console.log("STATEOBJECTINCURR===>", stateObj.reviews.allReviews)


    console.log("spotshow state=>", spot)

    useEffect(() => {
        dispatch(getSpot(spotId))
    }, [dispatch, spotId])

    if (!spot) return null
    if (!spot.SpotImages) return null
    // if(!stateObj) return null

console.log("spoooooot in shpotshow", spot)
    console.log(spot)
    return (

        <section>
            <div>
                <Link className="newSpotLink"to="/spots/new">Create a new spot!</Link>
            </div>
            <h2>{spot.name}</h2>
            <div>
                <h5>{spot.city}, {spot.state}, {spot.country}</h5>
                {/* <h2>{spot.numReviews}reviews</h2> */}
            </div>
            <div>

                {spot.SpotImages.map(image => (<img src={`${image.url}`} />))}
            </div>
            <h3>Hosted By {spot.Owner.firstName} {spot.Owner.lastName} </h3>
              <div className="description">
            <p>{spot.description}</p>
            </div>
            <div>
                <div>

                </div>
                <h4>${spot.price} night <i className="fas fa-star"/>{spot.avgStarRating?.toFixed(1)} #{spot.numReviews} reviews</h4>
                <button>Reserve</button>
            </div>
            <div>
                <h4></h4>
            </div>
            <div className="reviews">
            <ReviewShow spotId={spotId} />
            {/* <CreateReviewForm spotId={spotId}/> */}
            {/* <OpenModalButton
    buttonText="Delete Review"
    modalComponent={
            <ReviewIndexItem spot={spotId}/>

        }
    /> */}</div>


            <> </>
        </section>
    )
}
export default SpotShow;




{/* <h1>{spot.name}</h1> */ }
{/* <OpenModalButton
    buttonText="My Button Text"
    modalComponent={<CreateReview spotId={spotId}/>
}
/> */}
