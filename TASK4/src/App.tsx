import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Course from './Components/Course';
import Timer from './Components/Timer';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NonVerbal from './Components/NonVerbal';
import Verbal from './Components/Verbal';
import English from './Components/English';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <div className="conatiner my-3">
          <Switch>
            <Route path="/about" >
              <About/>
            </Route>
            <Route path="/course" >
              <Course/>
            </Route>
            <Route path="/timer">
              <Timer/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            
            <Route path="/english">
              <English/>
            </Route>
            
            <Route path="/verbal">
              <Verbal/>
            </Route>
            <Route path="/nonverbal">
              <NonVerbal/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
            </Switch>
        </div>
      </Router>

</div>
  );
}

export default App;
