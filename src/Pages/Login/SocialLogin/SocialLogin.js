import React from 'react';
import google from '../../../Images/google.png'
import facebook from '../../../Images/fb.png'
import github from '../../../Images/github.png'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorElement;
    if(loading || loading1){
        return <Loading></Loading>
    }

    if (error || error1) {
         errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
          </div>
       
      }
      if(user || user1){
        navigate('/home')
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
            <div style={{height:'1px'}}className='bg-secondary w-50'></div>
            <p className='mt-2 px-2'>or</p>
            <div style={{height:'1px'}}className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={()=> signInWithGoogle()} className='btn btn-secondary w-50 d-block mx-auto'>
                    <img style={{width:'24px'}} src={google} alt="" />
                    <span className='ps-2 '>Google Sign In</span>
                </button>
                <button className='btn btn-secondary w-50 d-block mx-auto my-3'>
                    <img style={{width:'24px'}} src={facebook} alt="" />
                    <span className='ps-2 '>Facebook Sign In</span>
                </button>
                <button onClick={()=>signInWithGithub() } className='btn btn-secondary w-50 d-block mx-auto'>
                    <img style={{width:'24px'}} src={github} alt="" />
                    <span className='ps-2 '>Github Sign In</span>
                </button>
            </div>
        </div>

    );
};

export default SocialLogin;