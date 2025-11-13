// ----- Carrusel -----
const imagenes = ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg","img/gimnasio.jpg", "img/img6.jpg", "img/img7.jpg", "img/img8.jpg"];
let indice = 0;

const img = document.getElementById("imagen");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

if (img) {
  next.addEventListener("click", () => {
    indice = (indice + 1) % imagenes.length;
    img.src = imagenes[indice];
  });

  prev.addEventListener("click", () => {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    img.src = imagenes[indice];
  });
}

// ----- Validación formulario -----
var form = document.getElementById("formulario");
var resultado = document.getElementById("resultado");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    resultado.innerHTML = "";

    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();

    var errores = [];

    // Validaciones
    if (nombre.length === 0) {
      errores.push("El nombre es obligatorio.");
    }
    if (nombre.length > 30) {
      errores.push("El nombre no debe superar los 30 caracteres.");
    }

    var emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
    if (!emailRegex.test(email)) {
      errores.push("El email no es válido.");
    }

    var telRegex = /^[0-9\s-]{7,15}$/;
    if (!telRegex.test(telefono)) {
      errores.push("El teléfono debe tener entre 7 y 15 dígitos.");
    }

    if (mensaje.length > 200) {
      errores.push("El mensaje no debe superar los 200 caracteres.");
    }

    // Mostrar errores o aciertos
    if (errores.length > 0) {
      var textoErrores = "";
      for (var i = 0; i < errores.length; i++) {
        textoErrores += "<div>" + errores[i] + "</div>";
      }
      resultado.innerHTML = textoErrores;
      resultado.classList.remove("ok");
    } else {
      resultado.innerHTML = "";
      var div = document.createElement("div");
      div.className = "ok";
      div.innerHTML =
        "<h3>Datos enviados correctamente</h3>" +
        "<p><strong>Nombre:</strong> " + nombre + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Teléfono:</strong> " + telefono + "</p>" +
        "<p><strong>Mensaje:</strong> " + (mensaje !== "" ? mensaje : "(sin mensaje)") + "</p>";
      resultado.appendChild(div);
      form.reset();
    }
  });
}

