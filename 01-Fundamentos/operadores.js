/* alert("SAQUEN SILKSONG POR FAVOR") 
 -Operadores
  Son símbolos utilizados para realizar operaciones sobre valores y variables.

  1.Aritméticos
  2.Asignación
  3.Comparación
*/

/* 
 1.- Operadoes Aritméticos
  Se utilizan para realizar cálculos matemáticos.

 2.-
  
*/

//suma (+): suma dos valores

let suma = 16 + 6; //22

console.log(suma);

//Resta (-): Resta el segundo

let resta = 54 -15; //39

console.log(resta);

//Multiplicación: (*) Multiplica los dos valores.

let multi = 4 * 8; //32
console.log(multi);

//División (/) Divide el primer valor por el segundo.

let divi = 20 / 4; //5
console.log(divi);

//Módulo (%): Devuelve el resto de la división entre dos valores.

let mod =  7 % 2; //1
let mod2 = 9 % 3; //0
console.log(mod);
console.log(mod2);

//Exponenciación (**): Eleva un número a la potencia del otro.

let expo = 3 ** 2; //9
let expo2 = 5 ** 12; //244140625
console.log(expo);
console.log(expo2);

//Incremento (++) Esto incrementa el valor en 1.
let x = 2;
x++;
console.log(x);

//Decremento (--) Decrementa el valor en 1.
let y= 6;
y--; //5
console.log(y)

/* 
 2. Operadores de Asignación

 Estos operadores asignan valores a las variables.
*/

//Asignación (=) Asigna un valor a una variable.

let w = 45;

//Asignación con suma (+=) Suma el valor a una variable y la reasigna.

w += 5; //50
console.log(w);

// Asignación con resta (-=) Resta el valor a una variable y le reasigna.

w -= 15; //35
console.log(w)

// Asignación con Multiplicación (*=) Multiplica una variable por valor y la reasigna.

w *= 2; //70
console.log(w)

// Asignación con división (/=) Divide una variable por un valor y la reasigna.

w /= 10; //7
console.log(w)

/* 
 3. Comparación
  Estos operadores comparan dos valores y devuelven 'true' o 'false'.
*/

//Igualdad (==) Compara dos valores para ver si son iguales. NOTA: Sin tener en cuenta el tipo de dato.

let valor = "5";
let compara = 5 == valor;
console.log(compara) //true

//Igualdad estricta (===) Comparar dos valores y su tipo para ver si son exactamente iguales.

compara = 5 === valor;
console.log(compara) //valor

//Desigualdad (!=) Verificar si dos valores no son iguales.

let valor1 = "10";
let valor2 = 10;

console.log(valor1 != valor2); //false

//desigualdad estricta (!==) Verifica si dos valores y sus tipos no son exactamente iguales.

valor1 = "10";
valor2 = 10;

console.log(valor1 !== valor2); //true

//Mayor que (>) verifica si el primer valor es mayor que el segundo.

compara = 10 > 5;
console.log(compara); //true

//Mayor o igual que (>=) verificar si el primer valor es mayor o igual que el segundo.

compara = 5 >= 5;
console.log(compara); //true

//Menor que (<) verifica si el primer valor es menor que el segundo.

console.log(3 < 8); //true
console.log(10 < 8); //false
console.log(5 < 5); //false

//Menor o igual que (<=) verifica si el primer valor es menor o igual que el segundo valor.

console.log(4 <= 10);
console.log(10 <= 100);
console.log(45 <= 7);
console.log(8 <= 8);