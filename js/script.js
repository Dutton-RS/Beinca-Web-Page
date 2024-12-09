const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// console.log(carrito, typeof carrito);

const { id, nombre, precio } = productos[1];
// console.log(id, nombre, precio)

const producto = {
  id: id,
  nombre: nombre,
  precio: precio,
  cantidad: 1,
};

console.log(producto);

carrito.push(producto);
console.log(carrito);

localStorage.setItem("carrito", JSON.stringify(carrito));

document.getElementById("lista-carrito").addEventListener("click", function () {
  localStorage.removeItem("carrito");
  actualizarCarrito();
});

document
  .getElementById("listado-productos")
  .addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") var idProducto = e.target.dataset.id;
    var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito = carrito.filter(function (producto) {
      return producto.id !== idProducto;
    });
    localStorage.setItem("carrito", JSON - stringify(carrito));
    actualizarCarrito();
  });

const form = document.querySelector("form");
