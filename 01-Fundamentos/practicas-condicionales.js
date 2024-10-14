//alert ("Si estas leyendo esto, sabes leer");

 /* 
  Práctica Condicionales.

  Sigue las instrucciones y escribe el código.

  1.Declarar una variable llamada edad y asignarle un valor númerico.

  2.Imprimir por consola el valor de la variable.
  
  3.Con el bloque "If" evaluar si "edad" es mayor o igual que 18.  
  
  4.Si esta condicion es verdadera (true) se debe mostrar por consola el mensaje "Eres mayor de edad"

  5. Agregar otra condición con el bloque "else if" evaluar si "edad" es menor que 18.

  6.Si esta condicion es "True", mostrar pro consola el mensaje: "Eres menor de 18"

  7. Con el bloque "else", evaluar cualquier otro dato y en caso de que las condiciones sean "falsas",

  8. Dentro de los bloques "If, else if y else" cambiar los 'console.log' por alerts.

  9. Cambiar el valor de la varieable "edad" por un "promt" para que este dato sea introducido por el usuario. promt("¿Qué edad tienes?")

 */

let edad = prompt("¿Que edad tienes?");

console.log(prompt);

if (edad > 18) {
    alert("¡Eres mayor de edad! Felicidades, ya le debes al SAT")
} else if (edad < 18) {
    alert("Eres menor de edad, aún no le debes al SAT.")
} else {
    alert("¡Eres un Alien! Ya llamamos al Área 51")
}

