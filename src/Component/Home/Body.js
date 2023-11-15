import React, { useState } from 'react';
import './Body.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Body() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleCheck = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleUploadFile = () => {
        if (selectedFile) {
            alert("Please wait! Your file is uploading");
            uploadFile(selectedFile);
        } else {
            alert('Please select a file before uploading');
        }
    };

    const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append('resume', file);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData);
            toast.success('File uploaded successfully');
            console.log('Server response:', response.data);
        } catch (error) {
            console.error('Error uploading resume:', error);
            toast.error('Error uploading file');
        }
    };

    return (
        <div className="job">
            <div className="left">
                <h2 className="text-light">4536 + Jobs Listed</h2>
                <p className="h2 text-light">Find your Dream Job</p>
                <p className="text-light">We provide online instant reply to get you a better job</p>
                <label>
                    <input type="file" id="file" onChange={handleCheck} />
                </label>
                <button type="button" className="btn btn-success" onClick={handleUploadFile}>
                    Upload your Resume
                </button>
            </div>
            <div className="right">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfr6Thf81p9hxftSDEbS4dznSbO9KLQ98g8-ZhigEUS99-p3Um3lEm4Ayodn3dB9ESM0Y&usqp=CAU"
                    alt="job"
                />
            </div>
        </div>
    );
}

export default Body;
