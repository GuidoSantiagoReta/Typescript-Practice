//FIND: NOS SIRVE PARA BUSCAR DATOS DENTRO DE ARRAYS
var alumnos = [];
alumnos.push({ alumnoID: 1, nombre: "Juan", apellido: "Detesta" });
alumnos.push({ alumnoID: 2, nombre: "Martin", apellido: "retamar" });
alumnos.push({ alumnoID: 3, nombre: "Juaco", apellido: "levinstone" });
var alumnoEncontrado = alumnos.find(function (alumno) {
    return alumno.alumnoID == 2;
});
console.log(alumnoEncontrado);
