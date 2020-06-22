//const argv = require('yargs').argv;
const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
console.log(argv._);

let comando = argv._[0];


switch (comando) {

    case 'crear':
        console.log('Crea por hacer');
        let tarea = porHacer.crear(argv.description)
        console.log(tarea);
        break;
    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log(' ======== POR HACER ======== '.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log(' =========================== '.green);
        }
        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.description, argv.completado);
        console.log('Actualizar por hacer', actualizado);
        break;

    case 'borrar':
        let borra = porHacer.borrar(argv.description);
        console.log('Borra ***', borra);
        break;

    default:
        console.log('Comando no reconocido');

}