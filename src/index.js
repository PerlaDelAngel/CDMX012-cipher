
import cipher from './cipher.js';

console.log(cipher);

// CIFRAR
function cifrar(){
  let offset = parseInt(document.getElementById("offset").value);
  let string = document.getElementById("message").value;
  
  document.getElementById("output").value = cipher.encode(offset, string);
}

let cipherButton = document.getElementById("cipherButton");
cipherButton.addEventListener("click", cifrar); 

//DESCIFRAR
function descifrar(){
  let offset = parseInt(document.getElementById("offset").value);
  let string = document.getElementById("message").value;

  document.getElementById("output").value = cipher.decode(offset, string);
}

let decipherButton = document.getElementById("decipherButton");
decipherButton.addEventListener("click", descifrar); 

//COPIAR 
function copyToClipboard(){
  let copyMessage = document.getElementById("output");
  copyMessage.select();
  
  navigator.clipboard.writeText(copyMessage.value);
}

let copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", copyToClipboard);

//LIMPIAR
function reset(){
  document.getElementById("formInput").reset();
  document.getElementById("formOutput").reset();
}

let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", reset);

//POP UP 1
let botonPop1 = document.getElementById("caesarCipherButton");
let popWrapper1 = document.getElementById("caesarCipherSection");
let cerrar1 = document.getElementById("close1");

//MOSTRAR POP UP 1
botonPop1.addEventListener("click", function(){
  popWrapper1.style.display = "block";
});

//CERRAR POP UP 1
cerrar1.addEventListener("click", function(){
  popWrapper1.style.display = "none";
});

//POP UP 2
let botonPop2 = document.getElementById("useSuggestions");
let popWrapper2 = document.getElementById("suggestionsSection");
let cerrar2 = document.getElementById("close2");

//MOSTRAR POP UP 2
botonPop2.addEventListener("click", function(){
  popWrapper2.style.display = "block";
});

//CERRAR POP UP 2
cerrar2.addEventListener("click", function(){
  popWrapper2.style.display = "none";
});
