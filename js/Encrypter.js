output = document.getElementById("output");
input = document.getElementById("input");


// Funcion para encriptar el texto 
// "stre" es la string encriptada
function encrypt(stre) {
    stre = input.value.toLowerCase();
    if (/^[a-z+\s]+$/g.test(stre)) {
        stre = stre.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    } else {
        stre = "¡Su texto contiene caracteres especiales o no permitidos! ¡Por favor escribirlo nuevamente";
    }
    output.value = stre;
    }

// Funcion para desencriptar el texto
// "strd" es el string desencriptada
function decrypt(strd) {
    strd = input.value.toLowerCase();
    if (/^[a-z+\s]+$/g.test(strd)) {
        strd = strd.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    } else {
        strd = "¡Su texto contiene caracteres especiales o no permitidos! ¡Por favor escribirlo nuevamente";
    }
    output.value = strd;
}
// funcion para copiar el texto y desencriptarlo si lo desea el usuario
function copi(str) {
    str = output.value;
    navigator.clipboard.writeText(str);
    output.value = "";
    input.value = str;
}
