//Implementation of Object-Oriented programming using class
//constructor can be called whenever the object is created.
//we can call methods in class using object, without object not possible.
class Person {
    //constructor
    constructor(name) {
        //here this keyword represents current block. 
        this.name = name;
    }
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}

const data = "Hemanth";
//object creation
const person = new Person(data);
//calling method using object.
person.greet();
