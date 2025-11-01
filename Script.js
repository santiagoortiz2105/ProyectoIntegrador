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
const form = document.getElementById("formulario");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";
    let errores = [];

    if (nombre.length === 0) errores.push("El nombre es obligatorio.");
    if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email)) errores.push("Email inválido.");
    if (!/^\d{10}$/.test(telefono)) errores.push("El teléfono debe tener 10 números.");

    if (errores.length > 0) {
      resultado.style.color = "red";
      resultado.innerHTML = errores.join("<br>");
    } else {
      resultado.style.color = "green";
      resultado.innerHTML = "";
      const div = document.createElement("div");
      div.innerHTML = `<h3>Datos enviados:</h3>
        <p>Nombre: ${nombre}</p>
        <p>Email: ${email}</p>
        <p>Teléfono: ${telefono}</p>`;
      resultado.appendChild(div);
      form.reset();
    }
  });
}
