const { products } = require("./utils/products");

/************************************************************************************
PUNTO 1
utiliza addingIdToProduct para agregarle un id único a cada producto empezando en 1
*************************************************************************************/
// Tu código acá

function addingIdToProduct() {
  products.forEach((product, index) => {
    product.id = index + 1;
  });
  return products;
}

/*****************************************************************************
 * PUNTO 2
 * utiliza returningTheNames para retornar el nombre de cada uno de los productos
 ******************************************************************************/
// Tu código acá
function returningTheNames() {
  return products.map((product) => product.name);
}

/********************************************************************************
PUNTO 3
utiliza searchID para retornar el producto cuyo id corresponda al parametro pasado.
Si ejecuto searchID(3) debería devolver el objeto entero, cuyo id sea 3
************************************************************************************/
// Tu código acá
function searchID(id) {
  let product = products.find((product) => product.id === id);
  if (product === undefined) {
    return "no hubo coincidencias";
  } else {
    return product;
  }
}

/*****************************************************************************
PUNTO 4
utiliza matchingColors para retornar los productos que hagan match con 
el color pasado por parámetro
******************************************************************************/
// Tu código acá
function matchingColors(color) {
  return products.filter((product) => product.colors.includes(color));
}
/*****************************************************************************
PUNTO 5
utiliza colorsLength para retornar los productos que no tengan color
******************************************************************************/
// Tu código acá
function colorsLength() {
  return products.filter((product) => product.colors.length === 0);
}

/*****************************************************************************
PUNTO 6
utiliza addProduct para agregar un nuevo producto que contenga las mismas
propiedades (name,price,quantity,colors).
Retornar los productos donde se incluya el producto agregado
******************************************************************************/
// Tu código acá
function addProduct(newProduct) {
  if (Object.keys(newProduct).length === 4) {
    products.push(newProduct);
    return products;
  }
}

/*****************************************************************************
PUNTO 7
utiliza deleteProduct para Eliminar del array de productos a aquellos sin stock (con quantity 0)
******************************************************************************/
// Tu código acá
function deleteProduct() {
  return products.filter((product) => product.quantity > 0);
}
/*****************************************************************************
PUNTO 8
utiliza existingProducts para sumar el numero total de stock entre todos los productos.
Debe retornar dicho numero
******************************************************************************/
// Tu código acá
function existingProducts(productsToAdd) {
  let total = 0;
  productsToAdd.forEach((product) => {
	 total += product.quantity;
  });
  return total;
}

/*****************************************************************************
PUNTO 9
utiliza showHigherPrice para retornar los productos cuyo importe sea mayor al pasado por parametro
Esta función recibe el array de productos y el importe (precio) a buscar:
showHigherPrice(products,500) 
debería devolver 2 objetos, ya que solo 2 productos tienen un valor mayor a 500
******************************************************************************/
// Tu código acá
let showHigherPrice = (products, price) =>{
  return products.filter(product => product.price > price)
}

module.exports = {
  addingIdToProduct,
  existingProducts,
  deleteProduct,
  addProduct,
  colorsLength,
  matchingColors,
  searchID,
  returningTheNames,
  showHigherPrice,
};
