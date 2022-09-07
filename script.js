// Mi idea de proyecto final es poder aplicar javascript a la pagina que hice en el curso de desarrollo web y crear una suscripción para descuentos mensuales y un carrito. 
// Ingresando el cupon TAIKOBOUNTY obtenés un descuento del 40% en la suscripción. 

//Simulador para calcular el monto total de tu compra
function calcularPrecio (precioSuscripcion, mesesSuscripcion, cupon) {

    console.log(cupon)
    
    //calculo los descuentos y los aplico si el cupon es válido
    if (cupon == "TAIKOBOUNTY"){
        precioSuscripcion = (precioSuscripcion * 0.6);
    } else {
        alert("El cupon no es válido, se cobrará el total de la suscripción...")
    }

    // calculo el total
    let total = precioSuscripcion*mesesSuscripcion
    
    //retorno el precio final con descuento * la cantidad de meses
    return total;
}


const producto = 1500 
//le pedimos al usuario que ingrese la cantidad de meses que quiere suscribirse, la dirección, mail y si tiene un cupón de descuento para ingresar.  
let cantidadMeses = parseInt(prompt("Ingrese la cantidad de meses de suscripción:"));
let direccion = parseInt(prompt("Ingrese su dirección a la que tenemos que enviar tu Taiko Bounty:"))
let mail = prompt("Ingresá tu mail para link de pago:")
let cupon = prompt("Si tenés un cupón de descuento, ingresalo aquí:") //los cupones en este caso serian los porcentajes de descuento, lo pongo asi para que quede mas visual


//llamamos a la funcion y luego mostramos el precio final por alert
let precioFinal = calcularPrecio(producto, cantidadMeses, cupon);
alert("El precio total de tu suscripción es $" + precioFinal + ". Al finalizar revisá tu correo para finalizar el pago.");
alert("¡Que lo disfrutes!");