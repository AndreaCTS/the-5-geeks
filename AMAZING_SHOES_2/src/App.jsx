import "./App.css";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Administrador from "./pages/Administrador";
import Productos from "./pages/Productos";
import BuscarPro from "./pages/BuscarPro";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/registro">
            <Registro/>
          </Route>

          <Route path="/administrador">
            <Administrador/>
          </Route>

          <Route path="/productos">
            <Productos/>
          </Route>

          <Route path="/buscarpro">
            <BuscarPro/>
          </Route>

          <Route path="/">
            <Index/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
