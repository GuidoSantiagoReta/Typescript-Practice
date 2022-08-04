//ELSE IF
/*Sentencia utilizada cuando queremos ver si se cumple otra condición extra a la que se había definido en un inicio*/
/*PSEUDOCÓDIGO
si(if)  cantidadSolicitada es mayor a 10
       aplico descuento
       sino y si fuera(ElseIF) cantidadSolicitada entre 4 y 8
                  aplicar decuento proporcional
                  si no (else)
                   No aplicar descuento */
var cantidadSolicitada = 6;
if (cantidadSolicitada > 14) {
    console.log("Aplica descuento del 15%");
}
else if (cantidadSolicitada >= 7 && cantidadSolicitada <= 14) {
    console.log("Aplicar descuento del 10%");
}
else {
    console.log("No aplicar descuento");
}
