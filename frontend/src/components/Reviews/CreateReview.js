import ReviewForm from "./CreateReviewFormModal";

const CreateReviewForm = ({spotId})=>{
    const newReview = {review:"", starRating:""};

    return(
        <ReviewForm
            spotId={spotId}
            review={newReview}
            formType="Create Review"
        />
    )
}
export default CreateReviewForm;
