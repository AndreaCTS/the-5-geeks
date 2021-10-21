import "../App.css";
import fondo from "../media/fondo.jpg";
import { Link } from "react-router-dom";
import React, {Fragment, useState} from 'react';

let nombre="";
let precio="";

function Productos() {
  return (
    <div>
      <div id="fondologin">
        <img src={fondo} alt="fondo pagina" className="imgfondo" />
      </div>
      <div id="formulario">
        <form action="action_page.php" method="post" action="/productos">
          <div className="imgcontainer">
            <h1>Agregar Nuevo Producto</h1>
          </div>

          <div className="container">
            <label for="descripcion">
              <b>Descripción del Producto</b>
            </label>
            <input
              type="text"
              placeholder="Ingresa la descripción"
              name="descripcion_producto"
              id= "dp"
              required
            />

            <label for="precio">
              <b>Precio Unitario del Producto</b>
            </label>
            <input
              type="text"
              placeholder="Ingresa el precio"
              name="precio_producto"
              id="pp"
              required
            />

            <button type="submit" id="logearse">
              Agregar Producto
            </button>
          </div>
          
          <div className="container" className="abajo">
            <Link to="/administrador">
              <button type="button" className="cancelbtn">
                Regresar
              </button>
            </Link>
          </div>
          <div className="container">
            <table className="table">
              <caption>
                <h1>Producto Agregado</h1>
              </caption>
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">DESCRIPCIÓN</th>
                  <th scope="col">PRECIO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>producto 1</td>
                  <td>10000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}

function agregar(){
    let dp=document.getElementById("dp").ariaValueMax;
    let pp=document.getElementById("pp").ariaValueMax;
    console.log(dp);
    console.log(pp);
}




export default Productos;
