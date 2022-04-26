let id: number = 5
let company: string = 'Metergram'
let isPublished: boolean = true
let x: any = "hello"
let age: number
age = 30
let ids: number[] = [1,2,3] //array
let arr: any[] = ['example', 2, true] //with any we can have diffrent types
let person: [number, string, boolean] = [1, 'Hello', true] //tuples
let employee: [number, string][] // array tuples

employee = [
    [1, 'Verica'],
    [2, 'Dimitar']
]
let er: string | number = 22 //union -  it can have string or number

//enum it has default values starting with 0,1,2...
//with starting default 1 we are having 2,3,4...
enum Direction1 {
    up = 1,
    down,
    left,
    right
}
console.log(Direction1.left)

enum Direction2 {
    up = 'Up',
    down = 'Down',
    left = 'Left',
    right = 'Right'
}
console.log(Direction2.left)

//Objects
type User = {
    id: number,
    name: string
}
const user: User = {
    id:1,
    name: 'Verica'
}

//Type Assertion
let cid: any = 1
let customerId = <number>cid
let customerId2 = cid as number
console.log(customerId)

//Functions
//the last number tells us that every passed arg should be type number
function addNum(x: number, y: number): number{ 
    return x + y
}

//void bc we dont return any type we just print
 function log(message: string | number): void{
     console.log(message)
 }

 //Interface
 //age is optional parametar, we dont need to include it
 //id is readonly and we can't assign additional vvalue to it
 interface UserInterface {
   readonly id: number,
    name: string
    age?: number
}
const user1: UserInterface = {
    id:1,
    name: 'Verica'
}
//type can be used with primitives and unions, but interface can't

//using interface with a function
interface MathFunc{
    (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
     id: number,
     name: string
     register(): string
 }

//Classes
class Person implements PersonInterface{
    id: number
    name: string

    constructor(id: number, name: string){
    this.id = id
    this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }

}
const verica = new Person(22, 'verica')
const mitko = new Person(20, 'mitko')
console.log(verica.register())

//subclass
class Employee extends Person{
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Verica', 'CEO')
console.log(emp.register())

//Generics
//T==type
function getArray<T>(items: T[]): T[]{
return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad','john','jill'])

interface PersonNew {
    name: string;
    age: number;
  }
   
  function greet(person: PersonNew) {
    return "Hello " + person.name;
  }
  greet({name: 'newVerica', age:22})

