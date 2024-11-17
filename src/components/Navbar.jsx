import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='md:flex justify-between items-center text-blue-900 py-3'>
            <div className='font-bold'>
                <h2 className='text-3xl'>TEETH WIZARD</h2>
            </div>
            <ul className='flex space-x-6'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/allTreatment'>All Treatment</NavLink>
                <NavLink to='/appointment'>My Appointment</NavLink>
                <NavLink to='/profile'>Profile</NavLink>

            </ul>
            <div>
                <NavLink to='/register'>Login</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;