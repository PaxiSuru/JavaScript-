//alert ("Holiwis Triguis")

/* 
 Clases

 Una clase en JS es una plantilla para crear objetos. 
 Es una forma moderna y natural de trabajar con la programación orientada a objetos.

 Metodo Constructor.

 El método constructor es un método especial que se ejecuta automaticamente cuando se crea una nueva instancia de la clase.

 Dentro del método constructor, pasamos las propiedades y valores de la clase.

 Las propiedades pasan como parametros y luego se asignan con "this"

 Sintaxis Básica

 class NombreClase(Que inicie con mayusculas){
    //Metodo Constructor

    constructor(par1, par2) {
        this.par1 = par1;
        this.par2 = par2;
    }

    Instancia de Clase

    Para crear un objeto usando la clase, se utiliza la palabra 'new'', esto invoca al constructor de la clase.

    Sintaxis:

    nwe NombreClase(par1, par2);
 }
 
 Metods de Clase:
 Permite que todos compartan la misma constancia


*/

//Definir la clase Mascota

class Mascota {
    constructor(nombre,edad) {
        this.nombre = nombre; //propiedad nombre
        this.edad = edad; //propiedad edad
    }

    saludo(){
    console.log(`Dame comida humano inutil, soy ${this.nombre} el poderoso y tengo ${this.edad}`)

 }

//Instancear la clase Mascota. Creamos un objeto con la plantilla Mascota.

let mascota1 = new Mascota("Charlotte", 13);
let mascota2 = new Mascota("Rayas", 5);

//Accedemos a los datos de las instancias

console.log(mascota2.nombre)
console.log(mascota2.edad)

//lanzar los métodos de los objetos.

mascota1.saludo();
mascota2.saludo();