

//INTERFACES: heredar propiedades facilmente sin tener errores


interface Personas{
    
    nombre: string,
    apellido: string,
    edad: number,
    nacionalidad: string
}


var persona1: Personas ={
    nombre:"Leticia" ,
    apellido: "Ramirez",
    edad: 38,
    nacionalidad: "italiana"
}


console.log(persona1.nombre)