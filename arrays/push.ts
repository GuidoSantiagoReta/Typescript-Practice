


 //ARREGLOS CON METODO PUSH (sirve para agregar elementos dentro de nuestros arreglos)

 //ejemplo1
 /*var nombres: string[] = ["jorge", "damian", "Raul"];

 console.log(nombres);

 nombres.push("Roberto");

 console.log(nombres);*/



 //ejemplo2

/* var numeros: number[] = [12,24,32,55];

 numeros.push(55)

 console.log(numeros);*/



 //ejemplo3

 interface Alumno
{
    nombre: string;
    apellido: string; 
}
  var alumnos: Alumno[] =[];  //inicializando vacío

  

  alumnos.push({nombre:"Jorge", apellido:"Perez"})

  console.log(alumnos);
