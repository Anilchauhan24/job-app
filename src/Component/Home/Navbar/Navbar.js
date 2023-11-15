// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase';

const Navbar = ({ onLoad }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check if the user is logged in
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

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">
                        Find Jobs
                    </a>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
                            <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                                <li><Link to="/privacy"><a class="dropdown-item text-danger" href="#">Privacy</a></Link></li>
                                <li><Link to="/about"><a class="dropdown-item text-danger" href="#">About us</a></Link></li>

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
                            {/* ... other navigation links */}
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
                    <button type="button" className="btn btn-success">
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









// import { Link } from "react-router-dom";
// const Navbar = ({ onLoad }) => {
//     return (
//         <>


//             <nav className="navbar navbar-expand-lg navbar-light bg-primary">
//                 <div className="container-fluid">
//                     <a className="navbar-brand text-light" href="#">Find Jobs</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon" />
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <Link to="/" className="nav-link active text-light" aria-current="page" href="#">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/BrowseJobs" className="nav-link text-light" href="#">BrowseJobs</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/pages" className="nav-link text-light" href="#">Pages</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="blog" className="nav-link text-light" href="#">Blog</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="contact" className="nav-link text-light" href="#">Contact</Link>
//                             </li>
//                         </ul>
//                     </div>
//                     <button type="button" className="btn btn-primary">Log in</button>

//                     <button type="button" className="btn btn-success">Post a Job</button>
//                     <button type="button" className="btn btn-danger" onClick={onLoad}>Change Theme</button>

//                 </div>
//             </nav>


//         </>


//     )
// }
// export default Navbar;