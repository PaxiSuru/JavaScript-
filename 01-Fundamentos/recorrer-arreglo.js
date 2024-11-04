//alert ("¡Hola Profe! :D")

/* 
 Recorrer Arreglos

 Podemos acceder a cada dato de un arreglo a través de su índice. Ya sea para obtener el dato o hacer algo con ese índice.


*/

//Definir un array

/* let colores = ["Naranja", "Amarillo", "Turquesa", "Verde Pastel", "Café"] */

//Indices          0          1            2

//Imprimimos por consola los datos del array.

/* console.log(colores[0])
console.log(colores[1])
console.log(colores[2]) */

//console.log( colores.length )

/* colores.push("Rojo Pastel"); */

//Recorrer el array con el bucle for. Mientras i sea menor que 3, i se seguira ejecutando. ¿Porque "i"? Porque al principio vale 1

/* for ( let i = 0 ; i < colores.length ; i++ ) {
    //codigo que se ejecuta.
    console.log( colores [i] )
} */

/* 
 Bucle for...  of

 Es una manera simple y moderna de recorrer arrays en JS. Este nos permite acceder directamente al valor de cada elemento sin necesidad de usar indices.

 Sintaxis

 for () {
    //Codigo a ejecutar por cada elemento en el array.
 }
*/

/* for ( const color of colores ) {
    //Codigo a ejecutar
    console.log( `Colorcito: ${color}` )
} */

/* Ejercicio Nuevo */

let Mugiwaras = ["Luffy", "Zoro", "Nami", "Usopp", "Chopper", "Franky", "Sanji", "Robin", "Jimbe"]

for (const color of Mugiwaras) {
    console.log( `Top Mejores Mugiwaras: ${color}` )
}