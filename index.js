const express = require("express"); //importar express
const bodyParser = require("body-parser");
const cors = require("cors");
const misrutas = require('./routes/rutas')
const app = express(); //crear al servidor
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/public/"));
app.use('/',misrutas);
app.listen(port, () => {
    console.log(`Servidor en ejecucion http://localhost:${port}`);
})
