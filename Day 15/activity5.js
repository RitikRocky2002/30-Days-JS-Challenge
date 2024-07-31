// +++++++++++++++++++++++++++++ Activity 5 : Memoization +++++++++++++++++++++++++++++

// Task 7 : Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function sum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function memoizedSum(sum) {
  let cache = {};

  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("Returned from cache memory!");
      return cache[n];
    } else {
      console.log("Calculating for the first time!");
      let result = sum(n);
      cache[n] = result;
      return result;
    }
  };
}

const res = memoizedSum(sum);
console.log(res(5));
console.log(res(5));

/*  Output :
    Calculating for the first time!
    15
    Returned from cache memory!
    15
 */

// Task 8 : Create a memoized version of a function that calculates the factorial of a number.

function factorial(n) {
  let fact = 1;
  for (let i = n; i >= 1; i--) {
    fact *= i;
  }
  return fact;
}

function memoFactorial(factorial) {
  let factCache = {};

  return function (...args) {
    let n = args[0];
    if (n in factCache) {
      console.log("Returned from cache memory!");
      return factCache[n];
    } else {
      console.log("Calculating for the first time!");
      let result = factorial(n);
      factCache[n] = result;
      return result;
    }
  };
}

const memoFact = memoFactorial(factorial);

console.log(memoFact(5));
console.log(memoFact(5));

/*  Output :
Calculating for the first time!
120
Returned from cache memory!
120
 */
