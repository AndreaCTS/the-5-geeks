import "../App.css";
import logo2 from "../media/logo_tienda.png";
import fondo from "../media/fondo.jpg";
import { Link } from 'react-router-dom';

function Registro() {
    return (
        <div>
            <div id="fondologin">
                <img src={fondo} alt="fondo pagina" className="imgfondo" />
            </div>
            <div id="formulario">
                <form action="action_page.php" method="post">

                    <div className="imgcontainer">
                        <img src={logo2} alt="Avatar" class="avatar" />
                    </div>

                    <div className="container">
                        <label for="uname"><b>Nuevo Usuario</b></label>
                        <input type="text" placeholder="Ingresa el nuevo usuario" name="uname" required />

                        <label for="email"><b>Correo Electónico</b></label>
                        <input type="text" placeholder="Ingresa tu correo electrónico" name="uname" required />

                        <label for="psw"><b>Contraseña</b></label>
                        <input type="password" placeholder="Ingresa la Contraseña" name="psw" required />

                        <label ><b>Selecciona tu Rol</b></label>
                        <input class="oc" type="radio" id="vendedor" name="mi_rol" value="Vendedor" />
                        <label class="oc" > Vendedor</label>
                        <input class="oc" type="radio" id="administrador" name="mi_rol" value="Administrador" />
                        <label class="oc" > Administrador</label>

                        <button type="submit" id="logearse">Registrarse</button>

                    </div>

                    <div className="container" className="abajo" >
                        <Link to="/"><button type="button" className="cancelbtn">Cancelar</button></Link>
                    </div>

                </form>
            </div>
        </div>


    );

}

export default Registro;