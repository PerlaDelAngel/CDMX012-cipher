const cipher = {
    encode : function(){
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
    return nuevaString;
    },

    decode : function(){

    }
};

export default cipher;