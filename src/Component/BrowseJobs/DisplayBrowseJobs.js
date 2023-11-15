import React from 'react'
import "./DisplayBrowseJobs.css";
import Footer from '../Footer/Footer';
const DisplayBrowseJobs = (props) => {


    const handleApply = () => {

        let greetings = '';
        const now = new Date();
        const hour = now.getHours();
        if (hour >= 5 && hour < 12) {
            greetings = "Good Morning!";
        }
        if (hour >= 12 && hour < 17) {
            greetings = "Good Afternoon!";
        }
        if (hour >= 17 && hour < 20) {
            greetings = "Good Evening!";
        }
        else {
            greetings = "Good Night!";
        }

        const showUp = prompt("Please Enter your Name");

        alert(`Hello ${showUp} ${greetings} We are sorry! but this is just a dummy DATA`);

        setTimeout(value, 10000);
        function value() {
            alert("If you wish to apply we will message you")
        }
    }



    const newData = ({ data }) => {
        if (data) {
            return data.map((item) => {
                return (
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={item.job_image} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.job_name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p>Salary:${item.salary}</p>
                            <a href="#" className="btn btn-primary" onClick={handleApply}>Apply now</a>
                        </div>
                    </div>

                )
            })
        }
    }
    return (
        <>
            <div className='flexBox'>
                {newData(props)}

            </div>
            <div>

                <Footer />
            </div>
        </>
    )
}

export default DisplayBrowseJobs