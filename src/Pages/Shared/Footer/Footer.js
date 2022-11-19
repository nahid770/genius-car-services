import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer text-center bg-secondary text-light '>
            <p className='mb-0'>copyright &copy; {year}</p>
        </div>
    );
};

export default Footer;