const axios = require('axios');


/**
 * Toda funcion async devuelve una promesa, se debe resolver como promesa
 */
const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '0d4315505cmsh10ec76b1044a5cep1d9e3djsna278dc34fdf2' }
    });
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para  ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    };
};
module.exports = {
    getLugarLatLng
};