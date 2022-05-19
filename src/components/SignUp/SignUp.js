import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';

const SignUp = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);

    const handleSignUp = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user, gUser, navigate, from]);

    if (uError) {
        toast.error('Profile updated failed');
    }

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    return (
        <div className='container mx-auto mt-8'>
            <h1 className='text-center text-4xl text-success'>Sign Up</h1>
            <div className='mx-auto mt-10 pb-4 card max-w-md bg-base-100 shadow-xl'>
                <form onSubmit={handleSignUp}>
                    <div className="form-control w-full max-w-xs mx-auto mb-4">
                        <label className="label">
                            <span className="label-text">Name:</span>
                        </label>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs mx-auto mb-4">
                        <label className="label">
                            <span className="label-text">Email:</span>
                        </label>
                        <input name='email' type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs mx-auto mb-4">
                        <label className="label">
                            <span className="label-text">Password:</span>
                        </label>
                        <input name='password' type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs mx-auto mb-4">
                        <input className="btn btn-success text-white" type="submit" value="SignUp" />
                    </div>
                    <p className='text-center'>Already have an Account? <Link className='text-success' to="/login">Login</Link></p>
                </form>
                {error && <p className='text-red-500'>{error.message}</p>}
                <div className="flex flex-col w-full border-opacity-50 max-w-xs mx-auto mb-2">
                    <div className="divider">OR</div>
                </div>
                <div className="form-control w-full max-w-xs mx-auto mb-3">
                    <button onClick={() => signInWithGoogle()} className="btn">Continue with Google</button>
                </div>
                {gError && <p className='text-red-500'>{gError.message}</p>}
            </div>
        </div>
    );
};

export default SignUp;