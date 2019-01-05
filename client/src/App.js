import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Saved from './pages/saved';
import Search from './pages/search';
import Nav from './components/Nav'
import './App.css';

function App() {
    return (
      <Router>
        <div>
          <Nav />
          <div className="jumbotron text-center col-md-10 mx-auto">
          <h1>Google Books React Search</h1>
          <h4>Search for books and save them for later!</h4>
          </div>
          <Switch>
            <Route exact path="/" component ={Search}/>
            <Route exact path="/saved" component = {Saved}/>
            <Route path ="*" component = {Search}/>
          </Switch>
        </div>
      </Router>
    )
}

export default App;