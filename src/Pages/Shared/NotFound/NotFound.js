import React from 'react';
import img from '../../../Images/404.jpg'

const NotFound = () => {
    return (
        <div className='text-center mt-5'>
           

            <img className='w-25' src={img} alt="" />
            <h2 className='mt-1 text-danger'>Page Not Found! </h2>
            
        </div>
    );
};

export default NotFound;