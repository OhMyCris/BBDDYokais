const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config()

//Aqui linkeamos tanto la base de datos como las rutas para traerlos al script
const {connect} = require('./src/utils/db')
const yokaiRoutes = require('./src/api/routes/yokai.routes')
const videojuegosRoutes = require('./src/api/routes/videojuegos.routes')

const HTTPSTATUSCODE = require('./src/utils/httpStatusCode');

const PORT = process.env.PORT;

const app = express();
connect();

//Esto se usa para que no inyecten codigo de mongo y express y externos se puedan meter en nuestra BBDD
const mongoSanitize = require('express-mongo-sanitize');
app.use(mongoSanitize());

//Recibir e interpretar JSON desde Postman o un front
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:4200'],
  credentials: true,
}));
app.use(logger("dev"));
app.set("secretKey", "nodeRestApi");

app.use('/yokais', yokaiRoutes)
app.use('/videojuegos', videojuegosRoutes)

app.listen(PORT, () =>
  console.log(`escuchando en el puerto http://localhost:${PORT}`)
);
