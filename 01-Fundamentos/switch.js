//alert ("Mal día para ser fan de Pokémon")

/*
 Instrucciones Condicionales if / else if / else.

 1. Crear una variable día y asignarle un valor númerico.
 2. Con la sentencia if, else if y else, evaluar el valor de la variable día con las siguientes condiciones:

    - día === 1 //Lunes
    - día === 2 //Martes
    - día === 3 //Miercoles
    - día === 4 //Jueves
    - día === 5 //Viernes
    - día === ? //Día no valido.

    Comparamos en valor. Relacionan valores númericos con día de la semana, en este ejemplo. 

*/

/* let dia = 6;

if (dia == 1) {
    console.log("Lunes");
} else if (dia === 2) {
    console.log("Martes");
} else if (dia === 3) {
    console.log("Miercoles");
} else if (dia === 4) {
    console.log("Jueves");
} else if (dia === 5) {
    console.log("Viernes");
} else {
    console.log("Día no valido")
} */

/* 
 Switch

 Es una estructura de control de flujo condicional. (Igual que if, else if, y else) pero se utiliza cuando tenemos multiples casos posibles para evaluar una expresión.

 Es más eficiente y legible en situaciones donde se requiere comparar una sola variable con varios valores posibles.

 Sintaxis:

 switch (expresión) {
    case valor1:
        //codigo que se ejecuta
        break;
    case valor2:
        //código que se ejecuta
        break;
    case valor3:
        //codigo que se ejecuta
        break;
    default:
        //Codigo que se ejecuta por default.
 }
*/

/* let dia = 2;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
} */

/* 
 Ejercicio Switch

  1. Crear una variable Pokémon y asignarle un valor en string con el nombre de un Pokémon.

*/

let pokemon = "victini";

switch (pokemon) {
    case "pikachu":
        console.log (`Tu Pokémon es ${pokemon} ¡Y es tipo Electrico!`);
        break;
    case "victini":
        console.log(`Tu Pokémon es ${pokemon} Legendario y es tipo Fuego`);
        break;
    case "politoed":
        console.log (`Tu Pokémon es ${pokemon} y es tipo Agua`);
    default:
        console.log('¿Quien es ese Pokémon?');
}