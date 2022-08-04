/*FUNCIONES ANONIMAS CON ARREGLOS : se utilizan  para poder acceder
a las propiedades de los elementos*/
var alumnos = [];
alumnos.push({ nombre: "Juan", apellido: "Detesta" });
alumnos.push({ nombre: "Martin", apellido: "retamar" });
alumnos.push({ nombre: "Juaco", apellido: "levinstone" });
alumnos.forEach(function (alumno) {
    console.log(alumno.nombre, alumno.apellido);
});
