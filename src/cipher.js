const cipher = {
    encode : function(offset, string){
        if (typeof(offset) === "number" && typeof(string) === "string"){
            let i = 0;
            let nuevaString = "";

            while (i <= string.length){
                let letraCifrar = string.slice(i, i + 1);
                let caracterAscii = parseInt(letraCifrar.charCodeAt());
                
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
        } else {
            throw new TypeError("Error");
        }
    },

    decode : function(offset, string){
        if (typeof(offset) === "number" && typeof(string) === "string"){
            let i = 0;
            let nuevaString = "";
            
            while (i <= string.length){      
                let letraCifrar = string.slice(i, i + 1);
                let caracterAscii = parseInt(letraCifrar.charCodeAt());

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
        } else {
            throw new TypeError("Error");
        }
    }
}

export default cipher;