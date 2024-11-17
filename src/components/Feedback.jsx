import React from 'react';

const Feedback = ({feedback}) => {
    const {name,userImg,review}=feedback||{}
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <div className='p-6'>
    <img className='w-14 h-14 rounded-full' src={userImg} alt="" />
            <div className='flex justify-between items-center'>
            <h2 className="card-title">{name}</h2>
              <p>{new Date().toLocaleDateString()}</p>
            </div>
            
            
    <p>{review}</p>
            <div className="card-actions justify-end">
            <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Feedback;