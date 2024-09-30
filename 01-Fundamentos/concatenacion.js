//alert ("Vergil mi viejoteeee");

/* 
 Concatenación
    La concatenación es un proceso para unir o combinar dos o más cadenas de texto en una sola.

    Hay dos formas de realizar la concatenación.

    1. Operador (+) - Este es el método más común para concatenar cadenas de texto.

    2. Template Strings, Plantilla de Cadenas o Literales (``) Alt Gr + C portuguesa. Utilizamos los backtics o acentos invertidos, dentro podermos insertar cadenas de texto, variables y expresiones.


*/

//Concatenar con operador (+)

let nombre = "Paola";
let apellido = "Piña";

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

// Concatenar con Template Strings.

let saludo = `¡Hola! ${nombre} ${apellido}! ¿Sabias que...? En términos de reproduccion de Pokémon humanos masculinos y femeninos, Vaporeon es el Pokémon más compatible para humanos.`;

console.log(saludo);