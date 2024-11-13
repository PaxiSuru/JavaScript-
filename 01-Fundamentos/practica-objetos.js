/* 
 Practica Clases y Objetos

 1. Crea una clase llamada Arma

 Debe tener las siguientes propiedades en su constructor:
    *nombre (string): nombre del arma.
    *tipo (string): tipo de arma (ej. "espada", "pistola", "arco").
    *daño (número): cantidad de daño que puede causar.

 Agrega un método llamado describir que imprima en consola:

 'Arma: Galadhrim | Tipo: arco | Daño: 40'

 2. Crea un objeto llamado arsenal que contenga:

 *Una propiedad armas que sea un array vacio.
 *Un método agregarArma recibe un arma como parametro y la agrega al array armas.

 3. Instancia Armas:

 *Crea tres armas usando la clase arma con diferentes valores para nombre, tipo y daño.

 4.Agrégar las armas al Arsenal

 *Usa el método agregarArma del objeto arsenal

 5. Muesta la descripción de las Armas:

 *Usa un bucle for para recorrer el array armas dentro del objeto arsenal.

 *En cada interacción llama al método describir de cada arma para mostrar sus detalles en la consola.
    
*/

class arma {
   constructor(nombre, tipo, daño){
      this.nombre = nombre;
      this.tipo = tipo;
      this.daño = daño;
   }
   describir(){
      console.log(`Arma: ${this.nombre} | Tipo: ${this.tipo} | Daño: ${this.daño}`)
   }
}

const arsenal = {
   armas: [],
   agregarArma(arma) {
      this.armas.push(arma);
   }
};

let guadaña = new arma('Tipometro', 'Cuerpo a cuerpo', '5000' )
let piña = new arma('Suprema Piña', 'Arma a Distancia', '∞' )
let chancla = new arma('Gran Chancla', 'Suprema', '10000' )

arsenal.agregarArma(guadaña);
arsenal.agregarArma(piña);
arsenal.agregarArma(chancla);

console.log(arsenal.armas);

for ( let i = 0 ; i <= 0 ; i++ ) {
   console.log()
};