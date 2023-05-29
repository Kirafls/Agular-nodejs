const express = require("express");
const router = express.Router();
const cuadrado = require("../calculos");


router.get('/', (req, res) => {
    res.sendFile(process.cwd()+"/public/index.html")
});

router.get('/calculos/:width', (req, res) => {
 const { width } = req.params;
 let a = cuadrado.area(width);
 let b = cuadrado.perimetro(width);
 console.log(width, a, b);
 res.send({
 ancho: width,
 area: a,
 perimetro: b
 });
});

router.get('/datos', (req, res) => {
    res.send(
        {
            "secretBase": "Super tower",
            "active": true,
            "members": [
                {
                    "name": "Jesus Alberto Romo Mendez",
                    "age": 22,
                    "secretIdentity": "JARM",
                    "powers": [
                        "Vuelo",
                        "SuperFuerza",
                        "Hipervelocidad"
                    ]
                },
                {
                    "name": "Sueño Mortal",
                    "age": 39,
                    "secretIdentity": "Carl Yemers",
                    "powers": [
                        "Invisibilidad",
                        "Control mental",
                        "Regeneración"
                    ]
                },
                {
                    "name": "Fantasma Eterno",
                    "age": 33,
                    "secretIdentity": "Desconocido",
                    "powers": [
                        "Telequinesis",
                        "Visión de rayos X",
                        "Manipulación del tiempo",
                        "Teletransportación",
                        "Lectura de mentes"
                    ]
                }
            ]
        });
});

router.post('/ayuda', (req, res) => {
    console.log('Cuerpo de la peticion: ', req.body);
    res.send({ message: 'Hola mundo en que te puedo ayudar, SOY UNA PETICION POST' });
});

router.post('/producto', (req, res) => {
    console.log('Cuerpo de la peticion: ', req.body);

    const { nombre, sueldo, categoria } = req.body;
    console.log(nombre);
    console.log(sueldo);
    console.log(categoria);
    res.send({ message: "El producto se ha recibido" });
});

router.post('/producto/:id', (req, res) => {
    const { id } = req.params;
    const { motor } = req.query;
    const { precio } = req.body;
    console.log(id, motor, precio);
    res.json({
        stockmin: 10,
        stockmax: 15,
        existencia: 7
    });
});

module.exports = router;