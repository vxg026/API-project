import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAReview } from '../../store/reviews';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import './ReviewShow.css'
import { getSpot } from '../../store/spots';
// import { useParams } from 'react-router-dom';
const ReviewIndexItem = ({review, spotId})=>{
    const dispatch = useDispatch();
    const history = useHistory()
    const {closeModal} = useModal()

// const {spotId} = useParams()

    const handleDelete=async (e)=>{
console.log("reviewwwwwInddxItEM====> ", review.id)
        e.preventDefault();

     await dispatch(deleteAReview(review.id)).then(closeModal)

    dispatch(getSpot(spotId))
        // history.push(`/spot/${spotId}`)
    }
    return(
        <>
        <div className="delete-container">
            <div className="confirm-delete">
        <h2>Confrim delete</h2>

            </div>
            <div className="are-you-sure">
        <p>Are you sure?</p>
</div>
<div className="delete-buttons">
    <div>
                <button  className="delete-review" onClick={handleDelete}>Delete Review</button>
</div>
<div>
                <button className="nope-delete" onClick={closeModal}>Nope</button>
                </div>
                </div>
                </div>
        </>
    )
}
export default ReviewIndexItem;
