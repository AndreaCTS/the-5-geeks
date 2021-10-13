import "./App.css";
import Index from "./pages/Index";


import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Login from "./pages/Login";




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/index">
            <Index/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
