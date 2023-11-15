import React, { useState, useEffect } from 'react';
import { auth } from '../../../firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const authInstance = getAuth();
        const unsubscribe = onAuthStateChanged(authInstance, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const handleLogin = async () => {
        try {
            const authInstance = getAuth();
            await signInWithEmailAndPassword(authInstance, email, password);
            console.log('User logged in successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };

    const handleSignUp = async () => {
        try {
            const authInstance = getAuth();

            if (!email || !password) {
                console.error('Email and password are required.');
                return;
            }

            await createUserWithEmailAndPassword(authInstance, email, password);
            console.log('User registered successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };

    return (
        <div>
            {user ? (
                <p>Welcome, {user.displayName}!</p>
            ) : (
                <>
                    <h1>Click here to login</h1>
                    <form>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button type="button" onClick={handleLogin}>
                            Login
                        </button>

                        <button type="button" onClick={handleSignUp}>
                            Sign Up
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Login;
