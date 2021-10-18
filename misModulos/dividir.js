/*
    Condición: si se quiere dividir por cero, va a devolver un error
 */
let division = {
    dividir : function(valorA,valorB){
      if(valorB == 0){
        return "No se puede dividir por cero";
      }else{
        return valorA / valorB;
      }
    }
}
module.exports = division;