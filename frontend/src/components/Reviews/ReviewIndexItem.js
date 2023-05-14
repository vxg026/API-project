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

      dispatch(deleteAReview(review.id)).then(closeModal)

    dispatch(getSpot(spotId))




        // history.push(`/spot/${spotId}`)
    }
    return(
        <>
        <h2>Confrim delete</h2>
        <p>Are you sure?</p>

                <button  onClick={handleDelete}>Delete Review</button>

                <button onClick={closeModal}>Nope</button>

        </>
    )
}
export default ReviewIndexItem;
