// +++++++++++++++++++++++++++++ Activity 2 : Class Inheritance +++++++++++++++++++++++++++++

// Task 3 : Define a class Student that extends the Person class. Add a property studentId and a method to return the studentId. Create an instance of the Student class and log the student ID
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

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
}

const s1 = new Student("Ritik", 21, 2001287145);
console.log(s1.studentId);
// Task 4 : Override the greeting method in the Student class to include the student ID in the messsage. Log the overridden greeting message.
Student.prototype.greeting = function () {
  console.log(
    `Hello, my name is ${this.name} and I am ${this.age} years old and my student ID is ${this.studentId}`
  );
};

s1.greeting();
