import React from 'react';
import { setAppointment } from '../routes/utility';

const Modal = () => {
    const handleForm = e => {
        e.preventDefault()
        const fName = e.target.fName.value
        const lName = e.target.lName.value
        const email = e.target.email.value
        const phone = e.target.phone.value
        const address = e.target.address.value
        console.log(fName, lName, address, phone, email)

        const storageInfo = {
            fName,lName,email,phone,address
        }
        setAppointment(storageInfo)
        
    }
    
    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <form onSubmit={handleForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" name='fName' placeholder="First Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Least Name</span>
          </label>
          <input type="text"  name='lName' placeholder="Least Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Appointment Date</span>
          </label>
          <input type="date" name='date' placeholder="Appointment Date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input type="text" name='address' placeholder="Address" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type='submit' className=" btn btn-primary">Make Appointment</button>
        </div>
      </form>
                </div>
                
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    );
};

export default Modal;