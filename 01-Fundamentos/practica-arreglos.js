//alert ("Viva Bruno Mars")

/* 
 Práctica Arreglos - Los Mugiwara (One Piece)

  1. Definir un arreglo llamado 'Mugiwaras' que contanga 5 de los integrantes de los Mugiwara de One Piece y muestralo en la consola.

  2. Agrega un nuevo Mugiwara al final del array.

  3. Elimina al primer Mugiwara.

  4. Cambiamos al 3er Mugiwara por otro distinto.

  5. Ordenar Alfabeticamente el Array 'Muwigara'.

  6. Crear un nuevo array llamado enemigos, con los ultimos 3 'heroes' del array con un método.

  7. Mostrar por consola los dos arrays: heroes y enemigos.
*/

let Mugiwaras = ["Luffy", "Zoro", "Sanji", "Franky", "Jinbe"];

console.log(Mugiwaras);

Mugiwaras.push("Robin");

console.log(Mugiwaras);

console.log(Mugiwaras);

Mugiwaras.shift();

console.log(Mugiwaras);

console.log(Mugiwaras);

Mugiwaras.splice(2, 1, "Chopper");

console.log(Mugiwaras);

console.log(Mugiwaras);

Mugiwaras.sort();

console.log(Mugiwaras);

let enemigos =  Mugiwaras.slice(2,5);

console.log(Mugiwaras);
console.log(enemigos);


