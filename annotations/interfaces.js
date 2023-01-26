var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary: function () {
        return "Name: ".concat(this.name);
    }
};
var drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "My drink has ".concat(this.sugar, " grams of sugar");
    }
};
function printSummary(item) {
    console.log(item.summary());
}
printSummary(oldCivic);
printSummary(drink);
