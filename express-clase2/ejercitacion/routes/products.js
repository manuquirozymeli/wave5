let products = require("../utils/mock");
const express = require("express");

const router = express.Router();

// 1. Retornar todos los productos del array. “/api/products”,
router.get("/products", (req, res) => {
  res.json(products);
});

//2. Obtener un producto específico mediante su ID “/api/products/:id”
router.get("/products/:id", (req, res) => {
  const product = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  res.json([product]);
});

//3. Agregar un nuevo producto “/api/products”
router.post("/products/add", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.json(products);
});

//4. Cambiar alguna propiedad de un producto en particular ( Puede ser name, price, quantity o el que desees ) “/api/products/:id”,
router.put("/products/:id/:name", (req, res) => {
  const product = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  product.name = req.params.name;
  res.json(product);
});

//5. Eliminar un producto mediante su ID “/api/products/:id”,
router.delete("/products/:id", (req, res) => {
  const product = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  console.log("PRODUCT", product);
  products.splice(products.indexOf(product), 1);
  res.json(products);
});

module.exports = { router, products };
