const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// create a type alias
type Drink = [string, boolean, number];

// turns an array into a tuple
const pepsi: Drink = ['brown', true, 40]
const tea: Drink = ['browb', false, 0]