const express = require("express");
const router = express.Router();

/************************************************************* 
	EJERCICIO 
	1-Crear un endpoint que utilice el método GET y 
	devuelva como respuesta el mensaje “¡Hola mundo!”. 
	2-Probar que el mensaje llega al navegador.
	http://localhost:3000/api/
 ************************************************************/
// Tu código acá

router.get("/", (req, res) => {
  res.send("¡Hola mundo!");
});

/*************************************************************
	EXTRA
	1-Crear un array de productos usando la variable products
	2-Crear otro método Get cuya ruta sea '/products'
	3-Responder con el array al ingresar a '/products'
	http://localhost:3000/api/products
 *************************************************************/
// Tu código acá
let products = [
  { name: "Pendrive", price: 10, id: 1 },
  { name: "Headset", price: 50, id: 2 },
  { name: "Mouse", price: 20, id: 3 },
];

router.get("/products", (req, res) => {
  res.send({products});
});

//expressjs.com/es/starter/hello-world.html
module.exports = { router, products };
