const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            // .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comando no reconocido');
}

//console.log(process.base);

// parametro desde la terminal para probarlo 'node app --base=10'

// let parametro = argv[2];
// let base = parametro.split('=')[1];