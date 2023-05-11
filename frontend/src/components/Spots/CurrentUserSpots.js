import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { getCurrentUserSpots } from '../../store/spots'
import SpotIndexItem from './SpotIndexItem'
import { Link } from 'react-router-dom';
import OpenModalButton from "../OpenModalButton";

const GetCurrentSpots = () => {
    const dispatch = useDispatch()
    const spotObj = useSelector(state => state.spots.allSpots)


    // console.log("currspotobj", spotObj)
    const spotList = Object.values(spotObj)
    console.log("spotList -------", spotList)

    useEffect(() => {
        dispatch(getCurrentUserSpots());
    }, [dispatch]);

    


    return (<>
    <div>

        <h2>Manage your spots</h2>
    </div>

<div>


        {spotList.length > 0 && spotList.map(spot => (
            <Fragment key={spot.id}>

<Link to={`/spots/${spot.id}`}>Spot</Link>
                <div>

                 <h1>{spot.name}</h1>
                <img src={spot.previewImage}/>
                {/* <img src={spot.previ}/> */}

                <h4>{spot.city}, {spot.state}</h4>
                <h4>${spot.price} night</h4>
                <h4>{spot.avgRating}</h4>

                </div>

 <button>
                       <Link to={`/spots/${spot.id}/edit`}>Edit
                    </Link>
                    </button>

                       <OpenModalButton
                    buttonText="Delete"
                    modalComponent={
                        <SpotIndexItem
                        spot={spot}
                        />
                    }
                />
                {/* <SpotIndexItem spot={spot} /> */}

            </Fragment>
        ))}
        </div>
    </>
    )
}
export default GetCurrentSpots
