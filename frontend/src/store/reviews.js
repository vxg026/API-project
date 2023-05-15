import { csrfFetch } from "./csrf";
const GET_ALL_CURR_REVIEWS = 'reviews/getallreviews'
const CREATE_REVIEW = 'reviews/CREATE_REVIEW'
const GET_SPOT_REVIEWS = 'reviews/GET_SPOT_REVIEWS'
const DELETE_REVIEW = 'reviews/DELETE_REVIEW'
const CLEAR_REVIEWS = 'reviews/CLEAR'

const getSpotReviewsAction = (reviews)=>({
    type: GET_SPOT_REVIEWS,
    reviews
})
const getReviewsCurrUserAction = reviews =>({
    type: GET_ALL_CURR_REVIEWS,
    reviews
})

const createReviewAction = review =>({
    type: CREATE_REVIEW,
    review
})

const deleteReviewAction = (reviewId) =>({
    type: DELETE_REVIEW,
    reviewId
})

export const clearReviews = ()=>({
    type: CLEAR_REVIEWS
})
export const deleteAReview = (reviewId) => async(dispatch)=>{
    const response = await csrfFetch(`/api/reviews/${reviewId}`,{
        "method": "DELETE"
    })
    if(response.ok){
        dispatch(deleteReviewAction(reviewId))
        return
    }
}

export const getSpotReviewsThunk = (spotId)=> async dispatch=>{
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`)
    if(response.ok){
        const data = await response.json()

        dispatch(getSpotReviewsAction(data.Reviews))
        return data.Reviews
    }else{

        const data = await response.json()
        return data
    }
}

export const createReviewThunk = (review, spotId)=> async dispatch=>{

try{
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
        "method":"POST",
        "headers": { 'Content-Type': 'application/json'},
        "body": JSON.stringify(
          review
        )
    })
    // if(response.ok){
        const data = await response.json()
        dispatch(createReviewAction(data))
        return data
    // }
}
// else{
catch(e){
    const data = await e.json()
    return data
// }
}
}

export const getAllReviewsByCurrThunk = ()=>async dispatch=>{
    const response = await csrfFetch('/api/reviews/current')

    if(response.ok){
        const data = await response.json()

        dispatch(getReviewsCurrUserAction(data.Reviews))
        return data.Reviews
    }
}
const initialState = { allReviews:{}, currentUserReviews:{}}

const reviewsReducer = (state = initialState, action)=>{
    let newState;

    switch(action.type){
        case GET_ALL_CURR_REVIEWS:{
            newState = {...state, allReviews:{...state.allReviews}, currentUserReviews:{...state.currentUserReviews}}
            action.reviews.forEach(review=>{
                newState.allReviews[review.id]= review
                newState.currentUserReviews[review.id]= review
            })
            return newState
        }
        case CLEAR_REVIEWS:
            return {...state, allReviews:{}}

        case CREATE_REVIEW:{

            return { ...state, allReviews: { ...state.allReviews, [action.review.id]: action.review } };

        }
        case GET_SPOT_REVIEWS:{
            newState = {...state, allReviews:{}}
            action.reviews.forEach(review=>{
                newState.allReviews[review.id]= review
            })
            return newState
        }
        case DELETE_REVIEW:
            newState = {...state, allReviews:{...state.allReviews}, currentUserReviews:{...state.currentUserReviews}}
            delete newState.allReviews[action.reviewId]
            delete newState.currentUserReviews[action.reviewId]
            return newState

        default: return state;
    }
}

export default reviewsReducer;
