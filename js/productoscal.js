const productos = [
  {
    id: 10,
    nombre: "Zapato Escolar",
    descripcion: "Color Negro - Talle 27",
    imagen: "zapatos.webp",
    precio: 15000,
    stock: 10,
    detalle: "zapatos.html",
  },
  {
    id: 11,
    nombre: "Zapatilla",
    descripcion: "Blanca de Cuero - Talle 29",
    imagen: "zapatillas.jpg",
    precio: 13000,
    stock: 10,
    detalle: "zapatillas.html",
  },
  {
    id: 12,
    nombre: "Botas de lluvia",
    descripcion: "Color Negro - de Goma - Talle 27",
    imagen: "botas.webp",
    precio: 11000,
    stock: 11,
    detalle: "botas.html",
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
          <img class="imagen-centrada" src="/productos/imagenes calzado/${producto.imagen}" alt="${producto.nombre}" />
          <p>${producto.descripcion}</p>
          <p>$ ${producto.precio}</p>
          <a href="/productos/imagenes calzado/${producto.detalle}"class="ver-detalle">Ver Detalle</a>
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
