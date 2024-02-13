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
  if(validar(valorName, valorSubject,valorMessage)){
    let enviado = document.querySelector(".exitoso");
    enviado.innerHTML = "Mensaje Enviado con éxito";
  }
  if (valorName == ""|| valorSubject =="" || valorMessage =="") {
    let errorName = document.querySelector(".errorNombre");
    let errorSubject = document.querySelector(".errorAsunto");
    let errorMsn = document.querySelector(".errorMensaje");

    errorName.innerHTML = "El Nombre es requerido";
    errorSubject.innerHTML = "El asunto es requerido";
    errorMsn.innerHTML = "El mensaje es requerido";
  } 
});
function limpiardatos() {
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorAsunto").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
  document.querySelector(".exitoso").innerHTML = "";
}

function validar(valorName,valorSubject) {
  let okvalidacion = true;
  if (!/^[a-zA-Z\s]+$/g.test(valorName)) {
    document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido" 
    okvalidacion = false;
  }  if (!/^[a-zA-Z\s]+$/g.test(valorSubject)) {
    document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido" 
    okvalidacion = false;
  }
  return okvalidacion;
}
