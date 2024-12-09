const productos = [
  {
    id: 13,
    nombre: "Cartuchera",
    descripcion: "Escolar",
    imagen: "Cartuchera.jpg",
    precio: 15000,
    stock: 20,
    detalle: "cartuchera.html",
  },
  {
    id: 14,
    nombre: "Compas",
    descripcion: "Metalico",
    imagen: "compas.jpg",
    precio: 13000,
    stock: 15,
    detalle: "compas.html",
  },
  {
    id: 15,
    nombre: "Set de Escuadras",
    descripcion: "Para diseño",
    imagen: "escuadras.jpg",
    precio: 11000,
    stock: 12,
    detalle: "escuadras.html",
  },
  {
    id: 16,
    nombre: "Lapices de Colores",
    descripcion: "De madera",
    imagen: "lapices.jpeg",
    precio: 15000,
    stock: 16,
    detalle: "lapices.html",
  },
  {
    id: 5,
    nombre: "Tijera",
    descripcion: "Plástica",
    imagen: "tijera.jpeg",
    precio: 18000,
    stock: 9,
    detalle: "tijera.html",
  },
];

// Obtengo el item 'carrito' del local storage que es un texto
// Lo intento transformar a un Objeto de javaScript
// Si algo falla asigno un array a la constante, sino el Objeto
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const listadoProductos = document.querySelector(".listado-productos");

listadoProductos.innerHTML = "";

// Recorro el array de productos
productos.forEach((producto) => {
  // Creo el HTML con los datos de cada producto
  const html = `
        <article data-id="${producto.id}">
          <h3>${producto.nombre}</h3>
          <img class="imagen-centrada" src="/productos/imagenes utiles/${producto.imagen}" alt="${producto.nombre}" />
          <p>${producto.descripcion}</p>
          <p>$ ${producto.precio}</p>
          <a href="/productos/imagenes utiles/${producto.detalle}"class="ver-detalle">Ver Detalle</a>
          <button type="button" class="agregar">Agregar</button>
        </article>
    `;

  // Agrego la section el html para ir mostrando cada producto
  listadoProductos.innerHTML += html;
});

// Escucho todos los eventos click el documento
document.addEventListener("click", (event) => {
  // Si el elemento donde se hizo click contiene la clase 'agregar'
  if (event.target.classList.contains("agregar")) {
    // Busco el contenedor mas cercano que se un 'article'
    // Obtengo el id del atributo data-id
    const id = event.target.closest("article").dataset.id;

    // Busco el elemento 'producto' dentro del array producto que tenga el 'id'
    const elemento = productos.find((producto) => producto.id == id);
    console.log(elemento);

    // Uso destructuring para creo las constante con los valores del Objeto
    const { nombre, precio } = elemento;

    // Creo el objeto producto para insertar en el carrito
    const producto = {
      id: id,
      nombre: nombre,
      precio: precio,
      cantidad: 1,
    };

    carrito.push(producto);

    // Guardo en el localStorage el array carrito en formato JSON
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
});
