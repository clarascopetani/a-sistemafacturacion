crearBotones('acciones', "Nuevo Cliente", 'botCliente', 'btn-primary', registrarCliente)

function nuevaFactura(){
    document.getElementById('botCliente').classList.add("ocultar");
    crearBotones('acciones', "Agregar Producto", 'botAgregarProducto', 'btn-primary', cargarProducto)
    crearBotones('acciones', "Aplicar Descuento", 'botDescuento','btn-primary', aplicarDescuento)
    crearBotones('acciones', "Eliminar Descuento", 'botBorrarDescuento', 'btn-primary', eliminarDescuento)
}


function actualizarTotal(){
    Cajero.subtotal = Cajero.sumTotales()
    var iva = Cajero.calcularIVA(Cajero.subtotal)
    var descuento = Cajero.nuevoDescuento;
    var total = (Cajero.subtotal + iva) - descuento;

    document.getElementById('numSubtotal').innerHTML = '$' + Cajero.subtotal;
    document.getElementById('numIva').innerHTML = '$' + iva;
    document.getElementById('numDescuento').innerHTML = '$' + descuento;
    document.getElementById('numTotal').innerHTML = '$' + total;
}
