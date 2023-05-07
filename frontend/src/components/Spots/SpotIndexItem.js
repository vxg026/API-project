import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteASpot } from '../../store/spots';


const SpotIndexItem = ({spot})=>{

    // console.log("spotindexitem")
    const dispatch = useDispatch();
// console.log("spot=====>", spot)
// const spotList = Object.values(spot)
// console.log("spotList ====>", spotList)
    const handleDelete=(e)=>{
        e.preventDefault();
        dispatch(deleteASpot(spot.id))
        // history.push('/spots/current')
    }

    return(
        <li>
            <div>
                <Link to={`/spots/${spot.id}`}>Spot</Link>
                <div>
                    <Link to={`/spots/${spot.id}/edit`}>Edit
                    </Link>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </li>
    )
}
export default SpotIndexItem
