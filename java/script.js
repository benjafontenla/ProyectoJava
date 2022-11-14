let productosJSON = [];
//Armo la const 'carrito' para usar a la hora de realizar la function.
const carrito = [];
//variable global 
let totalCarrito;
//Tomo el nodo contenedor para la tarjeta de productos
let contenedor = document.getElementById("Mis Productos"); //Padre
//Esroy tomando el id ' finalizar.
let botonFinalizar = document.getElementById("finalizar")
//Para preguntar si hay algun carrito guardado (operador logico or)
let carritos = JSON.parse(localStorage.getItem('carritos')) || [];


//renderizado para retomar un carrito abandonado.
//(carrito.length != 0) && dibujarTabla();
//o 
if (carrito.length != 0) {
    console.log('recuperando carro')
    dibujarTabla();
}


//function dibujarTabla
function dibujarTabla() {
    for (const producto of carrito) {
        document.getElementById(' tablabody').innerHTML += `
        <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>button class='btn btn-light' onclick= 'eliminar(event)'> </button></td>
        
        </tr>
        `;
    }
    //Acumulamos el total con reduce.
    totalCarrito = carritos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText = " El monto Total a pagar $: " + totalCarrito;
}



//Function renderizarProds()

function catalogo(){
    for(const producto of productosJSON){
        //Uso una plantilla literal. Uso += para que la carta se gregue a la anterior
        contenedor.innerHTML += ` 
            <div class="card col-sm-2">
                <img src=${producto.imagen} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.id}</h5>
                    <p class="card-text">${producto.nombre}</p>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id="btn${producto.id}" class="btn btn-primary">Comprar</button>
                </div>
            </div>
        `;
    }
    //Eventos
    productosJSON.forEach(producto => {
        //Evento para cada boton. Tomo el boton y agrego el escuchador de evento.
        document.getElementById(`btn${producto.id}`).addEventListener("click", function () { //Escuhador de evento.
            agregarAlCarrito(producto); //Dentro de la function anonima llamo a 'agregarAlCarrito'
        });
    })
}


//Armo la function del segundo parametro. (31)
function agregarAlCarrito(productoComprado) {
    carrito.push(productoComprado);
    console.table(carrito);
    alert("Producto: " + productoComprado.nombre + " agregado al carrito!");
    swal.fire({
title: productoComprado.nombre,
text: 'agregando al carrito',
imageWidth: 200,
imageAlt: productoComprado.nombre,
showconfirmButton: false,
timer: 1500
    })
    //plantilla literal.
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${productoComprado.id}</td>
            <td>${productoComprado.nombre}</td>
            <td>${productoComprado.precio}</td>
        </tr>
    `;
    //Acumulamos el total con reduce.
    totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText = " El monto Total a pagar $: " + totalCarrito;

}




