import "../App.css";
import logo2 from "../media/logo_tienda.png";
import { Link } from "react-router-dom";
import React, { Fragment, useState } from "react";

function Login() {
  return (
    <Fragment>
      <div className="fondologin">
        <div className="formulario">
          <form action="action_page.php" method="post">
            <div className="imgcontainer">
              <img src={logo2} alt="Avatar" class="avatar" />
            </div>

            <div className="container">
              <label for="uname">
                <b>Usuario</b>
              </label>
              <input
                type="text"
                placeholder="Ingresa el usuario"
                name="uname"
                required
              />

              <label for="psw">
                <b>Contraseña</b>
              </label>
              <input
                type="password"
                placeholder="Ingresa la Contraseña"
                name="psw"
                required
              />

              <button type="submit" id="logearse">
                Loguearse
              </button>

              <label>
                <input type="checkbox" checked="checked" name="remember" />{" "}
                Rocordarme
              </label>
              <label>
                <span className="oc">
                  {" "}
                  <a href="#">Olvidaste la Contraseña?</a>
                </span>
              </label>
            </div>

            <div className="container" className="abajo">
              <Link to="/">
                <button type="button" class="cancelbtn">
                  Regresar
                </button>
              </Link>
              <span className="psw">
                {" "}
                <Link to="registro">Registrarse</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
      <footer className="piedepagina">
        <div>
          Todos los derechos reservados | Misión-Tic 2022 | THE-FIVE-GEEKS
        </div>
      </footer>
    </Fragment>
  );
}

export default Login;
