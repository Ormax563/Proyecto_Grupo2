const csv = require('csv-parser');
const fs = require('fs');
const col = require('../Colores/color');
const { calcMedia, valCodigo, sobrePais, bajoPais, rankin } = require('../estadisticas/calculos');
let leerArchivo = (archivo, anio, pais) => {
    var suscrip = [];
    nom = [];
    cod = [];
    fs.createReadStream(archivo)
        .pipe(csv())
        .on('data', (row) => {
            if (row[Number(Number(anio) - 1956)] != anio && row[Number(Number(anio) - 1956)] != undefined && row[Number(Number(anio) - 1956)] != 0) {
                nom.push(row[0]);
                cod.push(row[1]);
                suscrip.push(row[Number(Number(anio) - 1956)]);
            }

        })
        .on('end', () => {

            var mediaMundial = calcMedia(suscrip);
            var valorCodigo = valCodigo(cod, pais);
            var valorPais = suscrip[valorCodigo];
            var nombrePais = nom[valorCodigo];
            var estado = "";

            if (valorPais < mediaMundial) {
                estado = "Menor";
            } else {
                if (valorPais > mediaMundial) {
                    estado = "Mayor";
                } else {
                    estado = "Igual";
                }
            }

            mayores = [];
            menores = [];
            top = [];

            mayores = sobrePais(suscrip, valorPais, cod);
            menores = bajoPais(suscrip, valorPais, cod);
            col.write(3, `\nMedia de suscripciones en el año ${anio} es ${mediaMundial}`);
            col.write(4, `\nEl valor de las suscripciones del país ${nombrePais} con código ${pais} y valor ${valorPais} es ${estado} al promedio mundial`);
            col.write(2, `\nLos cinco paises por encima del valor de suscripciones de ${nombrePais} son: `);
            for (var x in mayores) {
                numb = mayores[x];
                col.write(2, "Codigo : " + cod[numb] + ", Suscripcion: " + suscrip[numb] + ", Nombre: " + nom[numb]);
            }
            col.write(5, `\nLos cinco paises por debajo del valor de suscripciones de ${nombrePais} son: `);
            for (var x in menores) {
                numb = menores[x];
                col.write(5, "Codigo : " + cod[numb] + ", Suscripcion: " + suscrip[numb] + ", Nombre: " + nom[numb]);
            }

            suscrip.sort(function(a, b) {
                return a - b;
            });

            col.write(4, '\nTop 5 del año específico');
            for (var k = 0; k < 5; k++) {
                let aa = suscrip[suscrip.length - 1 - k];
                let pos = rankin(aa, suscrip);
                col.write(4, `${k+1}) Pais: ${nom[pos]} Suscriptores: ${suscrip[pos]}`);
            }


        });
}

let compArchivo = (archivo) => {
    return new Promise((resolve, reject) => {
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