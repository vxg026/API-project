import { useState } from 'react'
import { createReviewThunk } from '../../store/reviews'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'

const ReviewForm = ({reviews, spotId, formType}) => {

    const dispatch = useDispatch()
    const history = useHistory()



    const [review, setReview] = useState("")
    const [stars, setStarRating] = useState(0)
    const [errors, setErrors] = useState({});

    const handleReviewSubmit =async (e) => {
        e.preventDefault()
// console.log("anhythihng")
        setErrors({})

        const newReview = {review, stars }
        if (formType === "Create Review") {
            const data = await dispatch(createReviewThunk(newReview, spotId))
            console.log("REVIEW FORM DATA---->", data)
            if (data.errors) {
                return setErrors(data.errors)
            }
            history.push(`/spots/${data.id}`)

        }


    }
    return (

        <form onSubmit={handleReviewSubmit}>
            <h2>How was your stay?</h2>
            <textarea
                value={review}
                onChange={e => setReview(e.target.value)}
                placeholder="Leave your review here" />

            {[1, 2, 3, 4, 5].map((i) => (

                <i key={i} onClick={() => setStarRating(i)} className={i <= stars ? `fas fa-star` : `far fa-star`} />
            ))}
            <button type="submit">Submit your Review</button>
        </form>
    )
}
export default ReviewForm;
