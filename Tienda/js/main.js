// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos",
        },
        precio: 1000,
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos",
        },
        precio: 1000,
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos",
        },
        precio: 1000,
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos",
        },
        precio: 1000,
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos",
        },
        precio: 1000,
    },
    // Camisetas
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas",
        },
        precio: 1000,
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas",
        },
        precio: 1000,
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas",
        },
        precio: 1000,
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas",
        },
        precio: 1000,
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas",
        },
        precio: 1000,
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas",
        },
        precio: 1000,
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas",
        },
        precio: 1000,
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas",
        },
        precio: 1000,
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones",
        },
        precio: 1000,
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones",
        },
        precio: 1000,
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones",
        },
        precio: 1000,
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones",
        },
        precio: 1000,
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "./assets/Untitled.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones",
        },
        precio: 1000,
    },
];
// Definición de los productos disponibles en la tienda

// Lista de objetos que representan cada producto con su respectiva categoría, imagen, precio, etc.

// Selección de elementos del DOM que serán manipulados
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const number = document.querySelector("#number");

// Función para cargar los productos en el contenedor HTML
function cargarProductos(productosElegidos) {
    // Limpia el contenedor de productos antes de cargar nuevos
    contenedorProductos.innerHTML = "";

    // Itera sobre los productos seleccionados y crea elementos HTML para cada uno
    productosElegidos.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("producto");
        // Inserta el HTML del producto con su imagen, título, precio y botón de agregar
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}" />
            <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>  
        `;
        // Añade el producto al contenedor en el DOM
        contenedorProductos.append(div);
    })

    // Actualiza los botones de agregar para añadir funcionalidad de clic
    actualizarBotonesAgregar();
}

// Inicializa la carga de productos en la página con todos los productos disponibles
cargarProductos(productos);

// Agrega un evento a cada botón de categoría para filtrar los productos por categoría
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        // Remueve la clase 'active' de todos los botones y la añade al botón clicado
        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")

        // Filtra los productos según la categoría seleccionada
        if(e.currentTarget.id != "todos"){
            const productosCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productosCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});

// Función para actualizar los botones de agregar al carrito después de que se carguen los productos
function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    // Añade un evento de clic a cada botón de agregar al carrito
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

// Inicializa o recupera el carrito de compras desde el localStorage
let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumero();
}else {
    productosEnCarrito = [];
}

// Función que se ejecuta cuando se hace clic en un botón de agregar al carrito
function agregarAlCarrito(e){
    // Obtiene el ID del producto clicado
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    // Si el producto ya está en el carrito, incrementa la cantidad
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        // Si el producto no está en el carrito, lo añade con una cantidad inicial de 1
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    // Actualiza el número total de productos en el carrito
    actualizarNumero();

    // Guarda el carrito actualizado en el localStorage
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// Función que actualiza el número que muestra la cantidad de productos en el carrito
function actualizarNumero(){
    // Suma la cantidad de cada producto en el carrito para mostrar el total
    let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    number.innerText = nuevoNumero;
}
