import {City} from "../model/City";
import {Hotel} from "../model/Hotel";

const axios = require('axios');

class ApiService {

    static async fetchAllCities() {

        const response = await axios.get(`http://testapi.itur.pl/all-cities.php`);
        const cities : City[] = response.data.map((data : { [key: string]: string }) => {
          return <City>{
            cityId: data.id,
            name: data.name,
            slug: data.slug,
        }});
        // console.log(cities);
        return cities;
    }

    static async fetchAllHotels() {

        const response = await axios.get(`http://testapi.itur.pl/all-hotels.php`);

        const hotels : City[] = response.data.map((data : { [key: string]: string|number }) => {
            return <Hotel>{
                hotelId: (String(data.id)).toString(),
                name: data.name,
                priceMin: data.priceMin,
                photo: data.photo,
                places: data.places,
                street: data.street,
                cityName: data.cityName,
                citySlug: data.citySlug,
                type: "apartment",
            }});
        // console.log(hotels);
        return hotels;


    }
}

module.exports.ApiService=ApiService;