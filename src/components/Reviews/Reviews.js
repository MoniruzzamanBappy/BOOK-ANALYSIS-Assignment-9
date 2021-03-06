import React, { useEffect } from "react";
import Review from "./../Review/Review";
import useReviews from './../../hooks/useReviews';

const Reviews = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [reviews, setReviews] = useReviews();
  return (
    <div className="px-16">
      <h1 className="mb-4 mt-12 font-bold text-4xl">COMMUNITY REVIEWS</h1>
      <hr className="mb-4"/>
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
