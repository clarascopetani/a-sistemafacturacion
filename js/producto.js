class Producto {
    constructor(detalle, cantidad, precio, productoTotal) {
        this.detalle = detalle,
        this.cantidad = cantidad,
        this.precio = precio,
        this.productoTotal = productoTotal
    }

    printProducto() {
        const tabla = document.querySelector('tbody');
        var row = tabla.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = this.detalle;
        cell2.innerHTML = this.cantidad;
        cell3.innerHTML = '$' + this.precio;
        cell4.innerHTML = '$' + this.productoTotal;
	}
}

var productoCobrar;

// AGREGAR PRODUCTOS
function cargarProducto(){
    var detalle = pedirDatos(detalle, Cajero.datosProducto[0], 'texto' )
    var cantidad = pedirDatos(cantidad, Cajero.datosProducto[1], 'numero')
    var precio = pedirDatos(precio, Cajero.datosProducto[2], 'numero')
    var total = cantidad*precio;

    Cajero.nuevoProducto(detalle, cantidad, precio, total);
    productoCobrar.printProducto()
    Cajero.listadoProductos.push(productoCobrar);
    actualizarTotal()
}
