import React from "react";

const Review = ({ review }) => {
  const { name, img, rating, body } = review;
  return (
    <div className="p-1">
        
      <div className="flex">
        <img className="rounded-full" src={img} alt="" />
        <h1 className="flex items-center p-2">{name}</h1>
      </div>
      <div>
        <p>
          <small>{body}</small>
        </p>
        <p>Ratings: {rating} Star</p>
      </div>
      <hr className="mt-2" />
      <br />
    </div>
  );
};

export default Review;
