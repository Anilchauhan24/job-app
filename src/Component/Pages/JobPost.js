import React, { useState } from 'react';
import axios from 'axios';

function PostDataComponent() {
    const [postData, setPostData] = useState('');

    const handleInputChange = (e) => {
        setPostData(e.target.value);
    };

    const handlePostData = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/post-data', { data: postData });
            console.log('Server response:', response.data);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    return (
        <div>
            <h2>Post Data Component</h2>
            <textarea value={postData} onChange={handleInputChange} />
            <button onClick={handlePostData}>Post Data</button>
        </div>
    );
}

export default PostDataComponent;
