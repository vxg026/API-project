import SpotForm from './SpotForm';

const CreateSpotForm = ()=>{
    const spot = {
        spot:"", country:"", address:"", city:"", state:"", lat:"", lng:"", description:"", name:"", price:"", url:""
    };

    return(
        <SpotForm
        spot={spot}
        formType="Create Spot"
        />
    )
}
export default CreateSpotForm
