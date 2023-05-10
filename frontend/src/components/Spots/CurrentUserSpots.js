import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { getCurrentUserSpots } from '../../store/spots'
import SpotIndexItem from './SpotIndexItem'


const GetCurrentSpots = () => {
    const dispatch = useDispatch()
    const spotObj = useSelector(state => state.spots.currentUserSpots)


    // console.log("currspotobj", spotObj)
    const spotList = Object.values(spotObj)
    // console.log("spotList -------", spotList)

    useEffect(() => {
        dispatch(getCurrentUserSpots());
    }, [dispatch]);

    return (<>
        {spotList.length > 0 && spotList.map(spot => (
            <Fragment key={spot.id}>
                <h1>curr</h1>
                {spot.name}
                <SpotIndexItem spot={spot} />
            </Fragment>
        ))}
    </>
    )
}
export default GetCurrentSpots
