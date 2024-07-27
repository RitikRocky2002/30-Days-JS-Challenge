// +++++++++++++++++++++++++++++ Activity 3 : Static Methods and Properties  +++++++++++++++++++++++++++++

// Task 5 : Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static greeting() {
    return `Welcome to our Website!`;
  }
}

console.log(Person.greeting());

// Task 6 : Add a static property to the Student class to keep track of the numbers of students created. Increment this property in the constructor and log the total number of students.

class Student extends Person {
  static numOfStd = 0;
  constructor(name, age, ID) {
    super(name, age);
    this.ID = ID;
    Student.numOfStd++;
  }
  getID() {
    return this.ID;
  }
}

const student = new Student("Jack Woods", 21, "123");
const student2 = new Student("James Denver", 23, "123abc");
const student3 = new Student("John Mark", 25, "abc123");
const student4 = new Student("Jack Daniels", 20, "1a2b3c");

console.log(`Number of Student class instance is ${Student.numOfStd}`);
