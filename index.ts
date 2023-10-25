let Name: string = "Doe"

//Create an enum for days of the weeks

enum DaysOfWeek {
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
    SUNDAY = 7
}

function getDayString(dayValue: number): string {
    if (dayValue in DaysOfWeek) {
        return DaysOfWeek[dayValue];
    }
    return "Invalid day value";
}

// Example usage
const dayValue = 3; // Replace with the numeric value for the day you want to get the string representation for
const dayString = getDayString(dayValue);
console.log(`Day: ${dayString}`);



//Define an enum for basice geometrice shapes and write a function

enum Geometriceshape {
    CIRCLE = 'circle',
    RECTANGLE = 'rectangle',
    TRIANGLE = 'triangle',
    SQUARE = 'square',
}

function describeshapes (shapes: Geometriceshape){
   switch (shapes){
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


enum HttpStatusCodes {
    ACCEPTED,
    BADREQUEST,
    CREATE,
    FOUND,
    OK,
}

function getStatusMessage (codes: HttpStatusCodes): string {
  switch (codes){
    case HttpStatusCodes.ACCEPTED:
    return 'accepted'
    case HttpStatusCodes.BADREQUEST:
        return 'bad request'
    case HttpStatusCodes.CREATE:
        return 'create'
    case HttpStatusCodes.FOUND:
        return 'found'
    case HttpStatusCodes.OK:
        return 'ok'

        default:
            return "Unkonw Status Code"
  }
}


//Create a type that accepts only specific enum

enum myEnum {
    Value1 = 'value1',
    Value2 = 'value2',
    Value3 = 'value3',
}
type EnumValue <T extends Record<string, any>, U extends string> = {
    [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

type    OnlySpecficEnumValues = EnumValue<typeof myEnum, 'Value1' | 'Value3'>;




//Write a function that iterates through the keys 

enum myKeys {
    Value1,
    Value2,
    value3
}
function getEnumKeys<T extends Record<string, string>>(enumObj : T): string[]{
    const values:string[] = []
    for (const key in enumObj){
        if(enumObj.hasOwnProperty(key)){
            const value = enumObj[key];
            values.push(value)
        }
    }
    return values;
}



//TYPES

//Define a type for a person with properties 

type Person = {
    Name : string;
    Email: string;
    Age: number;
}

const person:Person = {
    Name : "Temple",
    Email: "Temple123@gmail.com",
    Age : 30,
    
};


//.Create a custom type for representing a point in 2D space (x and y coordinates)
type Point2D = {
    X: number;
    Y: number;
}
const point : Point2D = {X:20, Y:50};



//Implement a type for a shopping cart item with a name, price, and quantity.

type Shopping = {
    Name : string;
    Price: number;
    Quantity: number;
}
const shopping: Shopping ={
    Name : "Davi's A",
    Price : 30.5,
    Quantity: 30,
}


//Write a type that combines two existing types into a new one.


type Name = {
 FirstName: string
 Age: number
};

type Employee = {
    employeeId : string
    jobTitle : string
};

type NameEmployee = Name & Employee;

const nameEmployee: NameEmployee = {
 FirstName:'mark',
 Age: 50,
 employeeId: "123450",
 jobTitle: "Developer"
};


//Define a type for a callback function

type NumberCallback = (a: number, b: number) => number;
const add: NumberCallback = (x, y) => x + y;
const subtract: NumberCallback = (X, Y) => X + Y;

const result1 = add (4, 1)
const result = subtract (6, 2)


//Interfaces:

//Create an interface for a vehicle with properties 

interface Vehicle {
    make: string
    model : string
    year: number
    
}

const myCar : Vehicle = {
    make: "Toyota",
    model: "GLK",
    year: 2008,
}


//Define an interface for a user with required and optional 

interface User {
    username:string
    email:string 
    password:string 
    age?: number
}
const completeUser : User = {
    username: "KALU Temple",
    email: "kalutemple@gmail.com",
    password: "temple",
    age:39,
}
const partialUser: User = {
    username: "Doe",
    email: "tessy@gmail.com",
   password: "makepassword",
}


//.Implement an interface for a geometric shape 

interface Geometric {
    calculateArea():number
}

class Block implements Geometric{
    constructor(private radius : number) {}

    calculateArea(): number {
        return Math.PI * this.radius ** 2
    }
}
class Rectangle implements Geometric{
    constructor(private width: number, private hight: number) {}
    calculateArea() : number {
        return this.width * this.hight
    }
}


//Create a function that accepts an object with an 

interface User {
    username:string;
    email:string;
    password:string;
    age?:number;
}

function printUserInfo(user:User){
    console.log(`Username: ${user.username}`);
    console.log(`Email:${user.email} `);
    console.log(`Password:${user.password}`);
    console.log(`Age:${user.age}`);
}
const userObject:User = {
    username: "peter john",
    email:"peterjohn@gmail.com",
    password:"peter",
    age:30,
};



//Write an interface for a class constructor and 

class myName {
    constructor( public name:string, public age:number){}
}
interface myNameConstructor{
    new(name:string, age: number): myName
}
const myNameClass: myNameConstructor = myName;
const mynameObject = new myNameClass("John Doe", 20);



//Object Types

//Define an object type for a book with properties 

const book:{title:string, author:string} = {
    title: "Power of Grace",
    author:"Danile Peter",
}


//Create an object type for a person with nested address properties

interface myPerosn {
name: string;
address: {
    country: string;
    city: string
};
}
const myperson: myPerosn = {
    name:"Jake",
    address: {
    country:"Enugu",
    city: "Nigeria"
    }
};


//Implement an object type for a shopping cart item with methods to update the quantity.

class ShoppingCartItem {
    constructor(public name: string, public price: number, public quantity: number) {}

    updateQuantity(newQuantity: number): void {
        if (newQuantity >= 0) {
            this.quantity = newQuantity;
        } else {
            console.error("Quantity cannot be negative.");
        }
    }
}

const item = new ShoppingCartItem("Product A", 20.99, 2);
console.log(`Original Quantity: ${item.quantity}`); 

item.updateQuantity(3);
console.log(`Updated Quantity: ${item.quantity}`);

item.updateQuantity(-1); 
console.log(`Quantity after invalid update: ${item.quantity}`); 




//Define an object type for a user with properties for name, age, and address.


type myUser  = {
 name: string
 address: string
 age: number
}
const user: myUser = {
    name:"Temple",
    address: "Peter's streets",
    age: 40
}


//Write a function that accepts an object type as a parameter and returns a string.

type Human = {
    name: string
    age: number
    address: string
};
function getHumanInfo (human: Human):string{
    return `Name:${human.name}, Age:${human.age}, Address:${human.address}`
}
const human:Human = {
    name:"tessy",
    age : 25,
    address: "123 Abosi streets",
}





//Array Types:

//Create an array type for a list of colors and write 

type Color = string;
type ColorArray = Color[];

function processColors(colors: ColorArray): void {
    colors.forEach((color, index) => {
        console.log(`Color ${index + 1}: $ {color}`);
    }) 
}
const colors: ColorArray = ["Red", "Black", "Yellow", "Blue"]
processColors(colors);




//Define an array type for a list of product prices and find the highest and

type ProductPriceArray = number[];

function findHighestLowestPrices(prices: ProductPriceArray): { highest: number, lowest: number } {
    if (prices.length === 0) {
        return { highest: 0, lowest: 0 };
    }

    const highest = Math.max(...prices);
    const lowest = Math.min(...prices);

    return { highest, lowest };
}

// Example usage
const prices: ProductPriceArray = [19.99, 24.95, 14.99, 34.50, 9.99];
const deresult = findHighestLowestPrices(prices);

console.log(`Highest Price: $${deresult.highest}`);
console.log(`Lowest Price: $${deresult.lowest}`);




//Implement an array type for a list of names and sort them in alphabetical order.


type NameArray = string[];
function sortName(names: NameArray): NameArray{
    return names.sort();
}

const names: NameArray = ["Alice","Boob", "Charlie", "David", "Eva"]
const sortNames = sortName (names);




//Write a function that accepts an array type and returns a reversed array.

function reverseArray<T>(arr: T[]): T[] {
    return [...arr].reverse();
}


const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);

console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);




//.Create an array type for a list of coordinates (x and y) and calculate the total distance.
type Coordinate = { x: number; y: number };
type CoordinateArray = Coordinate[];

function calculateDistance(coordinates: CoordinateArray): number {
    let totalDistance = 0;

    for (let i = 1; i < coordinates.length; i++) {
        const current = coordinates[i];
        const previous = coordinates[i - 1];

        
        const distance = Math.sqrt(
            Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2)
        );

        totalDistance += distance;
    }

    return totalDistance;
}


const coordinates: CoordinateArray = [
    { x: 0, y: 0 },
    { x: 3, y: 4 },
    { x: 6, y: 8 },
    { x: 9, y: 12 },
];

const totalDistance = calculateDistance(coordinates);
console.log("Total Distance:", totalDistance);




//Union Types:


//Create a function that accepts a union type for numbers and returns the square of the input

function squareNumber(input: number | string): number {
    if (typeof input === 'number') {
        return input * input;
    } else if (!isNaN(Number(input))) {
        return Math.pow(Number(input), 2);
    } else {
        throw new Error('Input is not a valid number.');
    }
}

const numberInput: number | string = 5;
const myresult = squareNumber(numberInput);
console.log(`Square of ${numberInput} is: ${result}`);



//.Define a union type for different shapes (circle, square, triangle) and calculate their areas.
type Shape = "circle" | "square" | "triangle";

function calculateArea(shape: Shape, dimensions: number[]): number {
    if (shape === "circle" && dimensions.length === 1) {
        const radius = dimensions[0];
        return Math.PI * Math.pow(radius, 2); 
    } else if (shape === "square" && dimensions.length === 1) {
        const side = dimensions[0];
        return Math.pow(side, 2); 
    } else if (shape === "triangle" && dimensions.length === 2) {
        const base = dimensions[0];
        const height = dimensions[1];
        return (base * height) / 2; 
    } else {
        throw new Error("Invalid shape or dimensions.");
    }
}


const circleArea = calculateArea("circle", [5]); 
const squareArea = calculateArea("square", [4]);
const triangleArea = calculateArea("triangle", [3, 6]);

console.log("Circle Area:", circleArea);
console.log("Square Area:", squareArea);
console.log("Triangle Area:", triangleArea);



//.Implement a union type for different data types (number, string, boolean) and return the type of the 

type DataType = number | string | boolean;

function getType(input:DataType):string{
    return typeof input;
}
const value1: DataType = 49;
const value2: DataType = "Peter";
const value3: DataType = true;



//.Write a function that accepts a union type for different units (feet, meters) and converts between them.

type Unit = "feet" | "meters";

function convertLength(value: number, fromUnit: Unit, toUnit: Unit): number {
    if (fromUnit === "feet" && toUnit === "meters") {
        
        return value * 0.3048;
    } else if (fromUnit === "meters" && toUnit === "feet") {
        
        return value * 3.28084;
    } else if (fromUnit === toUnit) {
        
        return value;
    } else {
        throw new Error("Invalid unit conversion.");
    }
}


const lengthInFeet = 10;
const lengthInMeters = convertLength(lengthInFeet, "feet", "meters");
console.log(`${lengthInFeet} feet is ${lengthInMeters} meters`);

const lengthInMeters2 = 5;
const lengthInFeet2 = convertLength(lengthInMeters2, "meters", "feet");
console.log(`${lengthInMeters2} meters is ${lengthInFeet2} feet`);




//.Create a type for a list of items that can be numbers or strings, and process the items accordingly

type Item = number | string;
type ItemList = Item[];

function processItems(items: ItemList): void {
    items.forEach((item) => {
        if (typeof item === 'number') {
            console.log(`This is a number: ${item}`);
            // You can perform number-specific processing here.
        } else if (typeof item === 'string') {
            console.log(`This is a string: ${item}`);
            // You can perform string-specific processing here.
        }
    });
}

// Example usage
const items: ItemList = [42, "Hello", 3.14, "World"];
processItems(items);



//Optional Types:


//Define an object type for a person with optional properties for email and phone.

type Person0 = {
    name: string;
    age: number;
    email?: string;
    phone?: string;
};


const person1: Person0 = {
    name: "John Doe",
    age: 30,
};

const person2: Person0 = {
    name: "Jane Smith",
    age: 25,
    email: "jane@example.com",
};

const person3: Person0 = {
    name: "Bob Johnson",
    age: 35,
    email: "bob@example.com",
    phone: "555-1234",
};



//Create a function that accepts an object with optional properties and handles missing value

type Persons = {
    name: string;
    age: number;
    email?: string;
    phone?: string;
};

function greetPerson(person: Persons): void {
    const { name, age, email, phone } = person;

    if (name && age) {
        console.log(`Name: ${name}, Age: ${age}`);
    } else {
        console.log("Name and age are required.");
        return;
    }

    if (email) {
        console.log(`Email: ${email}`);
    } else {
        console.log("Email is missing.");
    }

    if (phone) {
        console.log(`Phone: ${phone}`);
    } else {
        console.log("Phone is missing.");
    }
}


const person7: Persons = {
    name: "John Doe",
    age: 30,
};

const person5: Persons = {
    name: "Jane Smith",
    age: 25,
    email: "jane@example.com",
};

greetPerson(person1);
greetPerson(person2);



//.Implement a type for a configuration object with optional settings.

type Configuration = {
    setting1: string;
    setting2: number;
    setting3?: boolean; 
    setting4?: string;  
};


const config1: Configuration = {
    setting1: "Value 1",
    setting2: 42,
};

const config2: Configuration = {
    setting1: "Value 2",
    setting2: 10,
    setting3: true,     
};

const config3: Configuration = {
    setting1: "Value 3",
    setting2: 20,
    setting4: "Optional Value", 
};


//Write a function that accepts an optional type and handles both defined and undefined inputs.

function processInput(input?: string): void {
    if (input !== undefined) {
        console.log(`Input is defined: ${input}`);
        
    } else {
        console.log("Input is undefined.");
        
    }
}

processInput("Defined input"); 
processInput(); 



//.Define an optional type for a callback function that takes two numbers and returns a number.

type OptionalCallback = ((param1: number, param2: number) => number) | undefined;


const adds: OptionalCallback = (num1, num2) => num1 + num2;

function performOperation(a: number, b: number, callback?: OptionalCallback): number {
    if (callback) {
        return callback(a, b);
    }
    return a + b; 
}

const result9 = performOperation(5, 3); 
console.log("Result 1:", result1);

const result2 = performOperation(5, 3, add);
console.log("Result 2:", result2);
