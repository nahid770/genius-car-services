import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Chceckout = () => {
    const {serviceId} = useParams()
    const [service] = useServiceDetail(serviceId)
    const [user] = useAuthState(auth);
    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order ={
            email : user.email,
            service: service.name,
            serviceId : serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
        .then(response =>{
            const {data} = response;
           if(data.insertedId){
            toast('Your order is booked!');
            event.target.reset();
           }
            
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h3>Please Order: {service.name}</h3>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2 rounded ps-2' value={user?.displayName} type="text" name="name" id="" placeholder='your name' required readOnly disabled/>
                <input className='w-100 mb-2 rounded ps-2' value={user?.email} type="text" name="email" id="" placeholder='your email' required readOnly disabled/>
                <input className='w-100 mb-2 rounded ps-2' value={service.name} type="text" name="service" id="" placeholder='service' required/>
                <input className='w-100 mb-2 rounded ps-2' type="text" name="phone" id="" placeholder='phone number' required/>
                <input className='w-100 mb-2 rounded ps-2' type="text" name="address" id="" placeholder='address' required autoComplete='off'/>
                <input className='btn btn-primary rounded ps-2 text-white' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Chceckout;