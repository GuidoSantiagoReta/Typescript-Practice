


//FOR IN

/* Ayudar a identificar en que posicion estamos*/ 


interface Usuario{
    nombre:string;
    apellido:String;
}

var listadoDeUsuarios:Array<Usuario> = [
    
 {

    nombre:"Elena",
    apellido:"Roger"
},
{
    nombre:"Martín ",
    apellido: "Cañamo"

},
{
    nombre: "matias",
    apellido: "detesta"
}
    
]

/*for(let cantidadRepetir:number =0; cantidadRepetir < listadoDeUsuarios.length;cantidadRepetir ++){
console.log(listadoDeUsuarios[cantidadRepetir].apellido)

  }*/


  console.log(listadoDeUsuarios)
   for(let posicion in listadoDeUsuarios) {
    console.log (listadoDeUsuarios [posicion].nombre)
    console.log ( listadoDeUsuarios [posicion].apellido)
}