// +++++++++++++++++++++++++++++ Activity 3 : Data Types +++++++++++++++++++++++++++++

// Task 4 : Create variables of different data types (number,string,boolean,object,array) and log each variable's type using the typeof operator.

// symbol
const symbol = Symbol("symbol");
console.log(symbol, typeof symbol); //Output :  symbol

// bigInt
let bigInt = BigInt(12345678901234567890);
console.log(typeof bigInt); //Output :  bigint
bigInt = 2342345345n;
console.log(typeof bigInt); //Output :  bigint

// null
let a = null;
console.log(typeof a); //Output : object

// undefined
let b;
console.log(typeof b); //Output :undefined

// number
let score = new Number(100);
console.log(typeof score); //Output : object
score = 100;
console.log(typeof score); //Output : number

// string
let username = new String("Ritik Shekhar Parida");
console.log(typeof username); //Output : object
username = "Rocky";
console.log(typeof username); //Output : string

// boolean
let isOnline = new Boolean(true);
console.log(typeof isOnline); //Output : object
isOnline = true;
console.log(typeof isOnline); //Output : boolean

// object
let user = new Object({
  name: "Ritik Shekhar Parida",
  age: 21,
  isOnline: true,
});
console.log(typeof user); //Output : object

const user2 = {
  name: "Ritik Shekhar Parida",
  age: 21,
  isOnline: false,
};
console.log(typeof user2); //Output : object

// array
let arr = new Array(12, 234, 34, 234);
console.log(typeof arr); //Output : object
arr = ["sdf", "df", "sdfa"];
console.log(typeof arr); //Output : object
