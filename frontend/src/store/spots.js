import { csrfFetch } from "./csrf";
const GET_ALL_SPOTS = 'spots/getallspots'
const GET_SPOT = 'spots/GET_SPOT'
const GET_CURRENT_USER_SPOTS = 'spots/GET_CURRENT_USER_SPOTS'
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

const editSpot = (spot)=>({
    type: EDIT_SPOT,
    spot
})
const currentUserSpots = (spots)=>({
    type: GET_CURRENT_USER_SPOTS,
    spots
})

const deleteSpot = (spotId) => ({
    type: DELETE_SPOT,
    spotId
})

export const deleteASpot = (spotId)=>async(dispatch)=>{

    const response = await csrfFetch(`/api/spots/${spotId}`, {

        "method": "DELETE"
    })
    // console.log("dedlete thunk****", response)
    if(response.ok){
        dispatch(deleteSpot(spotId))
    }

}

export const allSpotsThunk = () => async dispatch =>{
    const response = await csrfFetch('/api/spots',)
    if(response.ok){
        const data = await response.json()
        dispatch(getAllSpotsAction(data.Spots))
        return data.Spots
    }
}

export const getCurrentUserSpots = ()=> async dispatch=>{
    const response = await csrfFetch(`/api/spots/current`)

    if(response.ok){
        const data = await response.json()

        dispatch(currentUserSpots(data))
        return data
    }
}

export const createSpot = (spot)=> async(dispatch)=>{
    const response = await csrfFetch(`/api/spots`, {
        "method":"POST",
        "headers": { 'Content-Type': 'application/json'},
        "body": JSON.stringify(
          spot
        )
    })
    if(response.ok){
        const data = await response.jsonO()
        dispatch(getSpotAction(data))
        return data
    }
else{

    const data = await response.json()
    return data
}


}

export const updateSpot = (spot)=>async(dispatch)=>{

    const response = await csrfFetch(`/api/spots/${spot.id}`,{
        "method":"PUT",
        "headers": { 'Content-Type': 'application/json'},
        "body": JSON.stringify(spot)
    })
    if(response.status===200){
        const data = await response.json()
        dispatch(editSpot(data))
        // console.log("data thunk", data)
        return data

      }
      if (response.status === 400){
        const data = await response.json()
        return data
      }

}

export const getSpot = (spotId)=>async(dispatch)=>{
    const response = await csrfFetch(`/api/spots/${spotId}`)
    // console.log("getSpot thunk spts store", response)
    if(response.ok){
        const data = await response.json()
        dispatch(getSpotAction(data))
        return data
    }

}
const initialState = {allSpots:{}, currentUserSpots:{}};//hmmnot sure
// , currentSpot:{}
const spotsReducer = (state=initialState, action)=>{
    let newState;

    switch(action.type){
        case GET_ALL_SPOTS:{
            newState={...state, allSpots:{}}
            // console.log("action=>", action)
            action.spots.forEach(spot=>{
                newState.allSpots[spot.id] = spot
            })
// console.log("newState=>",newState)
            return newState

        }
        case GET_SPOT:{
            return { ...state, allSpots: { ...state.allSpots, [action.spot.id]: action.spot } };
        }
        case EDIT_SPOT:{
            return { ...state, allSpots: { ...state.allSpots, [action.spot.id]: action.spot }, currentUserSpots:{...state.currentUserSpots, [action.spot.id]: action.spot} };
        }
        case GET_CURRENT_USER_SPOTS:{
            newState = {...state, allSpots:{...state.allSpots}, currentUserSpots:{...state.currentUserSpots}}
            // , currentSpot:{...state.currentSpot}
            // console.log("new state for curr uuser reducer=>", newState)
            console.log("spots curr", action.spots.Spots)
            action.spots.Spots.forEach(spot=>{
                newState.allSpots[spot.id] = spot
                newState.currentUserSpots[spot.id] = spot
            })
            console.log("getuser Spot reducer=>", newState)
            return newState

        }
        case DELETE_SPOT:{
            newState = {...state, allSpots:{...state.allSpots},currentUserSpots:{...state.currentUserSpots} }
            delete newState.currentUserSpots[action.spotId]
            delete newState.allSpots[action.spotId]
            return newState
        }
        default:
            return state;
    }

}
export default spotsReducer;
