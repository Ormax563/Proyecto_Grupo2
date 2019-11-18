const { argv } = require('./config/yargs')
const { compArchivo } = require('./leer/compArchivo')
const { leerArchivo } = require('./leer/compArchivo')
const { guardarArchivo } = require('./leer/compArchivo')

let comando = argv._[0];
let archivo = argv.f;
let pais = argv.c;
let anio = argv.y;
let name_arch = argv.o;
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


switch (comando) {
    case 'publicar':

        compArchivo(archivo)
            .then((archivo) => {




                leerArchivo(archivo, anio, pais);



            })
            .catch((archivo) => { console.log("El archivo no existe"); })

        break;
    case 'guardar':
        guardarArchivo(archivo, anio, pais, name_arch)
        break;
    default:
        console.log('comando no valido');
}