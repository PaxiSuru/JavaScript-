//alert ("Holiwis")

/* 
 Ejemplo condicionales if / else.

 1. Declarar una variable edad y le asignamos un valor númerico.
 2. Comprobamos si edad es igual o mayor que 18, mostramos el mensaje: "Eres mayor de edad!"
 3. Si edad no es mayor que 18, mostramos el mensaje: "¡Eres un bebé!"
*/

/* let edad = 17;

if (edad >= 18){
    console.log("Eres Mayor de Edad ¡Felicidades!");
} else {
    console.log("¡Eres un bebé! Todavia usas pañal");
} */

/* 
 El operador ternario es una forma másconcisa de escribir una condición if / else.

 Trabaja con tres operandos:

 1. Una condición
 2. La expresión si la condición es verdadera.
 3. La expresión si la condición es falsa.

 Sintaxis:

 condicion ? expresionSiVerdadera : expresionSiFalsa
*/

let edad = 17;

let resultado = edad >= 18 ? "Eres mayor de edad, ya te truena la rodilla" : "Eres un bebé, aun usas pañal";

console.log(resultado)