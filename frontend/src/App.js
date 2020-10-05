import React,{component} from 'react';
import{BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AddDOB from './components/AddDOB';
import Display from './components/Display';
import Store from './components/Store';

function App() {
  return (
    <div>
    <Router>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/AddDOB' component={AddDOB}/>
    <Route exact path='/Display' component={Display}/>
    <Route exact path='/Store' component={Store}/>
    </Switch>
    </Router>
   </div>
  );
}

export default App;
