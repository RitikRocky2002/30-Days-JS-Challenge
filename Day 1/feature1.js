// +++++++++++++++++++++++++++++ Feature 1 +++++++++++++++++++++++++++++

// Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

// symbol
const symbol = Symbol("symbol");
console.log(symbol, typeof symbol); //Output : Symbol(symbol) symbol

// bigInt
let bigInt = BigInt(12345678901234567890);
console.log(bigInt, typeof bigInt); //Output : 12345678901234567168n bigint
bigInt = 2342345345n;
console.log(bigInt, typeof bigInt); //Output : 2342345345n bigint

// null
let a = null;
console.log(a, typeof a); //Output : null, object

// undefined
let b;
console.log(b, typeof b); //Output : undefined, undefined

// number
let score = new Number(100);
console.log(score, typeof score); //Output : [Number: 100] object
score = 100;
console.log(score, typeof score); //Output : 100 number

// string
let username = new String("Ritik Shekhar Parida");
console.log(username, typeof username); //Output : [String: 'Ritik Shekhar Parida'] object
username = "Rocky";
console.log(username, typeof username); //Output : Rocky string

// boolean
let isOnline = new Boolean(true);
console.log(isOnline, typeof isOnline); //Output : [Boolean: true] object
isOnline = true;
console.log(isOnline, typeof isOnline); //Output : true boolean

// object
let user = new Object({
  name: "Ritik Shekhar Parida",
  age: 21,
  isOnline: true,
});
console.log(user, typeof user); //Output : { name: 'Ritik Shekhar Parida', age: 21, isOnline: true } object

const user2 = {
  name: "Ritik Shekhar Parida",
  age: 21,
  isOnline: false,
};
console.log(user2, typeof user2); //Output : { name: 'Ritik Shekhar Parida', age: 21, isOnline: false } object

// array
let arr = new Array(12, 234, 34, 234);
console.log(arr, typeof arr); //Output : [ 12, 234, 34, 234 ] object
arr = ["sdf", "df", "sdfa"];
console.log(arr, typeof arr); //Output : [ 'sdf', 'df', 'sdfa' ] object
