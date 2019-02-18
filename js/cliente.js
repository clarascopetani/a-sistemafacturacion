class Cliente {
    constructor(nombre, apellido, dni, edad) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.dni = dni,
        this.edad = edad
    }
    printCliente() {
        const ulList = document.querySelector('#cliente');
        ulList.innerHTML = `
            <li class="list-group-item">Nombre: ${this.nombre} </li>
            <li class="list-group-item">Apellido: ${this.apellido}</li>
            <li class="list-group-item">DNI: ${this.dni}</li>
            <li class="list-group-item">Edad: ${this.edad}</li>
            `;
	}
}

var clienteCobrar;

//CARGAR CLIENTE A COBRAR
function registrarCliente(){
    var nombre = pedirDatos(nombre, Cajero.datosCliente[0], 'texto' )
    var apellido = pedirDatos(apellido, Cajero.datosCliente[1], 'texto')
    var dni = pedirDatos(dni, Cajero.datosCliente[2], 'numero')
    var edad = pedirDatos(edad, Cajero.datosCliente[3], 'numero')

    Cajero.nuevoCliente(nombre, apellido, dni, edad);
    clienteCobrar.printCliente()
    nuevaFactura()
}
