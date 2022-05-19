import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';

const Navbar = () => {

    const [user, loading] = useAuthState(auth);

    const menuItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-task">Add Task</Link></li>
        <li><Link to="/all-task">All Task</Link></li>
        {
            user ?
                <button onClick={() => signOut(auth)}>Logout</button> :
                <li><Link to="/login">Login</Link></li>
        }
    </>

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">To Do App</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;