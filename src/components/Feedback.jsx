import React from 'react';

const Feedback = ({feedback}) => {
    const {reviewId,name,userImg,review}=feedback||{}
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <img className='w-14 h-14 rounded-full' src={userImg} alt="" />
    <h2 className="card-title">{name}</h2>
    <p>{review}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Feedback;