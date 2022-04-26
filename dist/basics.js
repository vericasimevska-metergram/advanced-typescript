"use strict";
let id = 5;
let company = 'Metergram';
let isPublished = true;
let x = "hello";
let age;
age = 30;
let ids = [1, 2, 3]; //array
let arr = ['example', 2, true]; //with any we can have diffrent types
let person = [1, 'Hello', true]; //tuples
let employee; // array tuples
employee = [
    [1, 'Verica'],
    [2, 'Dimitar']
];
let er = 22; //union -  it can have string or number
//enum it has default values starting with 0,1,2...
//with starting default 1 we are having 2,3,4...
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1[Direction1["right"] = 4] = "right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.left);
var Direction2;
(function (Direction2) {
    Direction2["up"] = "Up";
    Direction2["down"] = "Down";
    Direction2["left"] = "Left";
    Direction2["right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.left);
const user = {
    id: 1,
    name: 'Verica'
};
//Type Assertion
let cid = 1;
let customerId = cid;
let customerId2 = cid;
console.log(customerId);
//Functions
//the last number tells us that every passed arg should be type number
function addNum(x, y) {
    return x + y;
}
//void bc we dont return any type we just print
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Verica'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const verica = new Person(22, 'verica');
const mitko = new Person(20, 'mitko');
console.log(verica.register());
//subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Verica', 'CEO');
console.log(emp.register());
//Generics
//T==type
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'jill']);
function greet(person) {
    return "Hello " + person.name;
}
greet({ name: 'newVerica', age: 22 });
