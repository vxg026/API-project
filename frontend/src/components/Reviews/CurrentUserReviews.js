import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { getAllReviewsByCurrThunk } from '../../store/reviews'

const GetCurrentReviews = () => {
    const dispatch = useDispatch()

    const reviewsObj = useSelector(state=>state.reviews.currentUserReviews)
    console.log("REVIEWSSSS=====>", reviewsObj)

    useEffect(()=> {
        dispatch(getAllReviewsByCurrThunk())
    }, [dispatch])



return(
    <>
    <h1>inside current user reviews</h1>
    </>
)
}

export default GetCurrentReviews;
