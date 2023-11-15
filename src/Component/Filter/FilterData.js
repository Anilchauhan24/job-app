import React, { Component } from 'react'
import FilterDashboard from "./FilterRating";


const url = "http://localhost:5000/bestJob";
export default class FilterData extends Component {
    constructor() {
        super();
        this.state = {
            jobData: "",
        }
    }
    render() {
        return (
            <div>
                <FilterDashboard newData={this.state.jobData} />
            </div>
        )
    }
    componentDidMount() {
        fetch(`${url}`, { method: "Get" })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ jobData: data })

            })
    }
}
