const csv = require('csv-parser');
<<<<<<< HEAD
=======
const col = require('../Colores/color')
>>>>>>> Modulo de color para la impresión
const fs = require('fs');
const { calcMedia, valCodigo, sobrePais, bajoPais } = require('../estadisticas/calculos');
let leerArchivo = (archivo, anio, pais) => {
    suscrip = [];
    nom = [];
    cod = [];
    fs.createReadStream(archivo)
        .pipe(csv())
        .on('data', (row) => {
<<<<<<< HEAD
            if (row[Number(Number(anio) - 1956)] != anio  && row[Number(Number(anio) - 1956)] != undefined && row[Number(Number(anio) - 1956)] != 0){
=======
            if (row[Number(Number(anio) - 1956)] != anio && row[Number(Number(anio) - 1956)] != undefined && row[Number(Number(anio) - 1956)] != 0) {
>>>>>>> Modulo de color para la impresión
                nom.push(row[0]);
                cod.push(row[1]);
                suscrip.push(row[Number(Number(anio) - 1956)]);
            }

        })
        .on('end', () => {
<<<<<<< HEAD
            
=======

>>>>>>> Modulo de color para la impresión
            var mediaMundial = calcMedia(suscrip);
            var valorCodigo = valCodigo(cod, pais);
            var valorPais = suscrip[valorCodigo];
            var nombrePais = nom[valorCodigo];
            var estado = "";
<<<<<<< HEAD
            
            if(valorPais < mediaMundial){
                estado = "Menor";
            }else{
                if(valorPais > mediaMundial){
                    estado = "Mayor";
                }else{
=======

            if (valorPais < mediaMundial) {
                estado = "Menor";
            } else {
                if (valorPais > mediaMundial) {
                    estado = "Mayor";
                } else {
>>>>>>> Modulo de color para la impresión
                    estado = "Igual";
                }
            }

            mayores = [];
            menores = [];
            top = [];

            mayores = sobrePais(suscrip, valorPais, cod);
            menores = bajoPais(suscrip, valorPais, cod);
<<<<<<< HEAD
            console.log(`\nMedia de suscripciones en el año ${anio} es ${mediaMundial}`);
            console.log(`\nEl valor de las suscripciones del país ${nombrePais} con código ${pais} y valor ${valorPais} es ${estado} al promedio mundial`);
            console.log(`\nLos cinco paises por encima del valor de suscripciones de ${nombrePais} son: `);
            for (var x in mayores){
                numb = mayores[x];
                console.log("Codigo : "+cod[numb] + ", Suscripcion: " + suscrip[numb] + ", Nombre: " + nom[numb] );
            }
            console.log(`\nLos cinco paises por debajo del valor de suscripciones de ${nombrePais} son: `);
            for (var x in menores){
                numb = menores[x];
                console.log("Codigo : "+cod[numb] + ", Suscripcion: " + suscrip[numb] + ", Nombre: " + nom[numb]);
=======
            col.write(2, `\nMedia de suscripciones en el año ${anio} es ${mediaMundial}`);
            col.write(2, `\nEl valor de las suscripciones del país ${nombrePais} con código ${pais} y valor ${valorPais} es ${estado} al promedio mundial`);
            col.write(2, `\nLos cinco paises por encima del valor de suscripciones de ${nombrePais} son: `);


            for (var x in mayores) {
                numb = mayores[x];
                console.log("Codigo : " + cod[numb] + ", Suscripcion: " + suscrip[numb] + ", Nombre: " + nom[numb]);
            }
            console.log(`\nLos cinco paises por debajo del valor de suscripciones de ${nombrePais} son: `);
            for (var x in menores) {
                numb = menores[x];
                console.log("Codigo : " + cod[numb] + ", Suscripcion: " + suscrip[numb] + ", Nombre: " + nom[numb]);
>>>>>>> Modulo de color para la impresión
            }
        });
}

let compArchivo = (archivo) => {
<<<<<<< HEAD
    return new Promise((resolve, reject) =>{
        fs.access(archivo, (err) => {
            if (!err) { 
              resolve(archivo);
              return;
            }
              reject(null);
          });
=======
    return new Promise((resolve, reject) => {
        fs.access(archivo, (err) => {
            if (!err) {
                resolve(archivo);
                return;
            }
            reject(null);
        });
>>>>>>> Modulo de color para la impresión
    })
}

module.exports = {
    compArchivo,
    leerArchivo
}