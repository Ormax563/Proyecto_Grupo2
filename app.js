const { argv } = require('./config/yargs')
const { compArchivo } = require('./leer/compArchivo')
const { leerArchivo } = require('./leer/compArchivo')

let comando = argv._[0];
let archivo = argv.f;
let pais = argv.c;
let anio = argv.y;

switch (comando) {
    case 'mostrar':
        compArchivo(archivo)
        .then((archivo) =>{leerArchivo(archivo,anio);})
        .catch((archivo) => {console.log("El archivo no existe");})
        break;
    case 'guardar':
        guardarArchivo(archivo, pais, anio);
        break;
    default:
        console.log('comando no valido');
}
