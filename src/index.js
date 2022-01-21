import cipher from './cipher.js';

console.log(cipher);

// CIFRAR
function cifrar(){
  let string = document.getElementById("mensaje").value.toUpperCase();
  let offset = document.getElementById("offset").value;
  
  document.getElementById("output").value = cipher.encode(string, offset);
}

let botonCifrar = document.getElementById("botonCifrar");
botonCifrar.addEventListener("click", cifrar); 

//DESCIFRAR
function descifrar(){
  let string = document.getElementById("mensaje").value.toUpperCase();
  let offset = document.getElementById("offset").value;

  document.getElementById("output").value = cipher.decode(string, offset);
}

let botonDescifrar = document.getElementById("botonDescifrar");
botonDescifrar.addEventListener("click", descifrar); 

//COPIAR (NO FUNCIONA LOL)
/*let botonCopiar = document.getElementById("botonCopiar");
botonCopiar.addEventListener("click", copyToClipboard);

function copyToClipboard(){
  let mensajeCopiar = document.getElementById("output").value;
  mensajeCopiar.select();
  navigator.clipboard.writeText(mensajeCopiar.value);
}*/

//LIMPIAR
let botonReiniciar = document.getElementById("reiniciar");
botonReiniciar.addEventListener("click", reset);

function reset(){
  document.getElementById("formInput").reset();
  document.getElementById("formOutput").reset();
}




// FUNCIÓN PARA CIFRAR FRASES, en mayúsculas, respeta espacios, números y carácteres especiales
/*function code (){
  let string = document.getElementById("mensaje").value.toUpperCase();
  let offset = document.getElementById("offset").value;
  let i = 0;
  let nuevaString = "";

  while (i <= string.length){
    let letraCifrar = string.slice(i, i + 1);
    let caracterAscii = letraCifrar.charCodeAt();
    //let formulaCifrar = (caracterAscii - 65) + offset % 26 + 65;
    let formulaCifrar = caracterAscii + (offset % 26)

    if (formulaCifrar > 90){ //CONDICIONAL EN CASO DE QUE formulaCifrar>90
      let nuevaLetra = String.fromCharCode(formulaCifrar - 26);
      nuevaString += nuevaLetra;
      i++
    } else if (caracterAscii >= 65 && caracterAscii <= 90){
      let nuevaLetra = String.fromCharCode(formulaCifrar);
      nuevaString += nuevaLetra;
      i++
    } else { //ESTA PARTE TE DEVUELVE EL CARACTER ORIGINAL SI NO ES UNA LETRA MAYÚSCULA
      nuevaString += String.fromCharCode(caracterAscii);
      i++
      }
  
  if (i == string.length){
    document.getElementById("output").value = nuevaString;
  }
  }
return nuevaString; //NUEVO
}*/

// VARIABLES NECESARIAS PARA DESCIFRAR


// FUNCIÓN PARA DESCIFRAR FRASES, en mayúsculas, respeta espacios, números y carácteres especiales
/*function decode (){
  let i = 0;
  let nuevaString = "";

  while (i < string.length){
    let letraCifrar = string.slice(i, i + 1);
    let caracterAscii = letraCifrar.charCodeAt();
    let formulaCifrar = (caracterAscii - 65) - offset % 26 + 65;

    if (formulaCifrar < 65 && caracterAscii != 32){ //CONDICIONAL EN CASO DE QUE formulaCifrar<65
      let nuevaLetra = String.fromCharCode(formulaCifrar + 26);
      nuevaString += nuevaLetra;
      i++
    } else if (caracterAscii >= 65 && caracterAscii <= 90){
      let nuevaLetra = String.fromCharCode(formulaCifrar);
      nuevaString += nuevaLetra;
      i++
    } else { //ESTA PARTE TE DEVUELVE EL CARACTER ORIGINAL SI NO ES UNA LETRA MAYÚSCULA
      nuevaString += String.fromCharCode(caracterAscii);
      i++
      }
  
  if (i == string.length){
    document.getElementById("output").value = nuevaString;
  }
  }
return nuevaString; //NUEVO
}*/      


