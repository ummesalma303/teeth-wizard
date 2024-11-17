import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <nav>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </nav>
        </div>
    );
};

export default MainLayout;