// Recuperar los productos almacenados en el carrito desde el localStorage y convertirlos en un array
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

// Selección de elementos del DOM
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const botonComprar = document.querySelector("#carrito-acciones-comprar");
const contenedorTotal = document.querySelector("#total");

// Función para cargar los productos del carrito en el DOM
function cargarProductosCarrito(){
    // Si hay productos en el carrito
    if(productosEnCarrito && productosEnCarrito.length > 0){
        // Mostrar contenedor de productos y acciones del carrito, ocultar mensaje de carrito vacío
        contenedorCarritoVacio.classList.add("disabled");
        contenedorProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        // Vaciar el contenedor de productos antes de agregar los productos del carrito
        contenedorProductos.innerHTML = "";

        // Iterar sobre los productos en el carrito y crear elementos HTML para cada uno
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                            <small>Título</small>
                            <h3>${producto.titulo}</h3>
                        </div>
            <div class="carrito-producto-cantidad">
                            <small>Cantidad</small>
                            <p>${producto.cantidad}</p>
                        </div>
            <div class="carrito-producto-precio">
                            <small>Precio</small>
                            <p>${producto.precio}</p>
                        </div>
            <div class="carrito-producto-subtotal">
                            <small>Subtotal</small>
                            <p>${producto.precio * producto.cantidad}</p>
                        </div>
            <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash3"></i></button>
            `;

            // Añadir el producto al contenedor de productos del carrito
            contenedorProductos.append(div);
        });

    } else {
        // Si no hay productos en el carrito, mostrar el mensaje de carrito vacío
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }
    // Actualizar los botones de eliminación y el total
    actualizarBotonesEliminar();
    actualizarTotal();
}

// Cargar los productos del carrito al iniciar la página
cargarProductosCarrito();

// Función para actualizar los botones de eliminación de productos en el carrito
function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    // Eliminar el producto del array de productos en el carrito
    productosEnCarrito.splice(index, 1);

    // Recargar los productos del carrito para reflejar la eliminación
    cargarProductosCarrito();

    // Actualizar el localStorage con el nuevo estado del carrito
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// Añadir un evento al botón de vaciar el carrito
botonVaciar.addEventListener("click", vaciarCarrito);

// Función para vaciar el carrito
function vaciarCarrito(){
    // Vaciar el array de productos en el carrito
    productosEnCarrito.length = 0;

    // Actualizar el localStorage para reflejar el carrito vacío
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    // Recargar los productos del carrito para reflejar el cambio
    cargarProductosCarrito();
}

// Función para actualizar el total del carrito
function actualizarTotal() {
    // Calcular el total sumando los subtotales de cada producto
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    contenedorTotal.innerText = `$${totalCalculado}`;
}

// Añadir un evento al botón de comprar el carrito
botonComprar.addEventListener("click", comprarCarrito);

// Función para realizar la compra
function comprarCarrito(){
    // Vaciar el array de productos en el carrito
    productosEnCarrito.length = 0;

    // Actualizar el localStorage para reflejar el carrito vacío
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    // Recargar los productos del carrito para reflejar el cambio
    cargarProductosCarrito();

    // Mostrar mensaje de compra realizada
    contenedorCarritoVacio.classList.add("disabled");
    contenedorProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}
