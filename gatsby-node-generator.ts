import {City} from "./src/model/City";
import {Hotel} from "./src/model/Hotel";
import {NodeInput} from "gatsby";
const crypto = require('crypto');

class GatsbyNodeGenerator {

    public generateCityNodes(cities : City[]) : NodeInput[] {
        return cities.map((city : City, i : number) => {
            //console.log(city);
            const cityNodeContent = {
                cityId: city.cityId,
                name: city.name,
                slug: city.slug
            }

            const contentDigest: string = this.generateContentHash(cityNodeContent);

            return <NodeInput>{
                id: `${i + 1}`,
                parent: `__SOURCE__`,
                children: [],
                internal: {
                    type: "City",
                    contentDigest: contentDigest
                },
                ...cityNodeContent
            };
        });
    }

    public generateHotelNodes(hotels : Hotel[]) : NodeInput[] {
        return hotels.map((hotel : Hotel, i : number) => {
            //console.log(hotel);
            const hotelNodeContent = {
                hotelId: hotel.hotelId,
                name: hotel.name,
                priceMin: hotel.priceMin,
                photo: hotel.photo,
                places: hotel.places,
                street: hotel.street,
                cityName: hotel.cityName,
                citySlug: hotel.citySlug,
                type: i%2 ? "apartment" : "hotel"
            }

            const contentDigest = this.generateContentHash(hotelNodeContent);

            return  <NodeInput>{
                id: `${i+1}`,
                parent: `__SOURCE__`,
                children: [],
                internal: {
                    type: `Hotel`,
                    contentDigest: contentDigest
                },
                ...hotelNodeContent
            }
        });
    }

    private generateContentHash = (content : {}): string => crypto
        .createHash(`md5`)
        .update(JSON.stringify(content))
        .digest(`hex`);
}

module.exports.GatsbyNodeGenerator=GatsbyNodeGenerator;