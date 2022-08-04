//FOR OF declaramos o instaciamos un item }
/* en este caso  acortamos la manera de pedir el dato que queramos  en ves
de hacer un for común*/
var listadoDeUsuarios = [
    {
        nombre: "Elena",
        apellido: "Roger"
    },
    {
        nombre: "Martín ",
        apellido: "Cañamo"
    },
    {
        nombre: "matias",
        apellido: "detesta"
    }
];
for (var _i = 0, listadoDeUsuarios_1 = listadoDeUsuarios; _i < listadoDeUsuarios_1.length; _i++) {
    var usuario = listadoDeUsuarios_1[_i];
    console.log("Hola bienvenido:", usuario.nombre);
}
// MANERA CONVENCIONAL DE INSTANCIAR UNA PROPIEDAD DEL OBJETO: 
/*for(let cantidadRepetir:number =0; cantidadRepetir<listadoDeUsuarios.length;canidadRepetis ++)
console.log(listadoDeUsuarios[cantidadRepetir].apellido*/
