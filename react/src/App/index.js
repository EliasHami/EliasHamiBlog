import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Firebase from 'firebase'
import firebaseConfig from '../firebase-config'
import './style.css';
import Header from '../header'
import Nav from '../nav'
import LandingPage from '../landingPage'
import Footer from '../footer'
import Blog from "../blog"
import Post from "../post"
import FourOhFour from "../four-oh-four"

// Firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path="/" component={Header}/>
            <Nav/>
            <Route exact path="/" component={LandingPage} />
            <Switch>
              <Route exact path="/blog">
                {/* <Blog firebase={Firebase} /> */}
                <Blog />
              </Route>
              <Route exact path="/posts/:id">
                {/* <Post firebase={Firebase} /> */}
                <Post />
              </Route>
              <Route component={FourOhFour} />
            </Switch>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
