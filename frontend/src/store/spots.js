import { csrfFetch } from "./csrf";
const GET_ALL_SPOTS = 'spots/getallspots'
const GET_SPOT = 'spots/GET_SPOT'
const ADD_SPOT = 'spots/addSport'
const EDIT_SPOT = 'spots/editSpot'
const DELETE_SPOT = 'spots/deleteSpot'


const getAllSpotsAction = spots => ({
    type: GET_ALL_SPOTS,
    spots
})
const getSpotAction = (spot)=>({
    type: GET_SPOT,
    spot
})
export const allSpotsThunk = () => async dispatch =>{
    const response = await csrfFetch('/api/spots')
    if(response.ok){
        const data = await response.json()
        dispatch(getAllSpotsAction(data.Spots))
        return data.Spots
    }
}

export const getSpot = (spotId)=>async(dispatch)=>{
    const response = await csrfFetch(`/api/spots/${spotId}`)
    console.log("getSpot thunk spts store", response)
    if(response.ok){
        const data = await response.json()
        dispatch(getSpotAction(data))
        return data
    }

}
const initialState = {};

const spotsReducer = (state=initialState, action)=>{
    let newState;

    switch(action.type){
        case GET_ALL_SPOTS:{
            newState={...state, allSpots:{}}
            // console.log("action=>", action)
            action.spots.forEach(spot=>{
                newState[spot.id] = spot
            })
// console.log("newState=>",newState)
            return newState

        }
        case GET_SPOT:{
            console.log("action=>", action)
            return {...state, [action.spot.id]: action.spot}
        }
        default:
            return state;
    }

}
export default spotsReducer;
