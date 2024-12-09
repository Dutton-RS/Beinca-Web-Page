document.addEventListener("DOMContentLoaded", renderizarCarrito);

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const items = document.querySelector(".items");

function renderizarCarrito() {
  items.innerHTML = "";

  if (carrito.length === 0) {
    items.innerHTML = "<tr><td colspan='4'>El carrito esta vacío</td></tr>";
  } else {
  }
  carrito.forEach((item) => {
    const html = `
        <tr data-id="${item.id}">
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>$ ${item.precio}</td>
            <td><button class="eliminar-item" data-id="${item.id}">Eliminar</button></td>
        </tr>
    `;

    items.innerHTML += html;
  });

  actualizarTotal();
  actualizarCantidadTotal();
  agregarEventosEliminar();
}

//-----------------Calcular Total $----------------------------------------------------
function calcularTotal() {
  return carrito
    .reduce((total, item) => (total += item.precio * item.cantidad), 0)
    .toFixed(2);
}

//-----------------Actualiza el Total----------------------------------------------------
function actualizarTotal() {
  const totalCarrito = document.getElementById("Total");
  totalCarrito.textContent = `${calcularTotal()}`;
}

//-----------------Calcular Total Q----------------------------------------------------
function calcularCantidadTotal() {
  return carrito.reduce((total, item) => (total += item.cantidad), 0);
}

//-----------------Actualiza el Total Q----------------------------------------------------
function actualizarCantidadTotal() {
  const cantidadTotalCarrito = document.getElementById("CantidadTotal");
  cantidadTotalCarrito.textContent = `${calcularCantidadTotal()}`;
}

//-----------------Vacía el Carrito---------------------------------------------------
document
  .getElementById("vaciar-carrito")
  .addEventListener("click", function () {
    carrito = [];
    localStorage.removeItem("carrito");
    renderizarCarrito();
  });

//-----------------Eliminar por Item----------------------------------------------------
//--------------------------------------------------------------------------------------

function eliminarItem(id) {
  carrito = carrito.filter((item) => item.id !== id);
  localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardar cambios en localStorage
  renderizarCarrito(); // Actualizar la tabla
}

document.querySelectorAll(".eliminar-item").forEach((boton) => {
  boton.addEventListener("click", () => {
    var idItem = boton.dataset.id;
    eliminarItem(idItem);
  });
});

function agregarEventosEliminar() {
  const botonesEliminar = document.querySelectorAll(".eliminar-item");
  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      eliminarItem(id);
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  renderizarCarrito();
});
