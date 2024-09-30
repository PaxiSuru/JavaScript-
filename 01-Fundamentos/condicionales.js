//alert("¡TUUU LA MISMA DE AYER, LA INCONDICIONAAAL");

/* 
 Condicionales
    Son estructuras que permiten ejecutar diferentes bloques de código en función de si, una condición (expresión) es verdadera o falsa.

    Estas estructuras controlan el flujo de los programas.

    1. if - (si condicional) {
         El bloque if se ejecuta solo si es la condición que se le pasa es verdadera 'true'. Si la condición es falsa 'false' el código dentro de if se omite.
        
        if (condición) {
        Codigo que se ejecuta si es verdadera.
        }

        2.else - (De lo contrario)
         Este bloque ejecuta un codigo cuando las condiciones anteriores anteriores no son verdaderas.

         (Se pone despues del if) else {
          códigoo que se ejecuta en caso de que la condición anterior o anteriores sean falsa.
        }

        3. else if - (si no)
         Else if nos ayuda a comprobar las condiciones adicionales si la conficion if es falsa. Podemos tener tantos else if como necesitemos. Los 'else if' se escriben entren el 'if' y entre el 'else'

         if (condicional){
          //codigo
         } else if (condicional){
            // codigo ejecutar...}{
         }else if (condicional){
          //codigo ejecutar
         }else {
          //codigo
         }
*/

//Sentencia o Bloque If

let numero = 300;

if (numero > 500) {
    console.log("Me ejecute porque la condición es verdadera")
} else if (numero < 500) {
    console.log("Me ejecute porque la segunda condición es verdadera");
} else {
    console.log("Me ejecute porque la condiciones anteriores son falsas jaja'nt")
}



