import React,{ Component } from 'react'
import './AddDOB.css';
//import './Store';
import Calendar from "react-calendar";
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import { Button} from 'react-bootstrap';
import{BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
//import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import axios from 'axios';

class AddDOB extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
            name: '',
            date: new Date(),
		}
	}
	
	handlenameChange = event => {
		this.setState({
			name: event.target.value
		})
	}
    
	onChange = date => this.setState({ date })

	handleSubmit = event => {
		event.preventDefault()
		const data={
			name: this.state.name,
			dob: this.state.date.toLocaleDateString(),
		} 
		axios.post('http://localhost:3001/add', data,{
			headers: {
				'Content-Type': 'application/json',
				'Access-control-allow-origin': '*'
			}
		})
        .then(response=>console.log(response)).catch(err=>console.log(err));
	}


	render() {
        const { name,date } = this.state
		return (
            <div>
            	<form className='headerform' onSubmit={this.handleSubmit}>
                <div className='form-style'>
				<div>
					<label>Name </label>
					<input
						type="text"
						value={name}
						onChange={this.handlenameChange}
					/>
				</div>
				<div>
					<label>Date of birth</label>
					<Calendar onChange={this.onChange} value={this.state.date} />
                        {console.log(date)}
                        {date.toString()}
				</div>
                <button type="submit">Submit</button>
                <a href='./Display'>Go to display to check the events</a>
                </div>
			</form>
            </div>
		);
	}
}

export default AddDOB;