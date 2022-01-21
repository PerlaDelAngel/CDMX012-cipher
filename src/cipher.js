const cipher = {
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
            let formulaCifrar = (caracterAscii - 65) - offset % 26 + 65;
          
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
}

export default cipher;