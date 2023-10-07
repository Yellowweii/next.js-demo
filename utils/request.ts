const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  params: {model: 'corolla'},
  headers: {
    'X-RapidAPI-Key': 'ac16a5b7e2msh5e689d21234036bp180429jsn905155c71f6e',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};



export const fetchCars = async () => {
    try {
        const response = await axios(options);
        return response.data;
    } catch (error) {
        return error;
    }
}