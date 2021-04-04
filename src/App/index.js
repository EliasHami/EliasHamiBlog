import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './style.css';
// import Header from '../header'
import Nav from '../nav'
import LandingPage from '../landingPage'
import Footer from '../footer'
import Blog from "../blog"
import Post from "../post"
import FourOhFour from "../four-oh-four"

function App() {
  return (
    <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
            {/* <Route exact path="/" component={Header}/> */}
            <header>
              <Nav/>
            </header>
            <main>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/blog" component={Blog}/>
                <Route exact path="/blog/posts/:id" component={Post}/>
                <Route component={FourOhFour} />
              </Switch>
            </main>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
