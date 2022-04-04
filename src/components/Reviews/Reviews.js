import React from "react";
import useReviews from "./../hooks/useReviews";
import Review from "./../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="px-16">
      <h1 className="mb-4 font-bold text-4xl">COMMUNITY REVIEWS</h1>
      <hr />
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
