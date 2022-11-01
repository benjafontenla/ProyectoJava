//Armo la const 'carrito' para usar a la hora de realizar la function.
const carrito = [];

//variable global 
let totalCarrito;

//Tomo el nodo 
let contenedor = document.getElementById("Mis productos"); //Padre
//Armo la function y las tarjetas de productos
function catalogo(){
    for(const producto of productos){
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
    productos.forEach(producto => {
        //Evento para cada boton. Tomo el boton y agrego el escuchador de evento.
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){ //Escuhador de evento.
            agregarAlCarrito(producto); //Dentro de la function anonima llamo a 'agregarAlCarrito'
        });
    })
}


catalogo();
//Armo la function del segundo parametro.
function agregarAlCarrito(productoComprado){
    carrito.push(productoComprado);
    console.table(carrito);
    //Tengo que cambiar este alert
    alert("Producto: "+productoComprado.nombre+" agregado al carrito!");
    //plantilla literal.
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${productoComprado.id}</td>
            <td>${productoComprado.nombre}</td>
            <td>${productoComprado.precio}</td>
        </tr>
    `;
    //Acumulamos el total con reduce.
    totalCarrito = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText=" El monto Total a pagar $: "+totalCarrito;

    //Almaceno los productos pusheados al carrito por el usuario.
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

/*Almaceno en el localStorage mi lista de productos.
const productosAJason = JSON.stringify(productos);
localStorage.setItem('productos', productosAJason);
*/
