import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteASpot } from '../../store/spots';
import OpenModalButton from '../OpenModalButton'
import { useModal } from '../../context/Modal';

const SpotIndexItem = ({spot})=>{

    // console.log("spotindexitem")
    const dispatch = useDispatch();
    const {closeModal} = useModal()
// console.log("spot=====>", spot)
// const spotList = Object.values(spot)
// console.log("spotList ====>", spotList)
    const handleDelete=(e)=>{
        e.preventDefault();
        dispatch(deleteASpot(spot.id))
        .then(closeModal)
        // history.push('/spots/current')
    }

    return(
<>
<h2>Confrim Delete</h2>
<p>Are you sure you want to remove this spot from listing?</p>
<button onClick={handleDelete}>Delete</button>
<button onClick={closeModal}>No</button>
</>
        // // <li>
        // //     <div>
        //         {/* <Link to={`/spots/${spot.id}`}>Spot</Link>
        //         <div>
        //             <button>
        //                <Link to={`/spots/${spot.id}/edit`}>Edit
        //             </Link>
        //             </button> */}
        //             {/* <OpenModalButton
        //             buttonText="Delete"
        //             modalComponent={handleDelete()} */}
        //             // <button onClick={handleDelete}>Delete</button>
        //              {/* /> */}
        //         {/* </div> */}
        // //     </div>
        // // </li>
    )
}
export default SpotIndexItem
