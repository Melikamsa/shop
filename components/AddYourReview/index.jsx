import React from "react";
import { FiStar } from "react-icons/fi";

const AddReview = () => {
  return (
    <div className="flex flex-col gap-5 m-4">
      <h2 className="text-xl">add your review</h2>

      <section className="flex flex-col gap-2">
        <p>your rating</p>

        <section className="flex items-center gap-3">
          <div>
            <FiStar />
          </div>
          <div className="flex items-center">
            <FiStar />
            <FiStar />
          </div>
          <div className="flex items-center">
            <FiStar />
            <FiStar />
            <FiStar />
          </div>
          <div className="flex items-center">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </div>
          <div className="flex items-center">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </div>
        </section>
      </section>

      <section className="flex flex-col gap-4">
        <div>
          <p>name</p>
          <input
            type="text"
            placeholder="enter your name"
            className="rounded-lg mt-2 p-3 outline-none text-white"
          />
        </div>
        <div>
          <p>email address</p>
          <input
            type="email"
            placeholder="enter your email"
            className="rounded-lg mt-2 p-3 outline-none text-white"
          />
        </div>
        <div>
          <p>your review</p>
          <input
            type="text"
            placeholder="enter your review"
            className="rounded-lg mt-2 p-3 outline-none text-white"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg mt-2 p-3 bg-black text-white w-[100px]"
        >
          Submit
        </button>
      </section>
    </div>
  );
};

export default AddReview;
