function greek(a, b) {
    return [a, b];
}
console.log(greek("Hi", 20));
var example = {
    name: 'Anusha',
    age: 20,
    data: { greeting: 'hi' }
};
console.log(example);
function printPersonProperty(person, property) {
    console.log("Printing person property ".concat(property, ": \"").concat(person[property], "\""));
}
var person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "name");
var a = null;
console.log(typeof a);
function printYardSize(house) {
    var _a;
    var yardSize = (_a = house.yard) === null || _a === void 0 ? void 0 : _a.sqft;
    if (yardSize === undefined) {
        console.log('No yard');
    }
    else {
        console.log("Yard is ".concat(yardSize, " sqft"));
    }
}
var home = {
    sqft: 500,
    yard: {
        sqft: 200
    }
};
printYardSize(home);
function printMileage(mileage) {
    console.log("Mileage: ".concat(mileage !== null && mileage !== void 0 ? mileage : 'Not Available'));
}
printMileage(null);
printMileage(0);
printMileage(undefined);
