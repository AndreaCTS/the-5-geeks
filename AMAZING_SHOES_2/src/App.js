import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" background="fondo.jpg">
      <header>
        <img src="logo_trans2.png" alt="Logotipo" class="logo_nav" />
        <nav class="container">
          <ul>
            <li><a href="login.html">Logearse</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </header>


      <footer class="piedepagina">
        <div>Todos los derechos reservados | Misión-Tic 2022 | THE-FIVE-GEEKS</div>
      </footer>
    </div>
  );
}

export default App;
