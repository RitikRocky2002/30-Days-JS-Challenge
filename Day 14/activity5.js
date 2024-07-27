// +++++++++++++++++++++++++++++ Activity 5 : Private Fields (Optional)  +++++++++++++++++++++++++++++

// Task 9 : Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
  #balance = 0;

  constructor(initialBalance = 0) {
    if (initialBalance >= 0) {
      this.#balance = initialBalance;
    } else {
      console.error("Initial balance cannot be negative.");
    }
  }
  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
    } else {
      console.error("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn: ${amount}. New balance: ${this.#balance}`);
    } else {
      console.error("Invalid withdraw amount or insufficient balance.");
    }
  }
}

// Task 10 : Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

const myAccount = new Account(100);
console.log(myAccount.getBalance());

myAccount.deposit(50);
console.log(myAccount.getBalance());

myAccount.withdraw(30);
console.log(myAccount.getBalance());
