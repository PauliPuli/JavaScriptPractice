let name = document.querySelector("#nombre");
let asunto = document.querySelector("#asunto");
let msn = document.querySelector("#mensaje");
let boton = document.querySelector("#botton");

boton.addEventListener("click", function (e) {
  e.preventDefault();
  limpiardatos();
  let valorName = name.value;
  let valorSubject = asunto.value;
  let valorMessage = msn.value;
  //validacion//
  if (valorName == "") {
    let errorName = document.querySelector(".errorNombre");
    let errorSubject = document.querySelector(".errorAsunto");
    let errorMsn = document.querySelector(".errorMensaje");

    errorName.innerHTML = "El Nombre es requerido";
    errorSubject.innerHTML = "El asunto es requerido";
    errorMsn.innerHTML = "El mensaje es requerido";
  } 
  else {
    let enviado = document.querySelector(".exitoso");
    enviado.innerHTML = "Mensaje Enviado con éxito";
  }
  validar(valorName);
});
function limpiardatos() {
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorAsunto").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
}

function validar() {
  let valorName = name.value;
  let okvalidacion = true;
  let validacionNombre = /^[a-zA-Z\s]+$/g.test(valorName);

  if (validacionNombre === false) {
    document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido" 
    okvalidacion = false;
  }}
