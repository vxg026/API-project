import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import CreateSpotForm from './CreateSpotForm'
import { createSpot, updateSpot } from '../../store/spots'
import './SpotForm.css'
// import { createSpot, updateSpot } from '../store/reports';
const SpotForm = ({ spot, formType }) => {
    const dispatch = useDispatch()

    const user = useSelector(state=> state.session.user)

    const history = useHistory()


    const [country, setCountry] = useState(spot?.country)//spot country it it exists
    const [address, setAddress] = useState(spot?.address)
    const [city, setCity] = useState(spot?.city)
    const [state, setState] = useState(spot?.state)
    const [lat, setLat] = useState(1)
    const [lng, setLng] = useState(1)
    const [description, setDescription] = useState(spot?.description)
    const [name, setName] = useState(spot?.name)
    const [price, setPrice] = useState(spot?.price)
    const [previewImage, setPreviewImage] = useState(spot?.url)
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

        if (formType === "Create a New Spot") {
            const spotInfo = await dispatch(createSpot(newSpot, user))

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
        <div className="form-main-container">
        <form className="form"onSubmit={handleSubmit}>

            <h2>{formType}</h2>

            <div className="section1-form">
            <h4 className="h4">Where is your place located?</h4>

            <p className="p">Guests will only get your exact address once they booked a reservation.</p>
            {/* <div className="errors">{errors.understanding}</div> */}
            <label className="form-label">
                Country:
                <input className="form-input" type="text"
                    placeholder='Country'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)} />
            </label>
            <p className="errors">{errors.country}</p>
            <label className="form-label">

                Address:
                <input className="form-input"
                    type="text"
                    placeholder='Street Address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </label>
            <p className="errors">{errors.address}</p>
            {/* <div className="errors">{errors.improvement}</div> */}
            <label className="form-label">
                City:
                <input className="form-input"
                    type="text"
                    placeholder='City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </label>
            <p className="errors">{errors.city}</p>
            <label className="form-label">
                State:
                <input className="form-input"
                    type="text"
                    placeholder='State'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />

            </label>
            <p className="errors">{errors.state}</p>
            </div>
            {/* <label className="form-label">
                Lat:
                <input className="form-input"
                    type="text"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                />

            </label>
            <p className="errors">{errors.lat}</p>
            <label className="form-label">
                Lng:
                <input className="form-input"
                    type="text"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                />

            </label>
            <p className="errors">{errors.lng}</p> */}
            <div className="section2-form">
                <h4 className="h4">Describe your place to guests</h4>
                <p className="p">Mention the best features of your space, any special amentities like fast wifi or parking, and what you love about the neighborhood.</p>

            <label className="form-label">
                Description:
                <textarea className="description-form"
                    type="text"
                    value={description}
                    placeholder='Please write at least 30 characters'
                    onChange={(e) => setDescription(e.target.value)}
                />

            </label>
            <p className="errors">{errors.description}</p>
            </div>

            <div className="section3-form">
                <h4 className="h4">Create a title for your spot</h4>
                <p className="p">Catch guests' attention with a spot title that highlights what makes your place special.</p>
            <label className="form-label">
                Name:
                <input className="form-input"
                    type="text"
                    value={name}
                    placeholder='Name of your spot'
                    onChange={(e) => setName(e.target.value)}
                />

            </label>
            <p className="errors">{errors.name}</p>
            </div>

            <div className="section4-form">
                <h4 className="h4">Set a base price for your spot</h4>
                <p className="p">Competitive pricing can help your listing stand out and rank higher in search results.</p>
            <label className="form-label">
                Price:
                <input className="form-input"
                    type="text"
                    value={price}
                    placeholder="Price per night (USD)"
                    onChange={(e) => setPrice(e.target.value)}
                />

            </label>
            <p className="errors">{errors.price}</p>
            </div>



            <div className="section5-form">
                <h4 className="h4">Liven up your spot with photos</h4>
                <p className="p">Submit a link to at least one photo to publish your spot.</p>
            <label className="form-label">
                ImageUrl
                <input className="form-input" formAction="image" type="url"
                    value={url1}
                    placeholder='Preview Image URL'
                    onChange={(e) => setUrl1(e.target.value)} />
            </label>

            <label className="form-label">
                ImageUrl
                <input className="form-input" formAction="image" type="url"
                    value={url2}
                    placeholder='Image URL'
                    onChange={(e) => setUrl2(e.target.value)} />
            </label>
            <label className="form-label">
                ImageUrl
                <input className="form-input" formAction="image" type="url"
                    value={url3}
                    placeholder='Image URL'
                    onChange={(e) => setUrl3(e.target.value)} />
            </label>
            <label className="form-label">
                ImageUrl
                <input className="form-input" formAction="image" type="url"
                    value={url4}
                    placeholder='Image URL'
                    onChange={(e) => setUrl4(e.target.value)} />
            </label>
            <label className="form-label">
                ImageUrl
                <input className="form-input" formAction="image" type="url"
                    value={url5}
                    placeholder='Image URL'
                    onChange={(e) => setUrl5(e.target.value)} />
            </label>

            </div>
            <div className="section6-form">
            <button className="button-form" type="submit">{formType}</button>
            </div>
        </form>
        </div>
    )
}
export default SpotForm
