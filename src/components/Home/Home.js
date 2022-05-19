import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-normal mb-4 uppercase">To Do App</h1>
                    <Link to="/add-task" className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;