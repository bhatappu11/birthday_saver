import React,{Component} from 'react'
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div>
            <div className="App">
            <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <h1 className="App-title">Hola, Welcome!</h1>
            </header>
            <p className="App-intro">
            <a href='./AddDOB'className='App-link'>
                Let's get started
            </a>
            </p>
            </div>
            </div>
        );
    }
}

export default Home;