import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CreateSpotForm from './CreateSpotForm'
import { createSpot, updateSpot } from '../../store/spots'
// import { createSpot, updateSpot } from '../store/reports';
const SpotForm = ({ spot, formType }) => {
    const dispatch = useDispatch()

    const history = useHistory()


    const [country, setCountry] = useState(spot?.country)//spot country it it exists
    const [address, setAddress] = useState(spot?.address)
    const [city, setCity] = useState(spot?.city)
    const [state, setState] = useState(spot?.state)
    const [lat, setLat] = useState(spot?.lat)
    const [lng, setLng] = useState(spot?.lng)
    const [description, setDescription] = useState(spot?.description)
    const [name, setName] = useState(spot?.name)
    const [price, setPrice] = useState(spot?.price)
    const [preview, setPreview] = useState(spot?.url)
    // const [previewImage, setPreviewUmage]= useState(spot?.previewImage)
    const [url1, setUrl1] = useState(spot?.SpotImages?.url1)
    const [url2, setUrl2] = useState(spot?.SpotImages?.url2)
    const [url3, setUrl3] = useState(spot?.SpotImages?.url3)
    const [url4, setUrl4] = useState(spot?.SpotImages?.url4)
    const [url5, setUrl5] = useState(spot?.SpotImages?.url5)

    // const [url, setUrl] = useState(spot?.url)
    const [errors, setErrors] = useState({});




    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors({})
        const newSpot = { ...spot,
            country,
            address,
            city,
            state,
            lat,
            lng,
            description,
            name,
            price,
           SpotImages:[
            {preview:true, url:url1},
            {preview:false, url:url2},
            {preview:false, url:url3},
            {preview:false, url:url4},
            {preview:false, url:url5},
           ]
         }

        if (formType === "Create Spot") {
            const spotInfo = await dispatch(createSpot(newSpot))

            console.log("data in spotform", spotInfo)
            if (spotInfo.errors) {
                return setErrors(spotInfo.errors)
            }
            history.push(`/spots/${spotInfo.id}`)
        }

        if (formType === "Update Spot") {

            const data = await dispatch(updateSpot(newSpot))
            if (data.errors) {
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
                    onChange={(e) => setCountry(e.target.value)} />
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
                <textarea
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
                ImageUrl
                <input formAction="image" type="url"
                    value={url1}
                    onChange={(e) => setUrl1(e.target.value)} />
            </label>
            <label>
                ImageUrl
                <input formAction="image" type="url"
                    value={url2}
                    onChange={(e) => setUrl2(e.target.value)} />
            </label>
            <label>
                ImageUrl
                <input formAction="image" type="url"
                    value={url3}
                    onChange={(e) => setUrl3(e.target.value)} />
            </label>
            <label>
                ImageUrl
                <input formAction="image" type="url"
                    value={url4}
                    onChange={(e) => setUrl4(e.target.value)} />
            </label>
            <label>
                ImageUrl
                <input formAction="image" type="url"
                    value={url5}
                    onChange={(e) => setUrl5(e.target.value)} />
            </label>
            <button type="submit">{formType}</button>
        </form>
    )
}
export default SpotForm
