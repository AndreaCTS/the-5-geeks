const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


var corsOptions = {
    origin: "http://localhost:8081"
  };

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// se hace lo siguiendo para probar que está funcionando
app.get('/',(req,res)=>{
    res.send("servicio de bd Administrador en funcionamiento")
});
// llamar a las rutas para que los métodos esten disponibles
//require('./rutas/usuario.rutas')(app);

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Servicio de BD Moneda escuchando en http://localhost:${PORT}`);
})

const db = require("./modelos");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

