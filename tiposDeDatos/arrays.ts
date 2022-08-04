

//ARREGLOS lista de datos

interface Alumnos{
    nombre: string;
    edad: number;
}





var listadoDeNombres: Array<string> = ["Juan","Marianela","lucas","mirta"];

var listadoDeNumeros: Array<number> = [15,12,44,18,23]

var listadoDeAlumnos: Array<Alumnos> =[{
     nombre: "teresa",
     edad:20

},
{
    nombre:"sofia",
    edad:40
},

{
    nombre: "roberto",
    edad:80
}

]



console.log(listadoDeNumeros[2]);

console.log(listadoDeNombres[3]);

console.log(listadoDeAlumnos[2].nombre);    