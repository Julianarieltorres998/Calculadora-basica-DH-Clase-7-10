/*
    Condición: si uno de los dos números es 0, va a devolver cero
 */
let multiplicar = {
    multiplicacion : function(valorA,valorB){
        if(valorA == 0 || valorB == 0){
            return 0;
        }else{
            return valorA * valorB;
        }
    }
}

module.exports = multiplicar;