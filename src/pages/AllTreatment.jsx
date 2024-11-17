import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { useLoaderData } from 'react-router-dom';

const AllTreatment = () => {
    const services=useLoaderData()

    return (
        <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 my-10'>
            {
                services.map(service=><ServiceCard service={service}></ServiceCard>)
            }
           </div>
    );
};

export default AllTreatment;