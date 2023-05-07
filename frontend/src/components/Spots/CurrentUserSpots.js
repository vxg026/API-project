import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getCurrentUserSpots} from '../../store/spots'
const  GetCurrentSpots= ()=>{
    const dispatch = useDispatch()
        const spotObj = useSelector(state=> state.spots.allSpots)
        // console.log("currspotobj", spotObj)
    const spotList =Object.values(spotObj)
console.log("spotList -------", spotList)

    useEffect(() => {
        dispatch(getCurrentUserSpots());
      }, [dispatch]);

return (<>
{spotList.length>0 && spotList.map(spot=>(
<>
{}
</>
    ))}
</>
)
}
export default GetCurrentSpots
