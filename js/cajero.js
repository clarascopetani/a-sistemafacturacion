const Cajero = {
    nuevoCliente: function(nombre, apellido, dni, edad){
        clienteCobrar = new Cliente(nombre, apellido, dni, edad);
    },
    nuevoProducto: function(detalle, cantidad, precio, precioTotal){
        productoCobrar = new Producto(detalle, cantidad, precio, precioTotal);
    },
    datosCliente: ["nombre", "apellido", "dni", "edad"],
    datosProducto: ["detalle", "cantidad", "precio"],
    listadoProductos: [],

    sumTotales: function(){
        var total = this.listadoProductos.sum("productoTotal")
        return total
    },
    
    calcularIVA: function(i){
        i = (i*21)/100
        return i
    },

    subtotal:0,

    nuevoDescuento: 0

}

var clienteCobrar;
var productoCobrar;


// SUMAR TOTALES
Array.prototype.sum = function (prop) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
}

// PEDIR DATOS
function pedirDatos(i, datoString, tipo){
    console.log("volvi a cero")
    switch (tipo) {
        case 'texto' :
        i =  pedirDato(i, datoString, tipo);
        while(i == undefined || i.length == 0){
            pedirDatoValido(datoString)
            i = pedirDatos(i, datoString, tipo)
        } break;
        
        case 'numero':
        i = parseInt(pedirDato(i, datoString, tipo));
        if(datoString === "dni"){
            var dniValido = i.toString().length;
            if(dniValido < 8 || isNaN(i)){
            pedirDatoValido(datoString)
            i = pedirDatos(i, datoString, tipo)
        }} else {
            if(i === undefined || i <= 0 || isNaN(i)){
            pedirDatoValido(datoString)
            i = pedirDatos(i, datoString, tipo)
        } break;

    }} return i;    
} 

// VALIDAR DATOS
function pedirDato(i, datoString, tipo){
    i = prompt('Por favor, ingrese ' + datoString);
    console.log("pedi datos", i, datoString,tipo)
    return i;
}

function pedirDatoValido(datoString){
    alert('Por favor, ingrese el ' + datoString + ' valido');
}

//CREAR BOTONES DINAMICOS
function crearBotones(idSelect, nombreBot, idBot, claseBot, funcionClick){
    var productButton = document.createElement('button');
    var productButtonDiv = document.getElementById(idSelect);
    productButtonDiv.appendChild(productButton).addEventListener('click', function(){
        funcionClick(), false});
    productButton.classList.add('btn', claseBot);
    productButton.setAttribute('id', idBot);
	productButton.innerHTML = nombreBot;
};

// AGREGAR DESCUENTO
function aplicarDescuento(){
   var totalDescuento = pedirDatos(Cajero.nuevoDescuento, 'descuento a aplicar', 'numero' )
    if(totalDescuento <= Cajero.subtotal){
        Cajero.nuevoDescuento = totalDescuento;
        document.getElementById('numDescuento').innerHTML = '$' + totalDescuento;
        actualizarTotal()
    } else {
        alert('No se puede aplicar un descuento mayor al Subtotal')
    }
}

// ELIMINAR DESCUENTO
function eliminarDescuento(){
    Cajero.nuevoDescuento = 0,
    document.getElementById('numDescuento').innerHTML = '$' + Cajero.nuevoDescuento;
    actualizarTotal()
}