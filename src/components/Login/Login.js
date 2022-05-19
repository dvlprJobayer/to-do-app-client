import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user, gUser, navigate, from]);

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='container mx-auto mt-8'>
            <h1 className='text-center text-4xl text-success'>Login</h1>
            <div className='mx-auto mt-10 pb-4 card max-w-md bg-base-100 shadow-xl'>
                <form onSubmit={handleLogin}>
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
                        <input className="btn btn-success text-white" type="submit" value="Login" />
                    </div>
                    <p className='text-center'>Don't have an Account? <Link className='text-success' to="/signup">Create New Account</Link></p>
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

export default Login;