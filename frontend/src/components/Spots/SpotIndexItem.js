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
<div className="delete-container">
            <div className="confirm-delete">
<h2>Confrim Delete</h2>
</div>
<div className="are-you-sure">
<p>Are you sure you want to remove this spot from listing?</p>
</div>
<div className="delete-buttons">
    <div>
<button className="delete-review" onClick={handleDelete}>Delete</button>
</div>

<div>
<button className="nope-delete" onClick={closeModal}>No</button>
</div>
                </div>
                </div>
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
