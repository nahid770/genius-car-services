import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading]= useAuthState(auth)
    const location = useLocation()
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/login" state = {{from:location}} replace></Navigate>
    }
   
    if(user.providerData[0]?.providerId === 'password' && !user.emailVerified){
        
        return <div>
            <h5 className='text-success text-center mt-5'>Please varify your email</h5>
            <button
            className='btn btn-info rounded text-white mx-auto d-block mt-4'
            onClick={async () => {
            await sendEmailVerification();
            toast('Varificaiton Email Send!');
        }}
      >
       Send Verify email
      </button>
      <ToastContainer />
        </div>
    }
    
    return children;
};

export default RequireAuth;