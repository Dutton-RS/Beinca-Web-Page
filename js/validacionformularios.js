//---------------Provincia-y-Localidad------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const provInput = document.getElementById("prov");
  const locInput = document.getElementById("loc");

  form.addEventListener("submit", function (e) {
    let esValido = true;

    // Validar Provincia
    if (provInput.value.trim() === "") {
      alert("Por favor, completa el campo Provincia.");
      esValido = false;
    } else if (provInput.value.trim().length < 3) {
      alert("El campo Provincia debe tener al menos 3 letras.");
      esValido = false;
    }

    // Validar Localidad
    if (locInput.value.trim() === "") {
      alert("Por favor, completa el campo Localidad.");
      esValido = false;
    } else if (locInput.value.trim().length < 3) {
      alert("El campo Localidad debe tener al menos 3 letras.");
      esValido = false;
    }

    if (!esValido) {
      e.preventDefault(); // Detener el envío del formulario si hay errores
    }
  });
});

//---------------Perfil-(Registrarse)------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const fnameInput = document.getElementById("fname");
  const lnameInput = document.getElementById("lname");
  const celInput = document.getElementById("cel");
  const passInput = document.getElementById("pass");

  form.addEventListener("submit", function (e) {
    let esValido = true;

    // Validar Provincia
    if (fnameInput.value.trim() === "") {
      alert("Por favor, completa con tu Nombre.");
      esValido = false;
    } else if (fnameInput.value.trim().length < 3) {
      alert("Tu nombre debe tener al menos 3 letras.");
      esValido = false;
    }

    // Validar Localidad
    if (lnameInput.value.trim() === "") {
      alert("Por favor, completa con tu Apellido.");
      esValido = false;
    } else if (lnameInput.value.trim().length < 3) {
      alert("Tu Apellido debe tener al menos 3 letras.");
      esValido = false;
    }

    // Validar Celular
    if (celInput.value.trim() === "") {
      alert("Por favor, ingresa un Numero.");
      esValido = false;
    } else if (celInput.value.trim().length < 3) {
      alert("Por favor, ingresa un Numero Valido.");
      esValido = false;
    }

    // Validar Contraseña
    if (passInput.value.trim() === "") {
      alert("Por favor, ingresa una Contraseña de 8 dígitos o mas.");
      esValido = false;
    } else if (passInput.value.trim().length < 8) {
      alert("La contraseña debe tener 8 dígitos o mas.");
      esValido = false;
    }

    if (!esValido) {
      e.preventDefault(); // Detener el envío del formulario si hay errores
    }
  });
});

//---------------Inicio Sesión------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const usuarioInput = document.getElementById("usuario");
  const passInput = document.getElementById("pass");

  form.addEventListener("submit", function (e) {
    let esValido = true;

    // Validar Usuario(Mail)
    if (usuarioInput.value.trim() === "") {
      alert("Por favor, ingresa tu Correo Electrónico");
      esValido = false;
    } else if (
      !/^[a-zA-Z0-9._%=-]+@[a-zA=Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        usuarioInput.value.trim()
      )
    ) {
      alert("Ingresa un Correo Electrónico valido.");
      esValido = false;
    }

    // Validar Contraseña
    if (passInput.value.trim() === "") {
      alert("Por favor, ingresa una Contraseña de 8 dígitos o mas.");
      esValido = false;
    } else if (passInput.value.trim().length < 8) {
      alert("La contraseña debe tener 8 dígitos o mas.");
      esValido = false;
    }

    if (!esValido) {
      e.preventDefault(); // Detener el envío del formulario si hay errores
    }
  });
});

//------------------Provincia-y-Localidad------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const provInput = document.getElementById("prov");
  const locInput = document.getElementById("loc");

  form.addEventListener("submit", function (e) {
    let esValido = true;

    // Validar Provincia
    if (provInput.value.trim() === "") {
      alert("Por favor, completa el campo Provincia.");
      esValido = false;
    } else if (provInput.value.trim().length < 3) {
      alert("El campo Provincia debe tener al menos 3 letras.");
      esValido = false;
    }

    // Validar Localidad
    if (locInput.value.trim() === "") {
      alert("Por favor, completa el campo Localidad.");
      esValido = false;
    } else if (locInput.value.trim().length < 3) {
      alert("El campo Localidad debe tener al menos 3 letras.");
      esValido = false;
    }

    if (!esValido) {
      e.preventDefault(); // Detener el envío del formulario si hay errores
    }
  });
});

//---------------Perfil-(Registrarse)------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const fnameInput = document.getElementById("fname");
  const lnameInput = document.getElementById("lname");
  const celInput = document.getElementById("cel");
  const passInput = document.getElementById("pass");

  form.addEventListener("submit", function (e) {
    let esValido = true;

    // Validar Provincia
    if (fnameInput.value.trim() === "") {
      alert("Por favor, completa con tu Nombre.");
      esValido = false;
    } else if (fnameInput.value.trim().length < 3) {
      alert("Tu nombre debe tener al menos 3 letras.");
      esValido = false;
    }

    // Validar Localidad
    if (lnameInput.value.trim() === "") {
      alert("Por favor, completa con tu Apellido.");
      esValido = false;
    } else if (lnameInput.value.trim().length < 3) {
      alert("Tu Apellido debe tener al menos 3 letras.");
      esValido = false;
    }

    // Validar Celular
    if (celInput.value.trim() === "") {
      alert("Por favor, ingresa un Numero.");
      esValido = false;
    } else if (celInput.value.trim().length < 3) {
      alert("Por favor, ingresa un Numero Valido.");
      esValido = false;
    }

    // Validar Contraseña
    if (passInput.value.trim() === "") {
      alert("Por favor, ingresa una Contraseña de 8 dígitos o mas.");
      esValido = false;
    } else if (passInput.value.trim().length < 8) {
      alert("La contraseña debe tener 8 dígitos o mas.");
      esValido = false;
    }

    if (!esValido) {
      e.preventDefault(); // Detener el envío del formulario si hay errores
    }
  });
});

//---------------Vender Art.-de-Librería (Formulario de Ingreso)-Cantidad-y-Precio----------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const qInput = document.getElementById("q");
  const preInput = document.getElementById("pre");

  form.addEventListener("submit", function (e) {
    let esValido = true;

    // Validar Cantidad
    if (qInput.value.trim() === "") {
      alert("Por favor, ingresa la Cantidad.");
      esValido = false;
    } else if (qInput.value.trim().length < 1) {
      alert("La Cantidad debe ser 1 o mas.");
      esValido = false;
    }

    // Validar Precio
    if (preInput.value.trim() === "") {
      alert("Por favor, ingresa el Precio.");
      esValido = false;
    } else if (preInput.value.trim().length < 3) {
      alert("El precio debe ser mayor a 3 dígitos");
      esValido = false;
    }

    if (!esValido) {
      e.preventDefault(); // Detener el envío del formulario si hay errores
    }
  });
});

//---------------Vender Calzado (Formulario de Ingreso)-Precio----------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const preInput = document.getElementById("pre");

  form.addEventListener("submit", function (e) {
    let esValido = true;

    // Validar Precio
    if (preInput.value.trim() === "") {
      alert("Por favor, ingresa el Precio.");
      esValido = false;
    } else if (preInput.value.trim().length < 3) {
      alert("El precio debe ser mayor a 3 dígitos");
      esValido = false;
    }

    if (!esValido) {
      e.preventDefault(); // Detener el envío del formulario si hay errores
    }
  });
});

//---------------Vender Indumentaria (Formulario de Ingreso)-Precio----------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const preInput = document.getElementById("pre");

  form.addEventListener("submit", function (e) {
    let esValido = true;

    // Validar Precio
    if (preInput.value.trim() === "") {
      alert("Por favor, ingresa el Precio.");
      esValido = false;
    } else if (preInput.value.trim().length < 3) {
      alert("El precio debe ser mayor a 3 dígitos");
      esValido = false;
    }

    if (!esValido) {
      e.preventDefault(); // Detener el envío del formulario si hay errores
    }
  });
});

//---------------Vender Libros (Formulario de Ingreso)-Titulo-y-Precio----------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const titInput = document.getElementById("tit");
  const preInput = document.getElementById("pre");

  form.addEventListener("submit", function (e) {
    let esValido = true;

    // Validar Cantidad
    if (titInput.value.trim() === "") {
      alert("Por favor, ingresa el Titulo del Libro.");
      esValido = false;
    } else if (titInput.value.trim().length < 2) {
      alert("El Titulo debe ser Valido");
      esValido = false;
    }

    // Validar Precio
    if (preInput.value.trim() === "") {
      alert("Por favor, ingresa el Precio.");
      esValido = false;
    } else if (preInput.value.trim().length < 3) {
      alert("El precio debe ser mayor a 3 dígitos");
      esValido = false;
    }

    if (!esValido) {
      e.preventDefault(); // Detener el envío del formulario si hay errores
    }
  });
});
