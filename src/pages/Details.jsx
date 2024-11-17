import React from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";

const Details = () => {
  const { treatment, description, cost, image } = useLoaderData();
  // console.log(data)
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold space-y-7">{treatment}</h1>
            <p className="mb-5">{description}</p>
            <h4>Price: ${cost}</h4>
            <button
              className="btn btn-primary my-4"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default Details;
