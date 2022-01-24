/*const cipher = {
    encode : function(offset, string){
        let i = 0;
        let nuevaString = "";

        while (i <= string.length){
            let letraCifrar = string.slice(i, i + 1);
            let caracterAscii = letraCifrar.charCodeAt();
            let formulaCifrar = (caracterAscii - 65) + offset % 26 + 65;

            if (formulaCifrar > 90){ //EN CASO DE QUE SE SALGA DEL RANGO DE LETRAS MAYÚSCULAS (>90)
                  let nuevaLetra = String.fromCharCode(formulaCifrar - 26);
                 nuevaString += nuevaLetra;
                  i++
             } else if (caracterAscii >= 65 && caracterAscii <= 90){ //PARA LAS LETRAS MAYÚSCULAS
                let nuevaLetra = String.fromCharCode(formulaCifrar);
                nuevaString += nuevaLetra;
                i++
             } else { //ESTA PARTE TE DEVUELVE EL CARACTER ORIGINAL SI NO ENTRA EN LAS CONDICIONES ANTERIROES
                nuevaString += String.fromCharCode(caracterAscii);
                i++
            }
            
            if (i == string.length){
                return nuevaString;
            }
        }
    },

    decode : function(offset, string){
        let i = 0;
        let nuevaString = "";
          
        while (i <= string.length){
            let letraCifrar = string.slice(i, i + 1);
            let caracterAscii = letraCifrar.charCodeAt();
            //let formulaCifrar = (caracterAscii - 65) - offset % 26 + 65;
            let formulaCifrar = caracterAscii - (offset % 26);
          
            if (formulaCifrar < 65 && caracterAscii != 32){  //EN CASO DE QUE SE SALGA DEL RANGO DE LETRAS MAYÚSCULAS Y SEA DIFERENTE A UN ESPACIO
                let nuevaLetra = String.fromCharCode(formulaCifrar + 26);
                nuevaString += nuevaLetra;
                i++
            } else if (caracterAscii >= 65 && caracterAscii <= 90){ //RANGO PARA LETRAS MAYÚSCULAS
                let nuevaLetra = String.fromCharCode(formulaCifrar);
                nuevaString += nuevaLetra;
                i++
            } else { //ESTA PARTE TE DEVUELVE EL CARACTER ORIGINAL SI NO ENTRA EN LAS CONDICIONES ANTERIORES
                nuevaString += String.fromCharCode(caracterAscii);
                i++
            }
            
            if (i == string.length){
              return nuevaString;
            }
        }
    }      
}*/

const cipher = {
    encode : function(offset, string){
        let i = 0;
        let nuevaString = "";

        while (i <= string.length){
            let letraCifrar = string.slice(i, i + 1);
            let caracterAscii = letraCifrar.charCodeAt();

            if (caracterAscii >= 65 && caracterAscii <= 90){ //MAYÚSCULAS  
                let formulaCifrar = ((caracterAscii - 65) + offset) % 26 + 65;
                let nuevaLetra = String.fromCharCode(formulaCifrar);
                nuevaString += nuevaLetra;
                i++
            } else if (caracterAscii >= 97 && caracterAscii <= 122){ //MINÚSCULAS
                let formulaCifrar = ((caracterAscii - 97 + offset) % 26) + 97;
                let nuevaLetra = String.fromCharCode(formulaCifrar);
                nuevaString += nuevaLetra;
                i++
            } else {
                nuevaString += String.fromCharCode(caracterAscii);
                i++
            }

            if (i == string.length){
            return nuevaString;
             }
         }
    },

    decode : function(offset, string){
        let i = 0;
        let nuevaString = "";
          
        while (i <= string.length){
            let letraCifrar = string.slice(i, i + 1);
            let caracterAscii = Number(letraCifrar.charCodeAt());

            if (caracterAscii >= 65 && caracterAscii <= 90){ //MAYÚSCULAS  YA SIRVE WOOO
                let formulaCifrar = ((caracterAscii - 65) - offset) % 26 + 65;
                    if (formulaCifrar < 65){
                        formulaCifrar = formulaCifrar + 26;
                     }
                let nuevaLetra = String.fromCharCode(formulaCifrar);
                nuevaString += nuevaLetra;
                i++
            } else if (caracterAscii >= 97 && caracterAscii <= 122){ //MINÚSCULAS
                let formulaCifrar = ((caracterAscii - 97) - offset) % 26 + 97;
                    if (formulaCifrar < 97){
                        formulaCifrar = formulaCifrar + 26;
                    }
                let nuevaLetra = String.fromCharCode(formulaCifrar);
                nuevaString += nuevaLetra;
                i++
            } else {
                nuevaString += String.fromCharCode(caracterAscii);
                i++
            }

            if (i == string.length){
            return nuevaString;
             }
         }
        
    }
}

export default cipher;