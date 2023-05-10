import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAReview } from '../../store/reviews';
import { useHistory } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
const ReviewIndexItem = ({review})=>{
    const dispatch = useDispatch();
    const history = useHistory()
// const {spotId} = useParams()

    const handleDelete=(e)=>{
console.log("reviewwwwwInddxItEM====> ", review.id)
        e.preventDefault();
        dispatch(deleteAReview(review.id))
        // history.push(`/spot/${spotId}`)
    }
    return(
        <li>
            <div>
                <button onClick={handleDelete}>Delete Review</button>
            </div>
        </li>
    )
}
export default ReviewIndexItem;
