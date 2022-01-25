
import cipher from './cipher.js';

console.log(cipher);

// CIFRAR
function cifrar(){
  let offset = parseInt(document.getElementById("offset").value);
  let string = document.getElementById("mensaje").value;
  
  document.getElementById("output").value = cipher.encode(offset, string);
}

let botonCifrar = document.getElementById("botonCifrar");
botonCifrar.addEventListener("click", cifrar); 

//DESCIFRAR
function descifrar(){
  let offset = parseInt(document.getElementById("offset").value);
  let string = document.getElementById("mensaje").value;

  document.getElementById("output").value = cipher.decode(offset, string);
}

let botonDescifrar = document.getElementById("botonDescifrar");
botonDescifrar.addEventListener("click", descifrar); 

//COPIAR 
function copyToClipboard(){
  let mensajeCopiar = document.getElementById("output");
  mensajeCopiar.select();
  
  navigator.clipboard.writeText(mensajeCopiar.value);
}

let botonCopiar = document.getElementById("botonCopiar");
botonCopiar.addEventListener("click", copyToClipboard);

//LIMPIAR
function reset(){
  document.getElementById("formInput").reset();
  document.getElementById("formOutput").reset();
}

let botonReiniciar = document.getElementById("reiniciar");
botonReiniciar.addEventListener("click", reset);

//POP UP 1
let botonPop1 = document.getElementById("cifradoCesar");
let popWrapper1 = document.getElementById("seccionCifradoCesar");
const cerrar1 = document.getElementById("close1");

//MOSTRAR POP UP 1
botonPop1.addEventListener("click", function(){
  popWrapper1.style.display = "block";
});

//CERRAR POP UP 1
cerrar1.addEventListener("click", function(){
  popWrapper1.style.display = "none";
});

//POP UP 2
let botonPop2 = document.getElementById("uso");
let popWrapper2 = document.getElementById("seccionSugerencias");
const cerrar2 = document.getElementById("close2");

//MOSTRAR POP UP 2
botonPop2.addEventListener("click", function(){
  popWrapper2.style.display = "block";
});

//CERRAR POP UP 2
cerrar2.addEventListener("click", function(){
  popWrapper2.style.display = "none";
});
