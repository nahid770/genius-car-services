import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetails = () => {
    const {serviceId}= useParams()
    const [service] = useServiceDetail(serviceId);
    // const [service, setServices] = useState({});
    // useEffect(()=>{
    //     const url = `http://localhost:5000/service/${serviceId}`
    //     console.log(url)
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=> setServices(data))
    // },[])
    return (
        <div>
            <h2>You are about to book {service.name}</h2>

            <div className='text-center'>
                <Link to={`/checkout${serviceId}`}>
                <button className='btn btn-primary'>Proceed checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;