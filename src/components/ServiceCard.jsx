import React from 'react';
// import PropTypes from 'prop-types';

const ServiceCard = ({service}) => {
    // console.log(service);
    const {treatment,image,description,cost}=service||{}
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure>
    <img className='aspect-video object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title flex justify-between">
      {treatment}
      <div className="badge badge-secondary">{cost}</div>
    </h2>
    <p title={description}>{description.slice(0,200)}...</p>
    <div className="card-actions justify-end">
      <div className="btn btn-primary text-white">Check Out More</div>
      {/* <div className="badge badge-outline">Products</div> */}
    </div>
  </div>
</div>
        </div>
    );
};

ServiceCard.propTypes = {
    
};

export default ServiceCard;