import { Coordinates } from "./Coordinates";

export class Address {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: Coordinates;
    country: string;


    constructor(
        address: string,
        city: string,
        state: string,
        stateCode: string,
        postalCode: string,
        coordinates: Coordinates,
        country: string )
        {
            this.address = address;
            this.city = city;
            this.state = state;
            this.stateCode = stateCode;
            this.postalCode = postalCode;
            this.coordinates = coordinates;
            this.country = country;
        }
}