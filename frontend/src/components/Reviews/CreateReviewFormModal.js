import { useState, useEffect } from 'react'
import { createReviewThunk } from '../../store/reviews'
import { getSpot } from '../../store/spots'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { useModal } from '../../context/Modal'
import './Review.css'
import './CreateReviewForm.css'

const ReviewForm = ({reviews, spotId, disabled,formType}) => {

    const dispatch = useDispatch()
    const history = useHistory()



    const [review, setReview] = useState("")
    const [stars, setStars] = useState(0)
    const [errors, setErrors] = useState({});
    const [activeRating, setActiveRating]=useState(stars)

    const {closeModal } = useModal()

const newReview = {...reviews, review, stars }
    const handleReviewSubmit =async (e) => {
        e.preventDefault()
// console.log("anhythihng")
        setErrors({})



        if (formType === "Create Review"){
            const response = await dispatch(createReviewThunk(newReview, spotId))
            if(!response.errors){
            dispatch(getSpot(spotId))
            }

            if (response.errors) {
                console.log("response errors===>", response.errors)
              setErrors(response.errors);
            } else {
              closeModal()

            }

            // return dispatch(createReviewThunk(newReview, spotId))
            // .then(closeModal)

        }


    }

    useEffect(()=>{
        setActiveRating(stars)
    },[stars])

    const onChange=(number)=>{
        setStars(parseInt(number))
    }

    const handleMouseEnter = index=>{
        if(!disabled){
            setActiveRating(index+1)
        }
    }
    const handleMouseLeave = ()=>{
        if(!disabled){
            setActiveRating(stars)
        }
    }
    const handleClick = index =>{
        if(!disabled){
            onChange(index+1)
        }
    }

let arr = []
for(let index=0; index<5; index++){
    const className = index<activeRating ? 'fas fa-star': 'far fa-star'
    arr.push(
        <div
        className ={className}
        onMouseEnter={()=>handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        onClick={()=>handleClick(index)}>
            {/* <i className={className}></i> */}
        </div>
    )
}
console.log("array=>", arr)

    return (

        <form onSubmit={handleReviewSubmit}>
            <div className="rating">
            <label>
                <div className="how-was-your-day">
            <h3 clssName="howwas">How was your stay?</h3>
            </div>
            <div className="text-your-day">
            <textarea
            className="textArea-review"
                type="text"
                value={review}
                onChange={e => setReview(e.target.value)}
                placeholder="Leave your review here" />
                </div>
            </label>
        <p className="errors">{errors.review}</p>
        <div className="stars">
            {arr} Stars
        </div>

            {/* {[1, 2, 3, 4, 5].map((i) => (
  <i
  key={i}

  onClick={() => setStars(i)}
  onMouseOver={() => {setStars(i)}}
  onMouseOut={() => {
    if (i > stars) {
        setStars(0);
      }
  }}
  className={i <= stars ? 'fas fa-star' : 'far fa-star'}
/>
                // <i key={i} onClick={() => setStars(i)} className={i <= stars ? `fas fa-star` : `far fa-star`} />
            ))} */}
            <button className="star-submit" type="submit" disabled={(review.length<10 || stars===-0)}>Submit your Review</button>
            </div>
        </form>
    )
}
export default ReviewForm;
