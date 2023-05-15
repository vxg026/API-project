import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { getCurrentUserSpots } from '../../store/spots'
import SpotIndexItem from './SpotIndexItem'
import { Link } from 'react-router-dom';
import OpenModalButton from "../OpenModalButton";
import './CurrentUserSpots.css'

const GetCurrentSpots = () => {
    const dispatch = useDispatch()
    const spotObj = useSelector(state => state.spots.allSpots)


    // console.log("currspotobj", spotObj)
    const spotList = Object.values(spotObj)
    // console.log("spotList -------", spotList)

    useEffect(() => {
        dispatch(getCurrentUserSpots());
    }, [dispatch]);




    return (<>
    <div>

        <h2 className="managespot">Manage your spots</h2>
    </div>

<div>

<div className="home">
        {spotList.length > 0 && spotList.map(spot => (
            <Fragment key={spot.id}>

{/* <Link to={`/spots/${spot.id}`}>Spot</Link> */}

<div className="home-images-card tooltip" key={spot.id}>
                        <Link className="link-to-spot" to={`/spots/${spot.id}`}>
                            <span className="tooltiptext">{spot.name}</span>
                            <div className="spot-index-img">
                                <img className="image-in-home" src={spot.previewImage} />
                            </div>

                            <div className="card-img-info-index">
                                <div className="index-city-staate-reviews">
                                    <div className="index-city-state">
                                        <p className="spots">{spot.city} {spot.state}</p>
                                        {/* <p className="spots"></p> */}
                                        {console.log("average star rating!======>", spot.avgRating)}
                                    </div>
                                    <p className="spots"><i className="fas fa-star"></i>{spot.avgRating ? spot.avgRating?.toFixed(1) : "New!"}</p>
                                </div>
                                <div className="index-price">
                                   <h6 className="spotindex-price">{spot.price}</h6> <h6>/night</h6>
                                </div>

                            </div>
                        </Link>
<div className="curr-buttons">
    <div>
 <button className="curr-delete-button">
                       <Link className="link" to={`/spots/${spot.id}/edit`}>Edit
                    </Link>
                    </button>
                    </div>
<div className="modal-curr">
                       <OpenModalButton
                    buttonText="Delete"
                    modalComponent={
                        <SpotIndexItem
                        spot={spot}
                        />
                    }
                />
</div>
</div>
                {/* <SpotIndexItem spot={spot} /> */}
</div>
            </Fragment>
        ))}
        </div>
        </div>
    </>
    )
}
export default GetCurrentSpots
