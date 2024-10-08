import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Registration = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Handle registration logic
        console.log('Registered:', fullname);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleRegister}>
                <h2 className="text-xl font-bold mb-4">Register</h2>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="border p-2 mb-4 w-full"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 mb-4 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border p-2 mb-4 w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Register</button>
            <p className='pt-1'>Already have an account ? <Link to="/login" className="text-blue-500"> Login</Link></p>
            </form>
        </div>
    );
};

export default Registration;
