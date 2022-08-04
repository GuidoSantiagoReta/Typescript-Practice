//prueba1 ---true
var aceptaDescuentos = (15 + 18 == 33);
console.log("este booleano es:", aceptaDescuentos);
//prueba2 ---false
var juan = "juan";
var juan2 = "Juan";
var sonNombresIguales = (juan == juan2);
console.log("el Booleano es:", sonNombresIguales);
//prueba3--- false
var sonAmbosVerdaderos = sonNombresIguales && aceptaDescuentos;
console.log("Resultado de dos boleanos distintos", sonAmbosVerdaderos);
//prueba4  or -- si un resultado es verdadero devuelve verdadero
var sonAmbosVerdaderos = sonNombresIguales || aceptaDescuentos;
console.log("Resultado de dos boleanos con or", sonAmbosVerdaderos);
// || or: para cuando una de las expresiones es verdadera
// &&para cuando  ambas expresiones  devuelve verdadero
//prueba5--- distinto != (diferente)
var lista1 = 120;
var lista2 = 100;
var sonLasListasIguales = (lista1 != lista2);
console.log("las listas son Iguales:", sonLasListasIguales);
