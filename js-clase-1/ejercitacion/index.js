/*******************************************************************************

Realizar una función llamada “calculatePrice” que reciba dos parámetros,
el primero siendo el nombre de un producto (ej: "Laptop""), y el segundo 
el precio de ese producto (sin el signo $). Dicha función deberá retornar 
un string con el nombre del producto, el costo del envío del mismo, y el precio final.

Ejemplo:
calculatePrice("play", 30000)

output : "el costo de envio de una play es de 500 pesos y el precio total seria de 30500 pesos"
*******************************************************************************/
//Tu código acá

function calculatePrice(product, price) {
	let shipping;
	if (price <= 0) {
	  return "Error";
	} else if (!product || !price) {
	  return "ingresar ambos parámetros";
	} else if (typeof product !== "string") {
	  return "ingresar un nombre válido";
	} else if (1 <= price && price <= 2000) {
	  shipping = 300;
	} else if (2001 <= price && price <= 4000) {
	  shipping = 500;
	} else if (price > 4000) {
	  shipping = 700;
	}
	let total = shipping + price;
	return `El producto ${product} cuesta ${price} . Su costo de envío es de ${shipping} . Por lo tanto, el precio final es de ${total}`;
 }
 
 module.exports = {
	calculatePrice,
 };
 