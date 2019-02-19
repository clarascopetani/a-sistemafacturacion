crearBotones('acciones', "Nuevo Cliente", 'botCliente', 'btn-primary', registrarCliente)
$('#totalFactura').hide();

function nuevaFactura(){
    document.getElementById('botCliente').classList.add("ocultar");
    $('#acciones').hide();
    crearBotones('acciones', "Agregar Producto", 'botAgregarProducto', 'btn-secondary', cargarProducto)
    crearBotones('acciones', "Aplicar Descuento", 'botDescuento','btn-secondary', aplicarDescuento)
    crearBotones('acciones', "Eliminar Descuento", 'botBorrarDescuento', 'btn-secondary', eliminarDescuento)
    crearBotones('acciones', "Imprimir Factura", 'botImprimir', 'btn-info', window.print)
    $('#acciones').toggle( "slide" );
}

function actualizarTotal(){
    Cajero.subtotal = Cajero.sumTotales()
    var iva = Cajero.calcularIVA(Cajero.subtotal)
    var descuento = Cajero.nuevoDescuento;
    var total = (Cajero.subtotal + iva) - descuento
    var totalUS = Math.round(total/Cajero.cotizacionDolar*100)/100
    var ivaUS =  Math.round(Cajero.calcularIVA(totalUS)*100)/100

    $('#numSubtotal').html('$' + Cajero.subtotal);
    $('#numIva').html('$' + iva);
    $('#numDescuento').html('$' + descuento);
    $('#numTotal').html('$' + total);
    $('#numIvaUS').html('$' + ivaUS);
    $('#numTotalUS').html('$' + totalUS);
}

// IMPRIMIR CLIENTE
function printCliente() {
    var ul = document.getElementById('cliente');
    $('#cliente').hide();
    var i = 0;
    for (let value of Object.values(clienteCobrar)) {
        console.log(i)
        var li = document.createElement('li');
        li.classList.add("list-group-item")
        li.textContent = Cajero.datosCliente[i++] + ': ' + value;
        ul.appendChild(li);
    }
    $('#cliente').toggle( "clip" );
    $('#totalFactura').toggle( "clip" );
}

// IMPRIMIR PRODUCTO
function printProducto() {
    const tabla = document.getElementById('listProductos');
    var row = tabla.insertRow(0);
    var cell;
    var i = 0;
    for (let value of Object.values(productoCobrar)) {
        if (i > 1){
            cell = row.insertCell(i++)
            cell.innerHTML = '$' + value;
        } else{
            cell = row.insertCell(i++)
            cell.innerHTML = value
    }}
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