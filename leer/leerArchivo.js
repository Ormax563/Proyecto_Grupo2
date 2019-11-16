const csv = require('csv-parser');
const fs = require('fs');

var csvData=[];


let leerArchivo = (archivo) => {
    return new Promise((resolve, reject) =>{
        fs.access(archivo, (err) => {
            if (!err) { 
              resolve("si existe el archivo");
              return;
            }
              reject("no existe el archivo");
          });
    })
}

module.exports = {
    leerArchivo
}