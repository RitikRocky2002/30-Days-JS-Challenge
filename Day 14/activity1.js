// +++++++++++++++++++++++++++++ Activity 1 : Class Definition  +++++++++++++++++++++++++++++

// Task 1 : Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  }
}

const p1 = new Person("Ritik", 20);
p1.greeting();

// Task 2 : Add a method to the Person class that updates the age property and logs the updated age.

Person.prototype.updateAge = function (newAge) {
  this.age = newAge;
};

p1.updateAge(21);
p1.greeting();
