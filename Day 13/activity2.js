// +++++++++++++++++++++++++++++ Activity 2 : Named and Default Exports  +++++++++++++++++++++++++++++

// Task 3 : Create a module that exports multiple functions using named exports. Import and use these functions in another script.
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}
// Task 4 : Create a module that exports a single function using default export. Import and use this function in another script.

export default function power(base, exponent) {
  return Math.pow(base, exponent);
}
