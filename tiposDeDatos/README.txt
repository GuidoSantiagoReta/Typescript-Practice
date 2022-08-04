INSTALAR TYPESCRIPT

npm install typescript -g  (manera global)

COMPILACION (tener el script enlazado)

<script src="app.js"></script> 

Ejecutar en  terminal tsc app.ts(nombre creado)- para trabajar y que compilar directamente desde
el archivo app.ts

PARA NO RECARAR LA COMPILACIÓN CONSTANTEMENTE EJECUTAR EN CONSOLA:

tsc app.ts --watch

TYPESCRIPT TIPOS DE DATOS


NUMEROS EJEMPLO:

var edad:number = 19;
var puntos:number= 11;



console.log(edad + puntos);


STRINGS EJEMPLO:

var nombre;
var apellido;
nombre = "Juan";
apellido = "Rodriguez";
nombre = nombre + " " + "Hola";       //concatenar y dar espacios de manera correcta
console.log(nombre + " " + apellido);     

BOOLEANOS Y OPERADORES:

