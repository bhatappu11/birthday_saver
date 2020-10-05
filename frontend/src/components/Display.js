import React,{Component} from 'react';
import axios from 'axios';
import './Display.css';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';

class Display extends React.Component {
    constructor(props) {
		super(props)

		this.state = {
            posts: []
		}
    }
    displaydata=(posts)=>{
        return  (
            <div className="rstyle">
            {posts.map((detail, index)=>{
                return <div>
                    <h4>{ detail.name }</h4>
                    <p>{ detail.dob }</p>
                    </div>
            })}
            </div>
        )
    }
    getdbdata =()=>{
        axios.get('http://localhost:3001/gdata').then((response) =>{
            const data=response.data;
            console.log(data);
            this.setState({posts: data});
            console.log("data received");
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    render(){
        const {posts}=this.state
        return(
            <div>
                <button onClick={this.getdbdata}>Display</button>
                {this.displaydata(this.state.posts)}
            </div>
        );
    }
}


export default Display;