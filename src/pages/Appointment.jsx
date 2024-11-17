import React, { useEffect, useState } from 'react';
import { getAppointment, removeAppoint,  } from '../routes/utility';

const Appointment = () => {
    const [showAppoint,setAppoint]=useState([])
    useEffect(() => {
        const appointment = getAppointment()
        setAppoint(appointment)
    }, [])
    const handleRemoveAppoint = (email) => {
        // console.log(202)
        const remove = removeAppoint(email)
        // console.log(email)
        console.log(remove)
    }
    // console.log(showAppoint.length)
    return (
        <div>
            <h2 className='text-xl font-bold'>Total Appointment: {showAppoint.length}</h2>
            <div>
                {
                    showAppoint.map((appoint,i) => (
                       
                            <div key={i} className="card bg-base-100 image-full w-96 shadow-xl my-6">
  <figure>
    <img className='w-full'
      src="https://static.vecteezy.com/system/resources/thumbnails/022/814/155/small/white-healthy-tooth-different-tools-for-dental-care-blue-background-generative-ai-photo.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
                                <h2>First Name: {appoint.fName}</h2>
                                <h2>Least Name: {appoint.lName}</h2>
                                <h3>Address: {appoint.address}</h3>
                                <h3>Phone: { appoint.phone}</h3>
                                <p>Email:{appoint.email}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleRemoveAppoint(appoint.email)} className="btn btn-primary">Cancel</button>
    </div>
  </div>
</div>
                    ))
                }
            </div>
        </div>
    );
};

export default Appointment;