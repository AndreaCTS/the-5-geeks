import "../App.css";
import logo from "../media/logo_trans2.png";
import fondo from "../media/fondo.jpg";
import Logging from "../components/Logging.jsx";
import logo2 from "../media/logo_tienda.png";
import { Link } from 'react-router-dom';

function Administrador() {
    return (
        <div>
            <header>
                <img src={logo} alt="Logotipo" className="logo_nav" />
                <nav className="container">
                    <ul>
                        <li>
                            <Link to="/">Salir</Link>
                        </li>
                        <li>
                            <Link to="#">Sobre Nosotros</Link>
                        </li>
                        <li>
                            <Link to="login">Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <div>
                    <img src={fondo} alt="fondo pagina" className="imgfondo" />
                </div>
                <div class="lateral">
                    <h2>Menú Administrador</h2>
                    <ul>
                        <li><a href="#">REGISTRAR VENTA</a></li>
                        <li><a href="#">LISTAR VENTAS</a></li>
                        <li><a href="#">BUSCAR VENTA</a></li>
                        <li><a href="#">ACTUALIZAR VENTA</a></li>
                        <li><a href="#">AGREGAR PRODUCTO</a></li>
                        <li><a href="#">LISTAR PRODUCTO</a></li>
                        <li><a href="#">BUSCAR PRODUCTO</a></li>
                        <li><a href="#">EDITAR PRODUCTO</a></li>
                        <li><a href="#">VER USUARIOS</a></li>
                        <li><a href="#">EDITAR USUARIOS</a></li>
                    </ul>
                </div>


            </main>

            <footer className="piedepagina">
                <div>
                    Todos los derechos reservados | Misión-Tic 2022 | THE-FIVE-GEEKS
                </div>
            </footer>
        </div>
    );
}

function Prueba() {
    return (
        <div>
            <img src={logo2} alt="Avatar" class="avatar" />
        </div>
    );
}

export default Administrador;