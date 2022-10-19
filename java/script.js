const carrito = [];
let totalCarrito;
let contenedor = document.getElementById("Mis productos");


function catalogo() {
    for (const producto of productos) {
        //Uso una plantilla literal
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


    productos.forEach(producto => {
        //evento para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener("click", function () {
            agregarAlCarrito(producto);
        });
    })
}

catalogo();



function agregarAlCarrito(productoComprado) {
    carrito.push(productoComprado);
    console.table(carrito);
    alert("Producto: " + productoComprado.nombre + " agregado al carrito!");
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${productoComprado.id}</td>
            <td>${productoComprado.nombre}</td>
            <td>${productoComprado.precio}</td>
        </tr>
    `;
    totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText = " El monto Total a pagar $: " + totalCarrito;
}