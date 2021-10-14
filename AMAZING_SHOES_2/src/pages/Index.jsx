import "../App.css";
import logo from "../media/logo_trans2.png";
import fondo from "../media/fondo.jpg";
import Logging from "../components/Logging.jsx";
import logo2 from "../media/logo_tienda.png";
import { Link } from 'react-router-dom';

function Index() {
  return (
    <div>
      <header>
        <img src={logo} alt="Logotipo" className="logo_nav" />
        <nav className="container">
          <ul>
            <li>
              <Link to="login">Ingresar</Link>
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

export default Index;
