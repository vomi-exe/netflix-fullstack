import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./Pages/Home";
import "./app.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserList from "./Pages/UserList";
import User from "./Pages/User";
import Newuser from "./Pages/NewUser";
import Productlist from "./Pages/ProductList";
import Product from "./Pages/Product";
import NewProduct from "./Pages/NewProduct";
import Login from "./Pages/login/Login.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import ListList from "./Pages/listList/ListList";
import List from "./Pages/list/List";
import Newlist from "./Pages/newList/NewList";

function App() {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path="/login"> {user ? <Redirect to="/" /> : <Login />}</Route>
        {user ? (<>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/users" exact>
              <UserList />
            </Route>
            <Route exact path="/users/newuser">
              <Newuser />
            </Route>
            <Route exact path="/users/:userId">
              <User />
            </Route>
            <Route path="/movies" exact>
              <Productlist />
            </Route>
            <Route path="/movies/:movieId">
              <Product />
            </Route>
            <Route exact path="/create">
              <NewProduct />
            </Route>
            <Route exact path="/lists" >
              <ListList />
            </Route>
            <Route exact path="/lists/:listId">
              <List />
            </Route>
            <Route exact path="/newlist">
              <Newlist />
            </Route>
          </div>
        </>)
          : <Redirect to="/login" />}
      </Switch>
    </Router >
  );
}

export default App;
