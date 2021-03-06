import React, {Component, useState} from 'react';
import Results from './Results';

const AWS_ENDPOINT = "https://783uqf6eeg.execute-api.us-west-1.amazonaws.com/prod/recruiter?company=";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {input: '', recruiters:[]};
    }
    
    handleChange = event  => {
        this.setState({input: event.target.value})
    }

    handleAPI = event => {
        const AWS_ENDPOINT_FINAL = AWS_ENDPOINT + this.state.input.charAt(0).toUpperCase() + this.state.input.slice(1).toLowerCase();
        fetch(AWS_ENDPOINT_FINAL)
        .then(response => response.json())
        .then(data => {
            console.log(data); //obj
            console.log(AWS_ENDPOINT_FINAL);
            this.setState({recruiters: data})
        })

        .catch(err => {
            console.log(err);
        })
    }

    //this.state.input for live user input
    render() {
        return (
        <div className="search-div" action="">
            <div></div>
            <input type="search" className="search-bar" placeholder="Type in a company name..." required value={this.state.input} onChange={this.handleChange}/>
            {/* <Link to='/results'> */}
            <button type="submit" id="Button" className="search-btn" onClick={this.handleAPI}/>
            {/* </Link> */}
            <i className="fa fa-search"></i>
            <div className="result-table">
                <Results recruiters={this.state.recruiters}></Results>
            </div>
            
            <svg className="ghost"></svg>

        </div>
        );
    }
}

export default SearchBar;


