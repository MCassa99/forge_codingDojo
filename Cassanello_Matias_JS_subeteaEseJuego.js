var altura = parseInt(prompt('Ingrese altura'));
var edad = parseInt(prompt('Ingrese edad'));

// función prompt sirve para Recaudar la informacion de altura y edad...
/* parseInt funciona para que la info de altura y edad que me da el usuario
    en String, sea convertida en Integer, para poder compararla. */

if (altura >52 || edad > 10) {
    console.log("¡Súbete, chico!");
} else {
    console.log("Lo siento, chico. Tal vez el próximo año");
}