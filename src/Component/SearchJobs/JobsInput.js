import React from 'react'
import "./JobsInput.css";
const JobsInput = () => {
    return (
        <div className='home-part3'>
            <input type="text" placeholder='Search Keyword' />
            <select>
                <option>Location</option>

            </select>
            <button type="button" class="btn btn-success">Find Jobs</button>
        </div>
    )
}

export default JobsInput