
const fs = require('fs');

let calcMedia = (datos) =>
{   acu = 0;
    cont = 0;
    
    for (var x in datos){
        
        acu += Number(datos[cont]);
        cont ++;
    }
    
    return acu/cont;
}

module.exports = { 
    calcMedia
}