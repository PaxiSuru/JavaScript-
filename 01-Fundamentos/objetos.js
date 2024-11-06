//alert ("Hola profe c:")

/* 
 Objetos

 Es una colección de propiedades y metodos.

 Los métodos describen los comportamientos de los objetos.

 Los objetos pueden contener distintos tipos de datos: strings, numbers, arrays, booleans, "undefined", otros objetos e incluso funciones.

 sintaxis:

 let nombreArray = []; Corchetes array
 let nombreObjeto = {
    Propiedades y Metodos
    }; llaves objetos

 Propiedades dentro de un objeto se escriben en pares "clave" : "Valor"

 nombre : "Pao" // Propiedad

 let nombre = "Pao" //Variable

 Las propiedades de un objeto se separan oor comas ',' despúes del valor.

 Las claves de las propiedades pueden tener más de una palabra. Pero se debera de escribir entre comillas "" o ''

 "nombre real" = "Pao"

 Tambien se pueden escribir entre comillas.
*/

let personaje = {
    nombre : "Snow Lynn White Clover",
    edad : 15,
    residencia : "Cursetale",
    poderes: true,
    //"Habilidades Humanas" : ["Humanidad", "Empatia", "Justa"],
    habilidadesHumanas : ["Humanidad", "Empatia", "Justa"]
}

/* Accedemos al valor de las propiedades del objeto */

console.log(personaje.nombre);
//console.log(personaje["Habilidades Humanas"] [2] );
console.log(personaje.habilidadesHumanas[0]);


/* Agregar y borrar propiedades de objetos */

personaje.enemigos = ["XGaster", "Aloise"];

//Para borrar

delete personaje.poderes;

/* Crear solitas y solitos un objeto llamado mascota que tenga tres propiedades: nombre, tipo y edad, con sus respectivos valores. 

Anidamos objetos

Nombramos al objeto anidado y lo definimos con las llaves {} - Dentro de las llaves se declaran las propiedades en pares "clave" : "valor"

Métodos

Un método es una función que se define como propiedad de un objeto.

*/

let mascota = {
    nombre : "Charlotte",
    tipo : "Perrita",
    edad : 12,
    //Objetos Anidado
    fisico : {
        estatura : 21,
        peso : 5,
        color : "Café"
    },
 //Declaramos un método
 saludo : function(amo) {
    //codigo que se ejecuta al invocar la función
    alert(`¡Guau Guau Guau! Me llamo ${this.nombre} y mi dueña se llama ${amo}`);
 }

}

console.log(mascota.fisico.peso);
console.log(mascota.fisico.estatura);
console.log(mascota.fisico.color);

mascota.fisico.colorOjos = "Cafés Claro"; //Agregar

/* Accedemos al método saludo del objeto mascota. */

mascota.saludo("Pao");
