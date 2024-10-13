// complete this js code
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Greet method
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Employee Class (inherits from Person)
function Employee(name, age, jobTitle) {
    // Call Person constructor with name and age
    Person.call(this, name, age);
    this.jobTitle = jobTitle;

    // JobGreet method
    this.jobGreet = function() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// Inherit Person's prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Create instances and call methods
const person = new Person('Alice', 25);
person.greet();

const employee = new Employee('Bob', 30, 'Manager');
employee.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
