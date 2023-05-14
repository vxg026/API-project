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

    // const user = useSelector(state=>state.session)
    // console.log("userrrr in spot showwww =====>      =====>", user.user.id)
    // console.log("spotshow state=>", spot)

    useEffect(() => {
        dispatch(getSpot(spotId))
    }, [dispatch, spotId])

    if (!spot) return null
    if (!spot.SpotImages) return null
    // if(!stateObj) return null

// console.log("spoooooot in shpotshow", spot)
    // console.log(spot)
    return (

        <section className="root">

            <div className="spotshow-name-city-state-country">
            <h2 className="spotshow-spot-name">{spot.name}</h2>
            <div>
                <h5 className="spotshow-undertitle">{spot.city}, {spot.state}, {spot.country}</h5>
                {/* <h2>{spot.numReviews}reviews</h2> */}
            </div>
            </div>
            <div className="spotshow-images-container">

                {/* {spot.SpotImages.map(image => (<img className="spotshow-image" src={`${image.url}`} />))} */}
                <div className="spotshow-preview-image">
                {spot.SpotImages[0] && <img className="spotshow-preview-ima" src={spot.SpotImages[0].url}/> }
                </div>

                <div className="spotshow-images">
                {spot.SpotImages[1] && <img className="spotshow-img i1" src={spot.SpotImages[1].url}/> }
                {spot.SpotImages[2] && <img className="spotshow-img i2" src={spot.SpotImages[2].url}/> }
                {spot.SpotImages[3] && <img className="spotshow-img i3" src={spot.SpotImages[3].url}/> }
                {spot.SpotImages[4] && <img className="spotshow-img i4" src={spot.SpotImages[4].url}/> }
                </div>



            </div>

            <div className="spotshow-container-3">
                <div className="spotshow-onwerinfo">
            <h3 className="spotshow-onwer-name">Hosted By {spot.Owner.firstName} {spot.Owner.lastName} </h3>
              <div className="description">
            <p>{spot.description}</p>
            </div>
            </div>

 <div className="spotshow-little-info">
 <div className="spotshow-info">
                <div className="spotshow-price-stars">
                <div>
               <h4 className="spotshow-price">${spot.price} /night</h4>
               </div>

               <div>
                <h4 className="spotshow-rating">
               <i className="fas fa-star"/>{spot.numReviews?"·":""}{spot.avgStarRating?.toFixed(1)} #{(spot.numReviews ? spot.numReviews && spot.numReviews<=1 ? "review": "reviews": "New!")} </h4>
            </div>
                </div>

               <div className="button-container">
               <button className="reserve-button">Reserve</button>
          </div>
           </div>
            </div>

            </div>


            <div className="spotshow-container-four">

                <h4><i className="fas fa-star"/>{spot.numReviews?"·":""}{spot.avgStarRating?.toFixed(1)} #{(spot.numReviews ? spot.numReviews && spot.numReviews<=1 ? "review": "reviews": "New!")} </h4>

            </div>

            {/* {spot.numReviews==0 && spot?.ownerId!==user?.user?.id && <h2>Be the first to post a review!</h2>} */}
            <div className="spotshow-reviews">

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
