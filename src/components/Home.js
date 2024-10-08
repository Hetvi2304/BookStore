import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Book Exchange!</h1>
            <p className="mb-4">Share and exchange your books with others.</p>
            <Link to="/register" className="bg-blue-500 text-white p-2 rounded mb-2">Register</Link>
            <Link to="/login" className="bg-green-500 text-white p-2 rounded">Login</Link>
        </div>
            
      </>
    );
};

export default Home;
