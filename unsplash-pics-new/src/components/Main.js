import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import App from './App';
import About from './About';
import PrivacyAndTerm from './PrivacyAndTerm';
import Detail from './Detail';
// import Intro from './Intro';



const MainPage = () => {


  return (
    <Router>
      <div>
        <nav style={{ position: 'absolute', display: "flex" }}>
          <ul>
            <li>
              <Link to="/home"><h3>Home</h3></Link>
            </li>
            <hr />
            <li>
              <Link to="/about"> <h3>About</h3></Link>
            </li>
            <hr />
            <li>
              <Link to="/privacy-and-terms"> <h3>Privacy and Terms </h3> </Link>
            </li>

            <hr />
          </ul>
        </nav>

        <Switch>
          {/* <Route path="/">
            <Intro />
          </Route> */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/privacy-and-terms">
            <PrivacyAndTerm />
          </Route>
          <Route path="/home">
            <App />
          </Route>
          <Route path={`/detail/:id`}>
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}





export default MainPage;