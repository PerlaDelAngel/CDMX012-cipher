import cipher from './cipher.js';

console.log(cipher);

// CIFRAR
function cifrar(){
  let offset = document.getElementById("offset").value;
  let string = document.getElementById("mensaje").value.toUpperCase();
  
  document.getElementById("output").value = cipher.encode(offset, string);
}

let botonCifrar = document.getElementById("botonCifrar");
botonCifrar.addEventListener("click", cifrar); 

//DESCIFRAR
function descifrar(){
  let offset = document.getElementById("offset").value;
  let string = document.getElementById("mensaje").value.toUpperCase();

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
