import logo from './media/logo_trans2.png';
import './App.css';
import fondo from "./media/fondo.jpg";
function App() {
  return (
    <div className="App" >

      <header>
        <img src={logo} alt="Logotipo" className="logo_nav" />
        <nav className="container">
          <ul>
            <li><a href="login.html">Logearse</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <div>
        <img src={fondo} alt="fondo pagina" className="imgfondo" />
      </div>
      <footer className="piedepagina">
        <div>Todos los derechos reservados | Misión-Tic 2022 | THE-FIVE-GEEKS</div>
      </footer>

    </div>
  );
}

export default App;
