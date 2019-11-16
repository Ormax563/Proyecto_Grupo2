const { argv } = require('./config/yargs')
const { leerArchivo } = require('./leer/leerArchivo')
let comando = argv._[0];
let archivo = argv.f;
let pais = argv.c;
let anio = argv.y;

switch (comando) {
    case 'mostrar':
        leerArchivo(archivo)
        .then((archivo) =>{console.log(archivo);})
        .catch((archivo) => {console.log(archivo);})
        break;
    case 'guardar':
        guardarArchivo(archivo, pais, anio);
        break;
    default:
        console.log('comando no valido');
}
