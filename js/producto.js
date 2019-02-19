class Producto {
    constructor(detalle, cantidad, precio, productoTotal) {
        this.detalle = detalle,
        this.cantidad = cantidad,
        this.precio = precio,
        this.productoTotal = productoTotal
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
    printProducto()
    Cajero.listadoProductos.push(productoCobrar);
    actualizarTotal()
}
