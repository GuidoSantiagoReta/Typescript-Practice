

//FUNCIONES QUE DEVUELVE DATOS


function multiplicar(numero1:number, numero2:number) : number

{
    var total = numero1 * numero2;

    return total; 
    
}

// pertenece funcion mutiplicar
var numeroResultado: number=0;

numeroResultado= multiplicar (3,9);

console.log(numeroResultado);




function calcularPromedio(nota1:number, nota2:number, nota3:number):number
{
   var total: number =(nota1 + nota2 + nota3 ) /3
    return total;
}
// pertenece FUNCION PROMEDIO 

var promedio: number =0;

promedio = calcularPromedio (35,26,55);

console.log(promedio);








