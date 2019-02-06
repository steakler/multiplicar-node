const argv = require('./config/yargs').argv;
const colors = require('colors');

/*
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tala de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        },

    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }

    })
    .help()
    .argv;*/

const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar');

//let base = 'abc';
//console.log(process.argv);

let comando = argv._[0]



switch (comando) {

    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .then(result => console.log(result))
            .catch(e => console.log(e));

        break;
    case 'crear':
        console.log('crear');

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:` + ` ${archivo} `.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido ');
}


//console.log(argv);


//let parametro = argv[2];

//let base = parametro.split('=')[1];
//console.log(base);