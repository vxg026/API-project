import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CreateSpotForm from './CreateSpotForm'
import {createSpot, updateSpot} from '../../store/spots'
// import { createSpot, updateSpot } from '../store/reports';
    const SpotForm = ({ spot, formType }) => {
    const dispatch = useDispatch()

    const history = useHistory()


    const [country, setCountry] = useState(spot?.country ?? "")//spot country it it exists
    const [address, setAddress] = useState(spot?.address ?? "")
    const [city, setCity] = useState(spot?.city ?? "")
    const [state, setState] = useState(spot?.state ?? "")
    const [lat, setLat] = useState(spot?.lat ?? "")
    const [lng, setLng] = useState(spot?.lng ?? "")
    const [description, setDescription] = useState(spot?.description ?? "")
    const [name, setName] = useState(spot?.name ?? "")
    const [price, setPrice] = useState(spot?.price ?? "")
    const [previewImageUrl, setPreviewImageUrl] = useState(spot?.url ?? "")
    const [imageUrl, setImageUrl] = useState(spot?.url ?? "")
    const [url, setUrl] = useState(spot?.url ?? "")
    const [errors, setErrors] = useState({});




    const handleSubmit = async (e) => {
        e.preventDefault()

        setErrors({})

        const newSpot = {...spot, country, address, city, state, lat, lng, description, name, price, url}
        if(formType==="Create Spot"){
            const data = await dispatch(createSpot(newSpot))
console.log("data in spotform", data)
            if(data.errors){
                return setErrors(data.errors)
            }
            history.push(`/spots/${data.id}`)
        }

        if(formType ==="Update Spot"){

            const data = await dispatch(updateSpot(newSpot))
            if(data.errors){
            return setErrors(data.errors)
        }
        history.push(`/spots/${data.id}`)
        return;
    }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>{formType}</h2>

            {/* <div className="errors">{errors.understanding}</div> */}
            <label>
                Country:
                <input type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}/>
            </label>
            <label>
                Address:
                <input
                    type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
            </label>
            {/* <div className="errors">{errors.improvement}</div> */}
            <label>
                City:
                <input
                    type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
            </label>
            <label>
                State:
                <input
                    type="text"
                    value={state}
                onChange={(e) => setState(e.target.value)}
                />

            </label>


            <label>
                Lat:
                <input
                    type="text"
                    value={lat}
                onChange={(e) => setLat(e.target.value)}
                />

            </label>
            <label>
                Lng:
                <input
                    type="text"
                    value={lng}
                onChange={(e) => setLng(e.target.value)}
                />

            </label>

            <label>
                Name:
                <input
                    type="text"
                    value={name}
                onChange={(e) => setName(e.target.value)}
                />

            </label>
            <label>
                Description:
                <input
                    type="text"
                    value={description}
                onChange={(e) => setDescription(e.target.value)}
                />

            </label>
            <label>
                Price:
                <input
                    type="text"
                    value={price}
                onChange={(e) => setPrice(e.target.value)}
                />

            </label>
            <label>
                PreviewImageUrl
                <input type="url"
                value={previewImageUrl}
                onChange={(e) => setPreviewImageUrl(e.target.value)}/>

            </label>

            <label>
                ImageUrl
                <input formAction="image" type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}/>
            </label>
            <button type="submit">{formType}</button>
        </form>
    )
}
export default SpotForm
