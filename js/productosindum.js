let productos = []; // Variable global
let carrito = JSON.parse(localStorage.getItem("carrito")) || []; // Inicializamos carrito desde localStorage

const cargarProductos = async () => {
  try {
    const response = await fetch("/json/indumentaria.json");

    if (!response.ok) {
      throw new Error(`Error al cargar productos: ${response.status}`);
    }

    productos = await response.json();
    mostrarProductos(productos);
  } catch (error) {
    console.error("Error:", error);
  }
};

const mostrarProductos = (productos) => {
  const listadoProductos = document.querySelector(".listado-productos");

  if (!listadoProductos) {
    console.error(
      "No se encontró el contenedor '.listado-productos' en el DOM."
    );
    return;
  }

  // Limpiar contenido previo
  listadoProductos.innerHTML = "<h2>Productos</h2>";

  // Generar HTML dinámicamente
  productos.forEach((producto) => {
    const html = `
      <article data-id="${producto.id}">
        <h3>${producto.nombre}</h3>
        <img class="imagen-centrada" src="/productos/imagenes indumentaria/${producto.imagen}" alt="${producto.nombre}" />
        <p>${producto.descripcion}</p>
        <p>$ ${producto.precio}</p>
        <a href="/productos/imagenes indumentaria/${producto.detalle}" class="ver-detalle">Ver Detalle</a>
        <button type="button" class="agregar">Agregar</button>
      </article>
    `;
    listadoProductos.innerHTML += html;
  });
};

// Cargar productos al inicio
cargarProductos();

// Escuchar eventos de click
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("agregar")) {
    const id = event.target.closest("article").dataset.id;

    const elemento = productos.find((producto) => producto.id == id);
    console.log(elemento);

    if (!elemento) {
      console.error("Producto no encontrado");
      return;
    }

    const { nombre, precio } = elemento;

    const productoEnCarrito = carrito.find((item) => item.id === id);

    if (productoEnCarrito) {
      productoEnCarrito.cantidad += 1;
    } else {
      carrito.push({
        id: id,
        nombre: nombre,
        precio: precio,
        cantidad: 1,
      });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log("Carrito actualizado:", carrito);
  }
});
