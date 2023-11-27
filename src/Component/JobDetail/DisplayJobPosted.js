// YourParentComponent.js or App.js
import React, { useState } from 'react';
import JobPostData from './JobPostData';
import Navbar from './Navbar';

const DisplayJobPosted = () => {
    const [isJobPostVisible, setIsJobPostVisible] = useState(false);

    const handlePostJobClick = () => {
        setIsJobPostVisible((prevState) => {
            console.log('Previous State:', prevState);
            console.log('Updated State:', !prevState);
            return !prevState;
        });
    };

    return (
        <div>
            <Navbar onPostJobClick={handlePostJobClick} />
            <JobPostData isJobPostVisible={isJobPostVisible} />

        </div>
    );

};

export default DisplayJobPosted;
