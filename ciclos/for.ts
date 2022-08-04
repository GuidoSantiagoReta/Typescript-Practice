

//CICLOS: Sentencia que ejecuta código una cantidad de veces


/*FOR: NOS PERMITE DEFINIR CUANTAS VECES SE EJECUTARA UNA SENTENCIA 
DE CÓDIGO DESDE SU CREACION*/
/*EJ: FOR(var cantidadRepetir:number=0;) variable que inicia el ciclo// cantidadRepetir<=5;(restriccion)
cantidadRepetir++(incremento: la cantidad repetir va a incrementarse cada vez que termine el ciclo ej: cantidad repetir 1, cantidad repetir 2, etc)*/

var listadoDeNombres:Array<string> = ["Juan", "Alberto","Maxi","Fer"];
console.log(listadoDeNombres);



for (var cantidadRepetir:number =0; cantidadRepetir < listadoDeNombres.length;cantidadRepetir++){
    //debugger;
  console.log("Hola!!:", listadoDeNombres [cantidadRepetir  ])

}