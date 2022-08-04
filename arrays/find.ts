

//FIND: NOS SIRVE PARA BUSCAR DATOS DENTRO DE ARRAYS


interface Alumno{
    alumnoID:number;
    nombre: string;
    apellido: string;
}

var alumnos: Alumno[] =[];
alumnos.push({ alumnoID:1, nombre: "Juan",apellido:"Detesta"});
alumnos.push({ alumnoID:2, nombre: "Martin",apellido:"retamar"});
alumnos.push({ alumnoID:3, nombre: "Juaco",apellido:"levinstone"});

var alumnoEncontrado = alumnos.find((alumno) =>{
     return alumno.alumnoID ==2
})

console.log(alumnoEncontrado)