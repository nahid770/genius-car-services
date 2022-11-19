import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../Shared/PageTitle/PageTitle';
import useToken from '../../hooks/UseToken';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user);
    const navigate  = useNavigate()
    const navigateLogin = (e) =>{
        e.preventDefault()
        navigate('/login')
    }
    if(loading || updating){
        return <Loading></Loading>
    }
    
    if(token){
        navigate('/home')
    };

    const handleRegister = async (e)=>{
        e.preventDefault();
        const displayName =  e.target.name.value;
        const email =  e.target.email.value;
        const password =  e.target.password.value;
        const agree = e.target.terms.checked
        
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName});
        alert('Updated profile');

        
    }
    return (
        <div >
            <PageTitle title="Register"></PageTitle>
            <h2 className='text-center mt-4 mb-4'> Register Your Account</h2>
      
        <form action="" onSubmit={handleRegister}>
            <input type="text" name="name" id=""  placeholder='your name'/>
            <input type="email" name="email" id="" placeholder='your emal'/>
            <input type="password" name="password" id="" placeholder='password'/>
            <input onClick={()=> setAgree(!agree)} type="checkbox" name="terms" id="terms" />
            <label className={`ms-2 ${agree ? '': 'text-danger'}`} htmlFor="terms"> Accept terms and conditions</label>
            <input disabled={!agree} className='btn btn-primary w-25 mx-auto mt-2 ' type="submit" value="Register" />
        </form>

    <p className='text-center mt-3'>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login now</Link></p>

    <div className='w-50 mx-auto'> 
    <SocialLogin></SocialLogin>
    </div>
        </div>  
    );
};

export default Register;