let opt = {
    archivo: {
        demand: true,
        alias: 'f',
        description: 'Ruta del archivo'
    },
    pais: {
        alias: 'c',
        default: 'ECU',
        description: 'Indica el pais'
    },
    anio: {
        alias: 'y',
        default: 1960,
        description: 'Indica el año'
    }
};
let opt1 = {
    archivo: {
        demand: true,
        alias: 'f',
        description: 'Ruta del archivo'
    },
    pais: {
        alias: 'c',
        default: 'ECU',
        description: 'Indica el pais'
    },
    anio: {
        alias: 'y',
        default: 2018,
        description: 'Indica el año'
    },
    salida: {
        demand:true,
        alias: 'o',
        description: 'Indica el archivo de salida'
    }
};
const argv = require('yargs')
    .command('mostrar', 'Mostrar', opt)
    .command('guardar', 'Guardar', opt1).help().argv;

module.exports = {
    argv
};