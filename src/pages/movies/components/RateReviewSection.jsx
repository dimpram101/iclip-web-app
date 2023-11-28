import React from "react";

const RateReviewSection = ({ reviews }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-secondary text-2xl">Rate & Reviews</h1>
      <div className="scroll overflow-x-auto overflow-y-hidden">
        {reviews.length > 0 ? (
        <div className="flex space-x-2">
          {reviews.map((review) => (
            <div className="h-60 w-[450px] flex-none bg-primary rounded-xl p-4 shadow-xl">
              <div className="flex flex-col gap-2 mb-3">
                <h1 className="text-xl font-bold">{review.author}</h1>
                <p>{review.author_details.rating}/10</p>
              </div>
              <p className="overflow-hidden text-ellipsis line-clamp-5">
                {review.content}
              </p>
            </div>
          ))}
        </div>
        ) : (
        <div className="h-60 w-full flex justify-center items-center bg-primary rounded-xl p-4 shadow-xl">
          <p className="text-xl italic font-bold">
            There are currently no reviews for this movie.
          </p>
        </div>
        )}
      </div>
    </div>
  );
};

export default RateReviewSection;
