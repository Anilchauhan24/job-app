

//App.js
import React from 'react';


import { BrowserRouter as Router, Link } from 'react-router-dom';

function JobDetail() {


    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>


            </div>
        </Router>
    );
}

export default JobDetail;
