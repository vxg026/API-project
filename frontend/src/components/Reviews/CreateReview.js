import ReviewForm from "./CreateReviewFormModal";
import OpenModalButton from '../OpenModalButton'

const CreateReviewForm = ({spotId})=>{
    const newReview = {review:"", starRating:""};

    return(
        <>
<OpenModalButton
    buttonText="My Button Text"
    modalComponent={

        <ReviewForm
            disabled={false}
            spotId={spotId}
            reviews={newReview}
            formType="Create Review"
        />
    }/>
        </>
    )
}
export default CreateReviewForm;
