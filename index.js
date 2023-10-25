var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Name = "Doe";
//Create an enum for days of the weeks
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["MONDAY"] = 1] = "MONDAY";
    DaysOfWeek[DaysOfWeek["TUESDAY"] = 2] = "TUESDAY";
    DaysOfWeek[DaysOfWeek["WEDNESDAY"] = 3] = "WEDNESDAY";
    DaysOfWeek[DaysOfWeek["THURSDAY"] = 4] = "THURSDAY";
    DaysOfWeek[DaysOfWeek["FRIDAY"] = 5] = "FRIDAY";
    DaysOfWeek[DaysOfWeek["SATURDAY"] = 6] = "SATURDAY";
    DaysOfWeek[DaysOfWeek["SUNDAY"] = 7] = "SUNDAY";
})(DaysOfWeek || (DaysOfWeek = {}));
function getDayString(dayValue) {
    if (dayValue in DaysOfWeek) {
        return DaysOfWeek[dayValue];
    }
    return "Invalid day value";
}
// Example usage
var dayValue = 3; // Replace with the numeric value for the day you want to get the string representation for
var dayString = getDayString(dayValue);
console.log("Day: ".concat(dayString));
//Define an enum for basice geometrice shapes and write a function
var Geometriceshape;
(function (Geometriceshape) {
    Geometriceshape["CIRCLE"] = "circle";
    Geometriceshape["RECTANGLE"] = "rectangle";
    Geometriceshape["TRIANGLE"] = "triangle";
    Geometriceshape["SQUARE"] = "square";
})(Geometriceshape || (Geometriceshape = {}));
function describeshapes(shapes) {
    switch (shapes) {
        case Geometriceshape.CIRCLE:
            return true;
        case Geometriceshape.RECTANGLE:
            return true;
        case Geometriceshape.TRIANGLE:
            return true;
        case Geometriceshape.SQUARE:
            return true;
    }
}
//Create an enum represnting Http status codes 
var HttpStatusCodes;
(function (HttpStatusCodes) {
    HttpStatusCodes[HttpStatusCodes["ACCEPTED"] = 0] = "ACCEPTED";
    HttpStatusCodes[HttpStatusCodes["BADREQUEST"] = 1] = "BADREQUEST";
    HttpStatusCodes[HttpStatusCodes["CREATE"] = 2] = "CREATE";
    HttpStatusCodes[HttpStatusCodes["FOUND"] = 3] = "FOUND";
    HttpStatusCodes[HttpStatusCodes["OK"] = 4] = "OK";
})(HttpStatusCodes || (HttpStatusCodes = {}));
function getStatusMessage(codes) {
    switch (codes) {
        case HttpStatusCodes.ACCEPTED:
            return 'accepted';
        case HttpStatusCodes.BADREQUEST:
            return 'bad request';
        case HttpStatusCodes.CREATE:
            return 'create';
        case HttpStatusCodes.FOUND:
            return 'found';
        case HttpStatusCodes.OK:
            return 'ok';
        default:
            return "Unkonw Status Code";
    }
}
//Create a type that accepts only specific enum
var myEnum;
(function (myEnum) {
    myEnum["Value1"] = "value1";
    myEnum["Value2"] = "value2";
    myEnum["Value3"] = "value3";
})(myEnum || (myEnum = {}));
//Write a function that iterates through the keys 
var myKeys;
(function (myKeys) {
    myKeys[myKeys["Value1"] = 0] = "Value1";
    myKeys[myKeys["Value2"] = 1] = "Value2";
    myKeys[myKeys["value3"] = 2] = "value3";
})(myKeys || (myKeys = {}));
function getEnumKeys(enumObj) {
    var values = [];
    for (var key in enumObj) {
        if (enumObj.hasOwnProperty(key)) {
            var value = enumObj[key];
            values.push(value);
        }
    }
    return values;
}
var person = {
    Name: "Temple",
    Email: "Temple123@gmail.com",
    Age: 30,
};
var point = { X: 20, Y: 50 };
var shopping = {
    Name: "Davi's A",
    Price: 30.5,
    Quantity: 30,
};
var nameEmployee = {
    FirstName: 'mark',
    Age: 50,
    employeeId: "123450",
    jobTitle: "Developer"
};
var add = function (x, y) { return x + y; };
var subtract = function (X, Y) { return X + Y; };
var result1 = add(4, 1);
var result = subtract(6, 2);
var myCar = {
    make: "Toyota",
    model: "GLK",
    year: 2008,
};
var completeUser = {
    username: "KALU Temple",
    email: "kalutemple@gmail.com",
    password: "temple",
    age: 39,
};
var partialUser = {
    username: "Doe",
    email: "tessy@gmail.com",
    password: "makepassword",
};
var Block = /** @class */ (function () {
    function Block(radius) {
        this.radius = radius;
    }
    Block.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Block;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, hight) {
        this.width = width;
        this.hight = hight;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.hight;
    };
    return Rectangle;
}());
function printUserInfo(user) {
    console.log("Username: ".concat(user.username));
    console.log("Email:".concat(user.email, " "));
    console.log("Password:".concat(user.password));
    console.log("Age:".concat(user.age));
}
var userObject = {
    username: "peter john",
    email: "peterjohn@gmail.com",
    password: "peter",
    age: 30,
};
//Write an interface for a class constructor and 
var myName = /** @class */ (function () {
    function myName(name, age) {
        this.name = name;
        this.age = age;
    }
    return myName;
}());
var myNameClass = myName;
var mynameObject = new myNameClass("John Doe", 20);
//Object Types
//Define an object type for a book with properties 
var book = {
    title: "Power of Grace",
    author: "Danile Peter",
};
var myperson = {
    name: "Jake",
    address: {
        country: "Enugu",
        city: "Nigeria"
    }
};
//Implement an object type for a shopping cart item with methods to update the quantity.
var ShoppingCartItem = /** @class */ (function () {
    function ShoppingCartItem(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    ShoppingCartItem.prototype.updateQuantity = function (newQuantity) {
        if (newQuantity >= 0) {
            this.quantity = newQuantity;
        }
        else {
            console.error("Quantity cannot be negative.");
        }
    };
    return ShoppingCartItem;
}());
var item = new ShoppingCartItem("Product A", 20.99, 2);
console.log("Original Quantity: ".concat(item.quantity));
item.updateQuantity(3);
console.log("Updated Quantity: ".concat(item.quantity));
item.updateQuantity(-1);
console.log("Quantity after invalid update: ".concat(item.quantity));
var user = {
    name: "Temple",
    address: "Peter's streets",
    age: 40
};
function getHumanInfo(human) {
    return "Name:".concat(human.name, ", Age:").concat(human.age, ", Address:").concat(human.address);
}
var human = {
    name: "tessy",
    age: 25,
    address: "123 Abosi streets",
};
function processColors(colors) {
    colors.forEach(function (color, index) {
        console.log("Color ".concat(index + 1, ": $ {color}"));
    });
}
var colors = ["Red", "Black", "Yellow", "Blue"];
processColors(colors);
function findHighestLowestPrices(prices) {
    if (prices.length === 0) {
        return { highest: 0, lowest: 0 };
    }
    var highest = Math.max.apply(Math, prices);
    var lowest = Math.min.apply(Math, prices);
    return { highest: highest, lowest: lowest };
}
// Example usage
var prices = [19.99, 24.95, 14.99, 34.50, 9.99];
var deresult = findHighestLowestPrices(prices);
console.log("Highest Price: $".concat(deresult.highest));
console.log("Lowest Price: $".concat(deresult.lowest));
function sortName(names) {
    return names.sort();
}
var names = ["Alice", "Boob", "Charlie", "David", "Eva"];
var sortNames = sortName(names);
//Write a function that accepts an array type and returns a reversed array.
function reverseArray(arr) {
    return __spreadArray([], arr, true).reverse();
}
var originalArray = [1, 2, 3, 4, 5];
var reversedArray = reverseArray(originalArray);
console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);
function calculateDistance(coordinates) {
    var totalDistance = 0;
    for (var i = 1; i < coordinates.length; i++) {
        var current = coordinates[i];
        var previous = coordinates[i - 1];
        var distance = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
        totalDistance += distance;
    }
    return totalDistance;
}
var coordinates = [
    { x: 0, y: 0 },
    { x: 3, y: 4 },
    { x: 6, y: 8 },
    { x: 9, y: 12 },
];
var totalDistance = calculateDistance(coordinates);
console.log("Total Distance:", totalDistance);
//Union Types:
//Create a function that accepts a union type for numbers and returns the square of the input
function squareNumber(input) {
    if (typeof input === 'number') {
        return input * input;
    }
    else if (!isNaN(Number(input))) {
        return Math.pow(Number(input), 2);
    }
    else {
        throw new Error('Input is not a valid number.');
    }
}
var numberInput = 5;
var myresult = squareNumber(numberInput);
console.log("Square of ".concat(numberInput, " is: ").concat(result));
function calculateArea(shape, dimensions) {
    if (shape === "circle" && dimensions.length === 1) {
        var radius = dimensions[0];
        return Math.PI * Math.pow(radius, 2);
    }
    else if (shape === "square" && dimensions.length === 1) {
        var side = dimensions[0];
        return Math.pow(side, 2);
    }
    else if (shape === "triangle" && dimensions.length === 2) {
        var base = dimensions[0];
        var height = dimensions[1];
        return (base * height) / 2;
    }
    else {
        throw new Error("Invalid shape or dimensions.");
    }
}
var circleArea = calculateArea("circle", [5]);
var squareArea = calculateArea("square", [4]);
var triangleArea = calculateArea("triangle", [3, 6]);
console.log("Circle Area:", circleArea);
console.log("Square Area:", squareArea);
console.log("Triangle Area:", triangleArea);
function getType(input) {
    return typeof input;
}
var value1 = 49;
var value2 = "Peter";
var value3 = true;
function convertLength(value, fromUnit, toUnit) {
    if (fromUnit === "feet" && toUnit === "meters") {
        return value * 0.3048;
    }
    else if (fromUnit === "meters" && toUnit === "feet") {
        return value * 3.28084;
    }
    else if (fromUnit === toUnit) {
        return value;
    }
    else {
        throw new Error("Invalid unit conversion.");
    }
}
var lengthInFeet = 10;
var lengthInMeters = convertLength(lengthInFeet, "feet", "meters");
console.log("".concat(lengthInFeet, " feet is ").concat(lengthInMeters, " meters"));
var lengthInMeters2 = 5;
var lengthInFeet2 = convertLength(lengthInMeters2, "meters", "feet");
console.log("".concat(lengthInMeters2, " meters is ").concat(lengthInFeet2, " feet"));
function processItems(items) {
    items.forEach(function (item) {
        if (typeof item === 'number') {
            console.log("This is a number: ".concat(item));
            // You can perform number-specific processing here.
        }
        else if (typeof item === 'string') {
            console.log("This is a string: ".concat(item));
            // You can perform string-specific processing here.
        }
    });
}
// Example usage
var items = [42, "Hello", 3.14, "World"];
processItems(items);
var person1 = {
    name: "John Doe",
    age: 30,
};
var person2 = {
    name: "Jane Smith",
    age: 25,
    email: "jane@example.com",
};
var person3 = {
    name: "Bob Johnson",
    age: 35,
    email: "bob@example.com",
    phone: "555-1234",
};
function greetPerson(person) {
    var name = person.name, age = person.age, email = person.email, phone = person.phone;
    if (name && age) {
        console.log("Name: ".concat(name, ", Age: ").concat(age));
    }
    else {
        console.log("Name and age are required.");
        return;
    }
    if (email) {
        console.log("Email: ".concat(email));
    }
    else {
        console.log("Email is missing.");
    }
    if (phone) {
        console.log("Phone: ".concat(phone));
    }
    else {
        console.log("Phone is missing.");
    }
}
var person7 = {
    name: "John Doe",
    age: 30,
};
var person5 = {
    name: "Jane Smith",
    age: 25,
    email: "jane@example.com",
};
greetPerson(person1);
greetPerson(person2);
var config1 = {
    setting1: "Value 1",
    setting2: 42,
};
var config2 = {
    setting1: "Value 2",
    setting2: 10,
    setting3: true,
};
var config3 = {
    setting1: "Value 3",
    setting2: 20,
    setting4: "Optional Value",
};
//Write a function that accepts an optional type and handles both defined and undefined inputs.
function processInput(input) {
    if (input !== undefined) {
        console.log("Input is defined: ".concat(input));
    }
    else {
        console.log("Input is undefined.");
    }
}
processInput("Defined input");
processInput();
var adds = function (num1, num2) { return num1 + num2; };
function performOperation(a, b, callback) {
    if (callback) {
        return callback(a, b);
    }
    return a + b;
}
var result9 = performOperation(5, 3);
console.log("Result 1:", result1);
var result2 = performOperation(5, 3, add);
console.log("Result 2:", result2);
