import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allSpotsThunk } from '../../store/spots'
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import './SpotIndex.css'


export default function GetAllSpots() {
    const dispatch = useDispatch()

    const spotsObj = useSelector(state => state.spots.allSpots)
    // console.log("spots=>", spotsObj)
    const spotsList = Object.values(spotsObj)
    console.log("spotsList=>", spotsList)
    useEffect(() => {
        dispatch(allSpotsThunk())
    }, [dispatch])

   const newSpotsList= spotsList.sort((a,b)=>(a.createdAt)-(b.createdAt))

    console.log("onespot",newSpotsList)

    return (
        <>
            <div className="home">
                {spotsList.map((spot) => (

                    <div className="home-images-card tooltip" key={spot.id}>
                        <Link className="link-to-spot" to={`spots/${spot.id}`}>
                            <span class="tooltiptext">{spot.name}</span>
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
                    </div>

                ))}
            </div>

        </>)
}
