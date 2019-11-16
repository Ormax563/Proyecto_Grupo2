const csv = require('csv-parser');
const fs = require('fs');
const { calcMedia } = require('../estadisticas/calculos');
let leerArchivo = (archivo, anio) => {
    suscrip = []
    fs.createReadStream(archivo)
        .pipe(csv())
        .on('data', (row) => {
            if (row[Number(Number(anio) - 1956)] != anio  && row[Number(Number(anio) - 1956)] != undefined){
            suscrip.push(row[Number(Number(anio) - 1956)])
            
            }

        })
        .on('end', () => {
          
            console.log("Media de suscripciones en el año "+anio + " = " +calcMedia(suscrip));
            
        });
}
let compArchivo = (archivo) => {
    return new Promise((resolve, reject) =>{
        fs.access(archivo, (err) => {
            if (!err) { 
              resolve(archivo);
              return;
            }
              reject(null);
          });
    })
}

module.exports = {
    compArchivo,
    leerArchivo
}