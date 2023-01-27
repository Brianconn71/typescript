// import the faker module
// lots of javascript code does not have any type attached to it
// libraries in particular
// type definition files are an adapter between typescript we write and the javascript libraries we work with.
import { faker } from "@faker-js/faker";

export const red = 'red';

export class User {
    name: string;
    location: {
        lat: number,
        lng: number
    };

    // use constructor if not using hardcoded values
    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            // parse float to change from string to numbers
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
};