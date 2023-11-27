import React, { useState } from 'react';

const JobPostData = ({ isJobPostVisible, onJobPost }) => {

    const [title, setTitle] = useState('');
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');

    const handlePostJob = () => {

        if (!title || !heading || !description) {
            alert('Please fill in all fields');
            return;
        }

        onJobPost({ title, heading, description });

        setTitle('');
        setHeading('');
        setDescription('');
    };

    return (
        <div style={{ display: isJobPostVisible ? 'block' : 'none' }}>

            <button onClick={handlePostJob}>Post Job</button>
        </div>
    );
};

export default JobPostData;
