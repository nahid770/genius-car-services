import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div id='services' className='container p-0'>
           
          <div className="row  m-0 p-0">
          <h3 className='text-info my-5 text-center fs-1 '> Service</h3>
           <div className='services-container m-0 col-sm-10 col-lg-12 col-md-10 mx-auto'>
           {
                services.map(service =><Service
                key={service._id}
                service = {service}
                ></Service>)
            }
           </div>
          </div>
        </div>
    );
};

export default Services;