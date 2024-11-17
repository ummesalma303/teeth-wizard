import React from 'react';
import Banner from '../components/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import Feedback from '../components/Feedback';
// import { key } from 'localforage';
// import Feedback from './Feedback';

const Home = () => {
    const services = useLoaderData();
    const {serviceData, feedbackData}=services
    console.log(services);
    return (
        <div>
           <Banner></Banner>
           <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 my-10'>
            {
                serviceData.slice(0,4).map(service=><ServiceCard key={service.id} service={service}></ServiceCard>)
            }
           </div>
           <NavLink to='/allTreatment'><button className='btn btn-accent mb-7 text-white'>View All</button></NavLink>

           <div className='my-12'>
            <h2 className='text-center text-2xl font-bold'>Client Feedback</h2>
            <div  className='grid grid-cols-2 my-6 gap-20'>
                {
                    feedbackData.map(feedback=><Feedback key={feedback.reviewId} feedback={feedback}></Feedback>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;