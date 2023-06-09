import SpotForm from './SpotForm';

const CreateSpotForm = ()=>{
    const spot = {
        spot:"",
        country:"",
        address:"",
        city:"",
        state:"",
        description:"",
        name:"",
        price:"",
        preview:"",
        url:""
    };

    return(
        <SpotForm
        spot={spot}
        formType="Create a New Spot"
        />
    )
}
export default CreateSpotForm
