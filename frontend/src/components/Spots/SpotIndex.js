import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allSpotsThunk } from '../../store/spots'
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min'



export default function GetAllSpots() {
    const dispatch = useDispatch()

    const spotsObj = useSelector(state => state.spots.allSpots)
    // console.log("spots=>", spotsObj)
    const spotsList = Object.values(spotsObj)
    // console.log("spotsList=>", spotsList)
    useEffect(() => {
        dispatch(allSpotsThunk())
    }, [dispatch])
    // console.log("onespot",spotsList)

    return (
        <>
            {spotsList.map((spot) => (
                <div key={spot.id}>
                    <img src={spot.previewImage}/>
                    <p className="spots">{spot.city}</p>
                    <p className="spots">{spot.state}</p>
                    <Link to={`spots/${spot.id}`}>{spot.name}</Link>
                </div>
            ))}
        </>)
}
