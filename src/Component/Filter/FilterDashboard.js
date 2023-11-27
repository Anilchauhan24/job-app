
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FilterDashboard.css";
const FilterDashboard = () => {
    const [data, setData] = useState([]);
    const [matchData, setMatchData] = useState("");
    const [updateData, setUpdateData] = useState([]);
    const [clickData, setClickData] = useState(null);
    const [salaryRange, setSalaryRange] = useState(1000000)
    const [showFullTime, setShowFullTime] = useState(true);
    const [showPartTime, setShowPartTime] = useState(true);

    useEffect(() => {
        const getData = 'http://localhost:5000/bestJob';

        fetch(getData)
            .then((response) => response.json())
            .then((data) => {
                setUpdateData(data)
                setData(data);
            })
            .catch((err) => { console.log(err) })
    }, []);


    const handleChange = (event) => {
        const matchData = event.target.value.toLowerCase()
        setMatchData(matchData);

        const searchedJob = data.filter((item) => item.company_name.toLowerCase().includes(matchData))

        setUpdateData(searchedJob)

    }


    const handleClickData = (itemId) => {

        const clickedData = data.find((item) => item._id === itemId);
        setClickData(clickedData)


    };


    const highestSalary = () => {
        const sortedData = [...data].sort((a, b) => b.salary - a.salary);
        setUpdateData(sortedData);

    };

    const lowestSalary = () => {
        const sortedData = [...data].sort((a, b) => a.salary - b.salary);
        setUpdateData(sortedData);
    };

    const handleSalaryRangeChange = (event) => {
        const newSalaryRange = parseInt(event.target.value, salaryRange);
        setSalaryRange(newSalaryRange);


        const filteredData = data.filter((item) => item.salary <= newSalaryRange);
        setUpdateData(filteredData);

        const filteredAndSelectedData = filteredData.filter((item) => {
            return (showFullTime && item.jobType === 'full-time') || (showPartTime && item.jobType === 'part-time');
        });

        setUpdateData(filteredAndSelectedData);


    };

    const handleFullTimeChange = (event) => {
        const newData = (event.target.value.showFullTime)
        setShowFullTime(newData);
    };




    const handlePartTimeChange = () => {
        setShowPartTime(!showPartTime);
    };

    return (
        <div className='FilterDashboard'>

            <div className='Left-dashboard' id="Left-dashboard">
                <div className='left-dashboard-line'>
                    <div className='space'>
                        <h4>Filter</h4>
                        <hr />
                        <p >Sort By</p>
                        <input type="radio" id="html" name="Most Recent" value="100" onChange={lowestSalary} />
                        <label for="html">Lowest</label>
                        <br />
                        <input type="radio" id="html" name="Most Recent" value="100000" onChange={highestSalary} />
                        <label for="html">Highest</label>

                        <p >Salary Range</p>
                        <input type="range" id="salaryRange" min-value="100" max-value={salaryRange} onChange={handleSalaryRangeChange} />
                        <p>Job Type</p>
                        <input type="checkbox" id="box1" value="full-time" checked={showFullTime} onChange={handleFullTimeChange} />
                        <label for="Full-Time">Full-Time</label>
                        <br />
                        <input type="checkbox" id="box1" value="part-time" checked={showPartTime} onChange={handlePartTimeChange} />
                        <label for="Part-Time">Part-Time</label>
                        <br />
                        <p>Experience</p>
                        <input type="checkbox" id="box1" value="full-type" />
                        <label for="html">Fresher</label>
                        <br />
                        <input type="checkbox" id="box1" value="full-type" />
                        <label for="html">Experience</label>
                    </div>


                </div>
            </div>
            <div className="right-dashboard" id="right-dashboard">
                <div className='input-box'>
                    <input id="input-box" type="text" placeholder='Ui/UX Designer' value={matchData} onChange={handleChange} />
                    <button>Search</button>
                </div>
                <div className='content-cards' id="content-cards">
                    {updateData.map(item => (
                        <div className='box1 box' key={item._id}>
                            <h6>{item.job_name}</h6>
                            <span>{item.company_name}</span>
                            <ul id="linnks">
                                <li>{item.work}</li>
                                <li>{item.work_Two}</li>
                                <li>Full-time</li>
                            </ul>
                            <p className="box-item">Salary: Rs-{item.salary}</p>
                            <p className="box-item">joining:{item.joining}</p>

                            <Link to={`/id/${item._id}`} onClick={() => handleClickData(item._id)}>
                                <button>Apply Now</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {clickData && (
                <div>
                    <h2>Job Name:{clickData.job_name}</h2>
                    <p className="h6">Type of work:{clickData.work}</p>
                    <p className="h6">Salary:{clickData.salary}</p>
                    <p className="h6">joining:{clickData.joining}</p>
                    <p className="h6">Work:{clickData.work}</p>
                </div>
            )}
        </div >

    )
}

export default FilterDashboard;