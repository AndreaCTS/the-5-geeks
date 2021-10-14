import "../App.css";
import fondo from "../media/fondo.jpg";
import { Link } from 'react-router-dom';

function BuscarPro() {
    return (
        <div>
            <div id="fondologin">
                <img src={fondo} alt="fondo pagina" className="imgfondo" />
            </div>
            <div id="formulario">
                <form action="action_page.php" method="post">

                    <div className="imgcontainer">
                        <h1>Buscar Productos</h1>
                    </div>

                    <div className="container">
                        <input type="text" placeholder="Ingresa tu busqueda" name="uname" required />

                        <button type="submit" id="logearse">Buscar</button>

                    </div>

                    <div className="container" className="abajo" >
                        <Link to="/administrador"><button type="button" className="cancelbtn">Regresar</button></Link>
                        <Link to="/#"><button type="button" className="boton_derecho">Mostrar Todos</button></Link>
                    </div>

                </form>
            </div>
        </div>


    );

}

export default BuscarPro;