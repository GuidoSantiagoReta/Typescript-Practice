


/*FUNCIONES ANONIMAS CON ARREGLOS : se utilizan  para poder acceder 
a las propiedades de los elementos*/









/*IMPRIMIENDO PROPIEDADES CON FOREACH*/

//nombres.forEach((nombre) => console.log(nombre) );

//uso de foreach para recorrer el array y pedir los datos





interface Alumno{
    nombre: string;
    apellido: string;
}

var alumnos: Alumno[] =[];


alumnos.push({nombre: "Juan",apellido:"Detesta"});
alumnos.push({nombre: "Martin",apellido:"retamar"});
alumnos.push({nombre: "Juaco",apellido:"levinstone"});

alumnos.forEach((alumno)=>{
   console.log (alumno.nombre, alumno.apellido)



})