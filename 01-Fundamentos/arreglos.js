//alert ("Funenme, tengo razón muajaja")

/* 
 Arreglos o Arrays

 Son una estructura de datos que permite almacenar multiples valores en una sola variable.

 Los elementos dentro del array tienen una posición o índice que permite acceder a ellos.

 Los indice de los datos comienzan en 0.

 Los array pueden contener datos de cualquier tipo: números, strings, booleanos, incluso arrays inidados.

 Sintaxis

 let nombreArray = [ elemento1, elemento2, elemento3 ]
*/

let frutasFavoritas = ["sandia", "manzana", "piña"];
let numerosSuerte = [5, 10, 8, 16, 35];
let meQuiereNoMeQuiere = [true, false, false, true];
let misDatos = ["Paola", "Piña", 23, false];
let anidadoArrays = [ 
    [123, 456, 789, 321] , 
    ["Gato", "Perro", "Jirafa"] , 
    [true, false, true] 
]

/* 
 array -> ["sandia" , "manzana" , "piña"]
 indice -> [ 0            1          2  ]

 array -> [ 5 , 10 , 8 , 16 , 35]
 indice ->  0   1   2    3    4 
*/

/* 
 Acceder a los elementos de un array

 Para acceder a un dato usamos la siguiente sintaxis:

 nombreArray[indice];
*/

console.log( frutasFavoritas[2] );
console.log( numerosSuerte[1] )
console.log( anidadoArrays)

/* 
 Modificar elementos del array

 Para cambiar el valor de caulquier elemento dentro del array usamos la siguiente sintaxis:

 nombreArray[indice] = nuevoDato
*/

console.log( frutasFavoritas )

frutasFavoritas[0] = "pera"

console.log( frutasFavoritas )

/* 
 Metodos utiles para los arrays

 Los metodos son "funciones" que trabajan con los datos de los arrays su sintaxis es la siguiente:

 1. nombreArray.nombreMetodo
 2.nombreArray.nombreMetodo(parametro)
*/

/* 
 length nos dice cuantos elementos tiene un array
*/

console.log(frutasFavoritas.length)
console.log(numerosSuerte.length)
console.log(anidadoArrays[0].length)

/* 
 push() - Agrega un elemento al final del array.

 nombreArray.push(dato)
*/

console.log(frutasFavoritas);

frutasFavoritas.push("Maracuya");

console.log(frutasFavoritas);

/* 
 pop() - Eliminamos el ultimo elemento del array u lo devuelve.

 nombreArray.pop()
*/

console.log(numerosSuerte);

numerosSuerte.pop()

console.log(numerosSuerte);