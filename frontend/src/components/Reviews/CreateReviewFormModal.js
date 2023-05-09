import { useState, useEffect } from 'react'
import { createReviewThunk } from '../../store/reviews'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { useModal } from '../../context/Modal'
import './Review.css'

const ReviewForm = ({reviews, spotId, disabled,formType}) => {

    const dispatch = useDispatch()
    const history = useHistory()



    const [review, setReview] = useState("")
    const [stars, setStars] = useState(1)
    const [errors, setErrors] = useState({});
    const [activeRating, setActiveRating]=useState(stars)

    const {closeModal } = useModal()

const newReview = {...reviews, review, stars }
    const handleReviewSubmit =async (e) => {
        e.preventDefault()
// console.log("anhythihng")
        setErrors({})



        if (formType === "Create Review"){

            return dispatch(createReviewThunk(newReview, spotId))
            .then(closeModal)
            // .catch(async (data) =>{

            //     if (data.errors) {
            //                 return setErrors(data.errors)
            //             }
            // }
            // )
        }

        // if (formType === "Create Review") {
        //     const data =  dispatch(createReviewThunk(newReview, spotId))
        //     console.log("REVIEW FORM DATA---->", data)
        //     if (data.errors) {
        //         return setErrors(data.errors)
        //     }

        //     history.push(`/spots/${data.id}`)

        // }


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
            <h2>How was your stay?</h2>
            <textarea
                type="text"
                value={review}
                onChange={e => setReview(e.target.value)}
                placeholder="Leave your review here" />

        <div>
            {arr}
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
            <button type="submit">Submit your Review</button>
        </form>
    )
}
export default ReviewForm;
