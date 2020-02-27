const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



// lugar.getLugarLatLng(argv.direccion).then(resp => {
//     console.log(resp);
// }).catch(err => {
//     console.log(err);
// });
//clima.getClima(40.750000, -74.000000).then(resp => { console.log(resp); }).catch(err => { console.log(err); });
const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coords.lat, coords.lng);
        return `el clima de ${coords.direccion}  es de ${temperatura}.`;
    } catch (e) {
        return `no se pudo determinar el clima de  ${direccion}`;
    }

};

getInfo(argv.direccion)
    .then(console.log) //imprime el resultado correcto
    .catch(console.log); //en caso de un error