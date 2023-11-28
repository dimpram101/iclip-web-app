import React, { useState } from "react";
import Divider from "../../../components/Divider";
import Modal from "../../../components/Modal";

const RateReviewSection = ({ reviews }) => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className="h-full flex justify-center items-center ">
          <div className="w-[800px] min-h-[300px] max-h-[600px] flex flex-col justify-between bg-primary px-6 py-4 gap-3 rounded-xl">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">{selectedReview?.author}</h1>
              <p className="text-3xl font-bold">
                {selectedReview?.author_details?.rating}/10
              </p>
            </div>
            <Divider className="opacity-25 my-2" />
            <div className="flex flex-1 flex-col gap-2 overflow-y-auto scroll ">
              <p className="text-lg leading-8">
                {selectedReview?.content}
              </p>
            </div>
            <button
              className="bg-secondary py-1 px-2 mt-2 rounded-lg"
              onClick={() => {
                setShowModal(false);
                setSelectedReview(null);
                document.body.style.overflow = "auto";
              }}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>

      <div className="flex flex-col gap-2">
        <h1 className="text-secondary text-2xl">Rate & Reviews</h1>
        <div className="scroll overflow-x-auto overflow-y-hidden">
          {reviews.length > 0 ? (
            <div className="flex space-x-2">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="h-64 w-[450px] flex-none bg-primary rounded-xl p-4 shadow-xl"
                >
                  <div className="flex h-full flex-col justify-between gap-3">
                    <div className="flex flex-row justify-between gap-2">
                      <h1 className="text-xl font-bold">{review.author}</h1>
                      <p className="text-xl font-bold">
                        {review.author_details.rating}/10
                      </p>
                    </div>
                    <Divider className="opacity-25" />
                    <p className="overflow-hidden text-ellipsis line-clamp-5">
                      {review.content}
                    </p>
                    <div className="flex flex-row justify-end">
                      <button
                        className="px-2 py-1 bg-secondary text-sm rounded-lg hover:brightness-90"
                        onClick={() => {
                          setSelectedReview(review);
                          setShowModal(true);
                          document.body.style.overflow = "hidden";
                        }}
                      >
                        See Full
                      </button>
                    </div>
                  </div>
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
    </>
  );
};

export default RateReviewSection;
