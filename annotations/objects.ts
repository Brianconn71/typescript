const profile = {
    name: "brian",
    age: 23,
    coords: {
        lat: 0,
        lng: 15
    },
    // es2015 syntax for declaring a method inside an object
    setAge(age:number): void {
        this.age = age;
    }
};

const { age, name }: { age: number, name: string } = profile;
const { coords: { lat, lng } }: { coords: { lat: number; lng:number } } = profile;