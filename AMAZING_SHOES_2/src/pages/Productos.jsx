import "../App.css";
import fondo from "../media/fondo.jpg";
import { Link } from "react-router-dom";
import React, { Fragment, useState } from "react";

const Productos = () => {

  const [datos, setDatos] = useState({
    descripcion: "",
    precio: ""
  });

  const [datosFinal, setDatosFinal] = useState({
    descripcionFinal: "",
    precioFinal: ""
  });


  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + datos.descripcion + " " + datos.precio);

    setDatosFinal({
    descripcionFinal: datos.descripcion,
    precioFinal: datos.precio
    });
  };


  return (
    <Fragment>
      <div id="fondologin">
        <img src={fondo} alt="fondo pagina" className="imgfondo" />
      </div>
      <div id="formulario">
        <form onSubmit={enviarDatos}>
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
              className="form-control"
              onChange={handleInputChange}
              name="descripcion"
            ></input>
            <label for="precio">
              <b>Precio Unitario del Producto</b>
            </label>
            <input
              type="text"
              placeholder="Ingresa el precio"
              className="form-control"
              onChange={handleInputChange}
              name="precio"
            ></input>

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
        </form>
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
                <td>{datosFinal.descripcionFinal}</td>
                <td>{datosFinal.precioFinal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Productos;
