import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './style.css';
import Header from '../header'
import Nav from '../nav'
import LandingPage from '../landingPage'
import Footer from '../footer'
import Blog from "../blog"
import Post from "../post"
import FourOhFour from "../four-oh-four"

function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path="/" component={Header}/>
            <Nav/>
            <Route exact path="/" component={LandingPage} />
            <Switch>
              {/* <Route exact path="/" component={Blog}/> */}
                {/* <Blog firebase={Firebase} /> */}
              {/* <Route exact path="/posts/:id" component={Post}/> */}
                {/* <Post firebase={Firebase} /> */}
              <Route component={FourOhFour} />
            </Switch>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
