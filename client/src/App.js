import React from 'react';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import "./app.scss";
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router >
        <div>
          <Switch>
            <Route exact path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/watch" element={<Watch />} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
