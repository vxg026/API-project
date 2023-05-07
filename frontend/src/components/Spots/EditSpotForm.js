import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import SpotForm from './SpotForm'
import {getSpot} from '../../store/spots'


const EditSpotForm =()=>{
    const dispatch = useDispatch()
    const {spotId} = useParams();
    const spot = useSelector(state=>state.spots[spotId])

    useEffect(()=>{
        dispatch(getSpot(spotId))
    }, [dispatch, spotId])

    if(!spot) return <></>

    return(
        Object.keys(spot).length>1 &&(
            <>
            <SpotForm
            spot = {spot}
            formType="Update Spot"
            />
            </>
        )
    )
}
export default EditSpotForm;
