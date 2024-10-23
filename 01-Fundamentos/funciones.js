//alert ("¡SUPER TUNA GOOOD")

/* 
Funciones

 Son bloques de código reutilizables, ya que realizan una tarea especifica.

 En lugar de escribir el mismo codigo una y otra vez, podemos definir una función una sola vez y usarla siempre que la necesitemos.

 Conceptos de las funciones
  
  >Definir: Creamos la función con un nombre y los datos llamamos parámetros.(Opcionales)

  >Invocan: Llamamos la función cuando queremos que haga o ejecute su codigo, es decir que haga su tarea.

  >Retorna: Puede devolver un resultado la función. (Opcional)

Sintaxis

 function nombreFuncion()

 
 */

 function saludo () {
    console.log("Hola vecinirijillo")
 }

 /* Saludo */

 function saludoPersonalizado(nombre) {
    console.log(`Hola ${nombre} ahora tienes un vecinirijillo`)
 }

/*  saludoPersonalizado("Piñita")
 saludoPersonalizado("Slime")
 saludoPersonalizado("Panny")
 saludoPersonalizado("Angie")
 saludoPersonalizado("Domi") */

 function sumar(a, b){
    return a + b
 }

 let resultado = sumar (10,20);

 console.log ( resultado * 5 )