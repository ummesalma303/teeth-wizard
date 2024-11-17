import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {newUser,setUser}=useContext(AuthContext)
    const handleForm = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log(name,password ,email)
        newUser(email,password)
        .then(result=>{
            // console.log(result.user);
        })

    }
    return (
        <div>
           <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <form onSubmit={handleForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type='submit' className=" btn btn-primary">Register</button>
        </div>
      </form>
                </div>  
        </div>
    );
};

export default Register;