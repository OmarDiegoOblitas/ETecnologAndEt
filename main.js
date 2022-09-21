const bob = document.querySelector("#bob");
const usd = document.querySelector("#usd");

bob.addEventListener("input", (e) => {
  usd.value = (e.target.value / 6.96).toFixed(2);
});
usd.addEventListener("input", (e) => {
  bob.value = (e.target.value * 6.96).toFixed(2);
});

function validarFormulario(e) {
  e.preventDefault();
  const nombre = document.querySelector(".nombre").value;
  const respuesta = document.getElementById("name");
  respuesta.textContent = ` ${nombre}`;
  console.log(respuesta);
}
const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", validarFormulario);
