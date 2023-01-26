const carMakers: string[] = ['Honda', 'Nissan', 'Toyota'];
const dates = [new Date(), new Date()]

const carsByMake: string[][] = [
    ['Civic'],
    ['Subaru'],
    ['Corolla']
]

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

//helps with Mapping
carMakers.map((car: string): string => {
    return car.toUpperCase();
})

// flexible array types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2020-10-10');
importantDates.push(new Date());