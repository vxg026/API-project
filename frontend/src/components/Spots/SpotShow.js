import { Link, useParams } from 'react-router-dom'
import {getSpot} from '../../store/spots'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const SpotShow = ()=>{
    const dispatch = useDispatch()
    const {spotId} = useParams();


console.log("spotshow id=>", spotId)

    const spot = useSelector(state=>state.spots[spotId])

console.log("spotshow state=>", spot)

    useEffect(()=>{
        dispatch(getSpot(spotId))
    }, [dispatch, spotId])

return(
    <section>
        <table id="spot-table">
            <thead>
                <tr>
                    <th colSpan="2">Spot #{spotId}</th>
                </tr>
            </thead>
        </table>
    </section>
)
}
export default SpotShow;
