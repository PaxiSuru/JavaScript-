//alert ("Arriba el Raguetton viejito xd")

/* 
 Ciclos o Bucles

 Nos permiten ejecutar un bloque de código varias veces.

 -Facilita tareas repetitivas y ahorra tiempo y código.
*/

/* 
 1. Flor

 Este bicle tiene 3 partes clave:
    1- Inicialización de una variable.
    2- Condición que evalua el valor de la variable.
    3- Actualización del valor de la variable.

 Sintaxis

 for ( inicializacion ; condición ; actualización) {
    //Código que se ejecuta.
 }
*/
for ( let i = 1 ; i <= 10 ; i++ ) {
  //Codigo que se ejecuta
 console.log("Mensaje: " + i)
}

for ( let i = 10 ; i >=- 0 ; i-- ) {
   console.log(i)
  }

  /* 
   Contador
  */

let contador = 0; //Definición

while ( contador < 3 ) {
    console.log("Gato " + contador);

    contador++;
}

let veces = 5;

while ( veces > 2 ) {
    console.log("Veces: " + veces);

    veces--;
}

/* 
 3. do...while

 Es similar a while, pero garantiza que el bloque de codigo se ejecute al menos una vez.

 Primero se ejecuta el codigo y luego se verifica la condición.

 -Sintaxis:

 do {
  //Codigo que se ejecuta
 } while (condición);


*/

let numero = 6;

do {
    console.log("El número es: " + numero);

    numero++;
} while (numero < 6);
