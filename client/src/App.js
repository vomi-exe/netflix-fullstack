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
  Navigate
} from "react-router-dom";

function App() {

  const user = true;

  return (
    <>
      <Router >
        <div>
          <Switch>
            <Route exact path="/" element={user ? <Home /> : <Navigate to="/register" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/login" element={<Login />} />
            {user ? (
              <>
                <Route path="/movies" element={<Home type="movie" />} />
                <Route path="/series" element={<Home type="series" />} />
                <Route path="/watch" element={<Watch />} />
              </>
            ) : <Navigate to="/register" />}
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
