import React, { Component } from 'react'
import "./BrowseJobs.css";
import banner from "../../Assets/bannerone.avif";
import Navbar from '../Home/Navbar/Navbar'
import DisplayBrowseJobs from './DisplayBrowseJobs';

const url = "http://localhost:5000/best";

export default class BrowseJobs extends Component {

    constructor() {
        super();
        this.state = {
            jobDescription: '',
        }
    }



    render() {
        return (
            <div>
                <Navbar />
                <div className='containerOne'>
                    <div className='box-one'>
                        <img src={banner} />

                    </div>
                    <hr />
                    <DisplayBrowseJobs data={this.state.jobDescription} />
                </div>

            </div>
        )
    }

    componentDidMount() {
        fetch(`${url}`, { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ jobDescription: data })
            })

    }
}
