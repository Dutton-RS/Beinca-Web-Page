const productos = [
  {
    id: 1,
    nombre: "Charlie & the Chocolate Factory",
    descripcion: "Libro",
    imagen: "charlie.webp",
    precio: 15000,
    stock: 20,
    detalle: "charlie.html",
  },
  {
    id: 2,
    nombre: "Tom's Brown School Days",
    descripcion: "Libro",
    imagen: "tombrowns.webp",
    precio: 13000,
    stock: 15,
    detalle: "tombrowns.html",
  },
  {
    id: 3,
    nombre: "To Kill a Mockingbird",
    descripcion: "Libro",
    imagen: "mokingbird.webp",
    precio: 11000,
    stock: 12,
    detalle: "mokingbird.html",
  },
  {
    id: 4,
    nombre: "Macbeth - Shakespeare",
    descripcion: "Libro",
    imagen: "macbeth.webp",
    precio: 15000,
    stock: 16,
    detalle: "macbeth.html",
  },
  {
    id: 5,
    nombre: "El Aleph - J.L.Borges",
    descripcion: "Libro",
    imagen: "elaleph.webp",
    precio: 18000,
    stock: 9,
    detalle: "elaleph.html",
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
          <img class="imagen-centrada" src="/productos/imagenes libros/${producto.imagen}" alt="${producto.nombre}" />
          <p>${producto.descripcion}</p>
          <p>$ ${producto.precio}</p>
          <a href="/productos/imagenes libros/${producto.detalle}"class="ver-detalle">Ver Detalle</a>
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
