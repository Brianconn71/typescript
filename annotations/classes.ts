class Vehicle {

    constructor(public color:string){}

    honk(): void {
        console.log("beep")
    }
}

const fart = new Vehicle('blue');
console.log(fart.color);

class Car extends Vehicle{

    constructor(public wheels: number, color: string){
        super(color);
    }
    private drive(): void {
        console.log("Driving my car")
    }

    startDriving(): void {
        this.drive();
    }
}

const vehicle = new Vehicle("grey");
const car = new Car(5, "yellow");

// by marking a modifier as private we are not adding any application security.