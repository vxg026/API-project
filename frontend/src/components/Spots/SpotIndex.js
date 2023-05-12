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
    // console.log("onespot",spotsList)

    return (
        <>
            <div className="home">
                {spotsList.map((spot) => (
                    <div className="home-images-card" key={spot.id}>

                        <div className="spot-index-img">
                            <img className="image-in-home" src={spot.previewImage} />
                        </div>

                        <div className="card-img-info-index">
                            <div className="index-city-staate-reviews">
                                <div className="index-city-state">
                                    <p className="spots">{spot.city} {spot.state}</p>
                                    {/* <p className="spots"></p> */}
                                </div>
                                <p className="spots"><i className="fas fa-star"></i>{spot.avgStarRating?.toFixed(1)}</p>
                            </div>
                            <div className="index-price">
                                {spot.price}/night
                            </div>
                            <Link to={`spots/${spot.id}`}>{spot.name}</Link>
                        </div>

                    </div>
                ))}
            </div>
        </>)
}
