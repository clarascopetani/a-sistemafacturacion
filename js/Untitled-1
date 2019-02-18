$(window).ready( function(){
    var $botonIniciar = $('#botonIniciar');
    var $botAgregarProducto = $('#botAgregarProducto');
    var $acciones = $('#acciones');
    var $datosFactura = $('#datosFactura');
    var $lisDatos = $('#cliente');

    $datosFactura.hide();
    $botonIniciar.click(registrarCliente);
    $botAgregarProducto.click(cargarProducto);
    $lisDatos.addClass('list-group');

    $lisDatos.change(function(){
        $datosFactura.show(400);
        $acciones.removeClass('ocultar');
        $botonIniciar.addClass('ocultar');
        }
    );
});
