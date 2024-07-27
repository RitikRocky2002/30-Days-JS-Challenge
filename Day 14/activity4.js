// +++++++++++++++++++++++++++++ Activity 4 : Getters and Setters +++++++++++++++++++++++++++++

// Task 7 : Add a getter method to the Person class to return the fullname (assume a firstName and lastName property). Create an instance and log the full name using the getter.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullname() {
    console.log(this.firstName + " " + this.lastName);
  }
}
const p1 = new Person("Ritik", "Parida");
p1.fullname;

// Task 8 : Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated fullname

Object.defineProperty(Person.prototype, "fullname", {
  set: function (fullname) {
    const [firstName, lastName] = fullname.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  },
});

p1.fullname = "John Doe";
p1.fullname;
