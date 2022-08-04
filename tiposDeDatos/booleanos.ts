



//prueba1 ---true
var aceptaDescuentos: boolean=(15+18 ==33)
console.log("este booleano es:",aceptaDescuentos);

//prueba2 ---false
var juan ="juan"
var juan2= "Juan";
var sonNombresIguales:boolean =(juan==juan2)
 console.log("el Booleano es:",sonNombresIguales);

//prueba3--- false
var sonAmbosVerdaderos:boolean =sonNombresIguales && aceptaDescuentos
console.log ("Resultado de dos boleanos distintos", sonAmbosVerdaderos);


//prueba4  or -- si un resultado es verdadero devuelve verdadero

var sonAmbosVerdaderos:boolean =sonNombresIguales || aceptaDescuentos;
console.log ("Resultado de dos boleanos con or", sonAmbosVerdaderos);





 //prueba5--- distinto != (diferente)
var lista1:number= 120;
var lista2:number= 100;

var sonLasListasIguales: boolean =(lista1 != lista2)

console.log("las listas son Iguales:",sonLasListasIguales);

// || or: devuelve true cuando una de las expresiones es verdadera
 // && para cuando  ambas expresiones son verdaderas devuelve verdadero
 // != diferente para comparar operaciones distintas