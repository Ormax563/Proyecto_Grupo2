
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

let valCodigo = (codigos, pais) => {
    num = 0;
    cont=0
    for (var x in codigos){
        if(codigos[cont] == pais){
            num = cont;
        }
        cont ++;
    }
    return num;
}

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

let sobrePais = (datos, valorPais, codigos) => {
    vec = [];
    cont = 0;
    for (var x in datos){
        temp = [];
        if(parseInt(datos[cont]) > parseInt(valorPais)){
            temp.push(parseInt(datos[cont]));
            temp.push(codigos[cont]);
            vec.push(temp);
        }
        cont ++;
    }
    vec.sort(sortFunction);
    nums = []
    cont = 0;
    for (var x in vec){
        if(cont < 5){
            nums.push(vec[cont][1]); 
        }
        cont ++;
    }
    resf = []
    cont = 0;
    for (var x in nums){
        resf.push(valCodigo(codigos, nums[x]));
        cont ++;
    }
    return resf;
}


module.exports = { 
    calcMedia,
    valCodigo,
    sobrePais
}