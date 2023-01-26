// interface is a type object
interface Summary {
    // function
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

function printSummary(item: Summary): void {
    console.log(item.summary());
}

printSummary(oldCivic);
printSummary(drink);