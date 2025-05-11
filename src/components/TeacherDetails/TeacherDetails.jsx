import css from "./TeacherDetails.module.css";

const TeacherDetails = ({ teacher }) => {
    return (
        <div className={css.teacherDetails}>
            <p className={css.description}>{teacher.description}</p>

            {teacher.reviews?.length > 0 && (
                <div className={css.reviews}>
                    {teacher.reviews.map((review, index) => (
                        <div key={index} className={css.review}>
                            <div className={css.reviewerHeader}>
                                <strong>{review.reviewer_name}</strong>
                                <span className={css.stars}>⭐ {review.reviewer_rating}.0</span>
                            </div>
                            <p className={css.comment}>{review.comment}</p>
                        </div>
                    ))}
                </div>
            )}

            <button className={css.bookBtn}>Book trial lesson</button>
        </div>
    );
};

export default TeacherDetails;
