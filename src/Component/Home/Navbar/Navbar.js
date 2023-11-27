
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase';
import "./Navbar.css";

const Navbar = ({ onLoad, onPostJobClick }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [visible, setVisible] = useState(false);

    auth.onAuthStateChanged((user) => {
        setIsLoggedIn(!!user);
    });

    const handleLogout = async () => {
        try {
            // Sign out with Firebase
            await auth.signOut();
            console.log('User logged out successfully!');
        } catch (error) {
            console.error('Error logging out:', error.message);
        }
    };

    const handlePostJobClick = () => {
        console.log('Post Job button clicked');
        if (typeof onPostJobClick === 'function') {
            onPostJobClick();
        }
    };

    const handleNav = () => {
        setVisible(!visible);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">
                        Find Jobs
                    </a>
                    <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${visible ? 'visible' : ''}`} onClick={handleNav}>
                        <li class="nav-item">
                            <Link to="/" className="nav-link active text-light" aria-current="page" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/browseJobs"><a className="nav-link text-light" href="#">BrowseJobs</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/privacy"><a className="nav-link active text-light " aria-current="page" href="#">Pages</a> </Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/contact"><a className="nav-link active text-light" aria-current="page" href="#">Contact</a></Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                                <li><Link to="/privacy"><a className="dropdown-item text-danger" href="#">Privacy</a></Link></li>
                                <li><Link to="/about"><a className="dropdown-item text-danger" href="#">About us</a></Link></li>

                            </ul>
                        </li>

                    </ul>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                        </ul>
                    </div>
                    {isLoggedIn ? (
                        <button type="button" className="btn btn-danger" onClick={handleLogout}>
                            Log Out
                        </button>
                    ) : (
                        <Link to="/login" className="btn btn-primary">
                            Log In
                        </Link>
                    )}
                    <button type="button" className="btn btn-success" onClick={handlePostJobClick}>
                        Post a Job
                    </button>
                    <button type="button" className="btn btn-danger" onClick={onLoad}>
                        Change Theme
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
