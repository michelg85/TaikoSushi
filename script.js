// Mi idea de proyecto final es poder aplicar javascript a la pagina que hice en el curso de desarrollo web y crear un carrito de compras.
// La primer compra tiene un descuento del 40% off así que el cliente va a poder aplicar ese descuento en la compra final.

//Simulador para calcular el monto total de tu compra
function calcularPrecio (precioProducto, cantidadProducto, porcentajeDescuento, costoEnvio) {
    //calculo los descuentos
    let descuento = (precioProducto * porcentajeDescuento) / 100;
    //se lo aplico al precio
    let precioConDescuento = precioProducto - descuento;
    //retorno el precio final con descuento y costo de envio, multiplicado por la cantidad de combos
    return (precioConDescuento * cantidadProducto) + costoEnvio;
}

const envio = 800; //valor aproximado del costo de envio promedio dentro de CABA

//le pedimos al usuario el precio de los productos, la cantidad y el porcentaje del descuento. 
let producto = parseFloat(prompt("Ingrese el precio del producto que desea comprar:"));
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar de este producto:"));
let direccion = parseInt(prompt("Ingrese su dirección (solo envíos dentro de CABA):"))
let mail = parseInt(prompt("Ingresá tu mail para link de pago:"))
let descuento = parseInt(prompt("Ingresá el número 40 para aplicar el descuento")) //los cupones en este caso serian los porcentajes de descuento, lo pongo asi para que quede mas visual

//llamamos a la funcion y luego mostramos el precio final por alert
let precioFinal = calcularPrecio(producto, cantidad, descuento, envio);
alert("El precio total de tu compra es $" + precioFinal);
alert("¡Que lo disfrutes!");