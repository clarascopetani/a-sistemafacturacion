# a-sistemafacturacion


Ejercicio Cajero

1. Al ingresar al sitio mostraremos tan sólo un botón "Comenzar", que al presionarse solicitará datos del cliente utilizando prompts. Si alguno de estos datos no fue completado correctamente debe advertirse con un alert y volver a solicitarse con un prompt. Los datos son:
* Nombre
* Apellido
* DNI
* Edad  

2. Con los datos recibidos instanciaremos un objeto **Cliente** cuyo prototipo habremos creado previamente.

3. Dedicaremos una caja de nuestra UI a mostrar los datos de la Persona que se ingresó. El botón "Comenzar desaparecerá".

4. Una vez que el usuario ingresó los datos, se le dará la posibilidad al usuario de agregar productos a la hoja mediante un botón. El método será idéntico que para ingresar el cliente. Los campos que tendrá son:
* Detalle
* Cantidad
* Precio Unitario

4. Crearemos el prototipo **Producto** con los campos del punto anterior. También incluirá un método para obtener el precio total del registro.

5. Ante cada producto agregado, deberá agregarse a una tabla HTML que habremos creado para tal fin. Es recomendable utilizar un array para guardar los datos además de que existan en la UI.

6. Luego de agregar cada producto, un apartado de nuestra UI deberá indicarnos el valor total de la factura, sumando el precio total de cada uno de los productos. También deberá indicarnos el IVA discriminado del total.

7. Debajo del total en Pesos, se calculará el total en dólares, también discriminando el IVA.

8. Por último, permitiremos aplicar un descuento sobre el total mediante un botón para agregar el valor numérico, también con un prompt. Tener en cuenta que debe poder interpretar decimales. De existir el descuento, se informará en la UI y se mostrará el valor en pesos y dólares descontado. Otro botón nos permitirá eliminar el descuento, si es que éste fue agregado.

Sugerencias
* Los botones que nos permiten realizar las acciones deben estar en un sector de la interfaz para no interponerse con la hoja de facturación.

* Encapsular en funciones las operaciones con datos para abstraelas de la interacción con la interfaz (HTML, prompts). También dedicar archivos exclusivos a los prototipos.

* Crear tantos archivos JS como crean necesarios para ordenar mejor el código. Idealmente separando el código que manipula el DOM para poder importar el resto del código en los tests.
