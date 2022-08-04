
//FUNCIONES QUE DEVUELVE DATOS



function multiplicar(numero1, numero2) {
    var total = numero1 * numero2;
    return total;
}

// pertenece funcion mutiplicar
var numeroResultado = 0;
numeroResultado = multiplicar(3, 9);
console.log(numeroResultado);
 


function calcularPromedio(nota1, nota2, nota3) {
    var total = (nota1 + nota2 + nota3) / 3;
    return total;
}


// pertenece FUNCION PROMEDIO 
var promedio = 0;
promedio = calcularPromedio(35, 26, 55);
console.log(promedio);
