//alert ("Me duele la pancha xd")

/* 
 Ejercicio Funciones

 1. Vamos a definir una variable llamada 'heroe' que tenga un dato en 'strig' con el nombre de un superheroe.
 2. Definimos una funcion llamada 'Obtener poder'
 3. Esta función recibe el parametro 'heroe' que sera validado en el cuerpo de la función.
 4. En el cuerpo de la función valodar:
  si heroe === "superman" -> "Tu poder es superfuerza"
  si heroe === "flash" -> "Tu puder es supervelocidad"
  si heroe === "batman" -> "Tu poder es supermillonario"
  si no -> "No te invitaron a la fiesta."

 5. Invocar a la funcion con su parametro 'heroe'

 Reto Extra:

 **Hacer que el valor de la variable 'heroe' la asigne el usuario.
*/

let miHeroe = prompt ("Elige un héroe");

function obtenerPoder (heroe) {
    //Cuerpo de la función
    if (heroe === "Chapulín Colorado") {
        console.log("Tu poder es el Chipote Chillón")
    } else if (heroe === "Kirby") {
        console.log("Tu poder es absorber a los demas")
    } else if (heroe === "Mario") {
        console.log("Tu poder es lanzar bolas de fuego de la mano")
    } else {
        console.log("No te invitaron a la fiesta :(")
    }
}

obtenerPoder(miHeroe) //Así invocamos la función.