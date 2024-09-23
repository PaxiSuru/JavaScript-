/* alert("Tipos Enlazados"); */

/* 
 Tipo de Datos

 Los tipos de datos se dividen en dos categorías: Primitivos y Complejos.

 1. Tipo de Datos Primitivos.

    Este tipo de datos, son datos basicos que no se consideran "objetos" y no tienen "método".
    
    -Number o Número:
    Es la representación de valores númericos ya sean enteros o con decímales (punto flotante)
    
    -String o Cadena de Caracteres
    Se usa para representar texto. El tesxto se coloca entre comillas dobles o simples "texto" 'text'

    -Boolean o Boleanos
    Estos representan un valor lógico que puede ser 'true' o 'false'

    -Underfined o Indefinido
    Es el valor que se le asigna a una variable que ha sido declarada

 2. Tipos de Datos Complejos.

    -Array o Arreglo
    Es un conjunto de datos que los almacena en una lista ordenada elementos. Los datos dentro de los arreglos se escriben entre corchetes [] y separados por ','

    -Object.
    Este tipo de dato es un conjunto de multiples pares 'clave' - 'valor'. Se escriben entre llaves {} y separados por comas ','

    -Functions o Funciones
    Es un tipo de dato que puede ser "invocado", se declaran con la palabra reservada "function" y el código que ejecutan entre {}

*/

/* Numbers */

let miNumero = 8;
let MiNumeroDecimal = 8.24;

console.log(miNumero);
console.log(MiNumeroDecimal);

/* Strings */

let miNombre = 'Paola';
let miApellido = 'Piña';

console.log(miNombre);
console.log(miApellido);

/* Booleans */

let miVerdad = true;
let miMentira = false;

console.log(miVerdad);
console.log(miMentira);

/* Undefined */

let x; //Esto es declarar una variable sin inicializar.

console.log(x); // undefined (Sin definir)

/* x = prompt("¿Que Pokémon es tu favorito?"); */

console.log(x); //Valor que el usuario introduzca.

/* Array */

let misFrutasFavoritas = ["Piña", "Uvas", "Manzana"];
let misNumerosSuerte = ["12", "24" ,"8"];
let otroArray = ["Puchinguito", 56, true];

console.log(misFrutasFavoritas);
console.log(misNumerosSuerte);
console.log(otroArray);

/* Objeto */

let persona = {
   // clave : valor,
   nombre : "Paola",
   edad : 23,
   colorCabello : "castaño",
   colorOjos : "cafe",
   altura : 1.80,
   peso : undefined,
   vivo : true,
   novio : true,
}

console.log(persona);
//Accedemos a los datos de una clave.
//Con la notación de punto .
console.log(persona.nombre);
console.log(persona.altura);
console.log(persona.novio);

/* Function */

let mensajito = function () {
   //Pasamos el código que ejecuta la función
   console.log("Este es un mensaje lanzado por una función");
}

//Invocamos la función
mensajito();