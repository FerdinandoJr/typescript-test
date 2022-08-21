// string, boolean, number, ...


let x:number = 10

x = 25

console.log(x);

// inferencia x annotation

let y = 12;

// tipos básicos

let firstName: string = "Matheus";
let age: number = 30;
const isAdmin: boolean = true;

// String != string

console.log(typeof firstName);

firstName = "João";

console.log(firstName);

//object

const myNumbers: number[] = [1,2,3]

console.log(myNumbers);
console.log(myNumbers.length);
//console.log(myNumbers.toUpperCase());  ERRO
console.log(firstName.toUpperCase());

myNumbers.push(5);

console.log(myNumbers)

// tuplas -> tuple
let myTuple: [number, string, string[]];

myTuple = [4, "opa", ["a", "b"]]

//object literals -> {prop: value}

const user: {name: string, age:number} ={
    name: "pedro",
    age: 19,
};

console.log(user);
console.log(user.name);

//user.job = "Programador" ERRO

//any
let a:any = 0;

a = "teste";
a = true;
a = [];

// union type

let id: string | number = "10";

id = 200;
id = "teste";

//id = true; ERRO
//id = [];  ERRO

//type alias
type myIdType = number | string;

const userId: myIdType = 10;
const productId: myIdType = "00001";
const shirId: myIdType = 123;

//enum
//tamanho de roupas {size: Médio, size:Pequeno}

enum Size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
};

const camisa = {
    name: "Camisa gola V",
    size: Size.M
}

console.log(camisa)

// literal types
let teste: "autenticado" | null;

//teste = "outrovalor";
teste = "autenticado";
teste = null

//funcoes
function sum(a:number,b:number){
    return a+b;
}

console.log(sum(12,12));
//console.log(sum(12,true)); ERRO

function sayHelloTo(name:string):string{
    return `Hello ${name}`;
}

console.log(sayHelloTo("Ferdinando"));

function logger(msg:string):void{
    console.log(msg);
}

logger("Teste!")

function greeting(name: string, greet?: string){
    if(greet){
        console.log(`Òlá ${greet} ${name}`)
        return;
    }
    console.log(`Òlá ${name}`)    
}

greeting("José")
greeting("Gustavo", "Sir");

//interface
interface MathFunctionParams{
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({n1: 1, n2: 2}));

function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2;
}

const sumeNubers: MathFunctionParams = {
    n1: 5,
    n2: 10
}


console.log(multiplyNumbers(sumeNubers));

//marrowing
//checagem tipos
function doSomething(info: number | boolean){
    if( typeof info === "number"){
        console.log(`Ò número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
    
}

doSomething(5);
doSomething(true);

// generics
function showArrayItens<T>(arr:T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
        
    })
}
const a1 = [1,2,3];
const a2 = ["a", "b", "c"];

showArrayItens(a1);
showArrayItens(a2);

//classes

class User{
    name;
    role;
    isApproved;

    constructor (name: string, role:string, isApproved: true){
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName(){
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canShow: boolean):void{
        if(canShow){
            console.log(`Função do usuário é: ${this.role}`);
            return;
        }
        console.log("Informação restrita!");
        
    }

}

const zeca = new User("Zeca", "Admin", true);

console.log(zeca)

zeca.showUserName();
zeca.showUserRole(false);

//interfaces em Classes
interface IVehicle{
    brand: string;
    showBrand():void
}

class Car implements IVehicle{
    brand;
    wheels;

    constructor(brand:string, wheels: number){
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`);        
    }
}

const fusca = new Car("VW", 4);

fusca.showBrand();

//heranca

class SuperCar extends Car{
    engine

    constructor(brand:string, wheels:number, engine:number){
        super(brand, wheels);
        this.engine = engine;
    }
}

const a4 = new SuperCar("Audi", 4, 2.0);

console.log(a4);

a4.showBrand();

// decorators

//constructor decorator
function BaseParamenters(){
    return function <T extends{new (...args: any[]): {}}>(constructor:T){
        return class extends constructor{
            id = Math.random();
            createdAt = new Date();
        };
    };
}

@BaseParamenters()
class Person{
    name;
    constructor(name:string){
        this.name=name;
    }
}

const sam = new Person("Sam");

console.log(sam);
