
//ESTRUCTURA DE COONTROL IF
/*SENTENCIA UTILIZADA CUANDO QUEREMOS TOMA UNA DECISIÓN POR EJ: DESEA IMPRIMIR ALGO?
DEPENDE LA RESPUESTA SE EJECUTA O NO LA ACCIÓN
ESTAS SON EVALUADAS POR ALGUNA EXPRESION CUYO RESULTADO SEA VERDADERO
O FALSO */

var cantidadSolicitada:number=15;


var imprimir:boolean =true;
debugger



if(imprimir){
 
    console.log("imprimiendo por consola")

    if(cantidadSolicitada > 10){
        console.log("Aplica descuento")
        
    }
}

imprimir =false;
imprimir =true;

imprimir =false;
imprimir =false && false;
imprimir =true && true