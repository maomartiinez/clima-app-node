const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c9b9546ee5e6773e8becea88b4b02f06&units=metric`); //todo lo del get devuelve data.
    return resp.data.main.temp;
};
module.exports = {
    getClima
};