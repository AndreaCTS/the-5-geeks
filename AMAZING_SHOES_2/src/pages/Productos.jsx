import "../App.css";
import fondo from "../media/fondo.jpg";
import { Link } from 'react-router-dom';

function Productos() {
    return (
        <div>
            <div id="fondologin">
                <img src={fondo} alt="fondo pagina" className="imgfondo" />
            </div>
            <div id="formulario">
                <form action="action_page.php" method="post">

                    <div className="imgcontainer">
                        <h1>Agregar Nuevo Producto</h1>
                    </div>

                    <div className="container">
                        <label for="uname"><b>Descripción del Producto</b></label>
                        <input type="text" placeholder="Ingresa la descripción" name="uname" required />

                        <label for="Precio"><b>Precio Unitario del Producto</b></label>
                        <input type="text" placeholder="Ingresa el precio" name="uname" required />

                        <button type="submit" id="logearse">Agregar Producto</button>

                    </div>

                    <div className="container" className="abajo" >
                        <Link to="/administrador"><button type="button" className="cancelbtn">Regresar</button></Link>
                    </div>

                </form>
            </div>
        </div>


    );

}

export default Productos;