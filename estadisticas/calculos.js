
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
    for (var x in codigos){
        if(codigos[x] == pais){
            num = x;
        }
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
    tempVec = [];
    for (var x in datos){
        temp = [];
        if(parseInt(datos[x]) > parseInt(valorPais)){
            temp.push(parseInt(datos[x]));
            temp.push(codigos[x]);
            tempVec.push(temp);
        }
    }
    tempVec.sort(sortFunction);
    nomPaises = []
    for (var x in tempVec){
        if(x < 5){
            nomPaises.push(tempVec[x][1]); 
        }
    }
    posPaises = []
    for (var x in nomPaises){
        posPaises.push(valCodigo(codigos, nomPaises[x]));
    }
    return posPaises;
}

let bajoPais = (datos, valorPais, codigos) => {
    tempVec = [];
    for (var x in datos){
        temp = [];
        if(parseInt(datos[x]) < parseInt(valorPais)){
            temp.push(parseInt(datos[x]));
            temp.push(codigos[x]);
            tempVec.push(temp);
        }
    }
    tempVec.sort(sortFunction);
    nomPaises = []
    for (var x in tempVec){
        if(x >= (tempVec.length-5)){
            nomPaises.push(tempVec[x][1]); 
        }
    }
    posPaises = []
    for (var x in nomPaises){
        posPaises.push(valCodigo(codigos, nomPaises[x]));
    }
    return posPaises;
}


module.exports = { 
    calcMedia,
    valCodigo,
    sobrePais,
    bajoPais
}