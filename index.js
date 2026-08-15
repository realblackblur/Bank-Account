class BankAccount {
    #balance = 0; //private

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid Amount")
        } else {
            this.#balance += amount;
            return `Deposit successful. New balance: $${this.#balance}`
        }
    }

    withdraw(amount) {
        if(amount <= 0) {
            throw new Error("Invalid Amount")
        } else if(this.#balance < amount) {
            throw new Error("Insufficient Funds")
        } else {
            this.#balance -= amount;
            return `Withdrawal successful. New balance: $${this.#balance}`;
        }
    }

    getBalance() {
        return `Owner: ${this.name} | Balance: $${this.#balance}`;
    }
}

const owner1 = new BankAccount("Prism", 1000);
const owner2 = new BankAccount("Blur", 200);
const owner3 = new BankAccount("Halwi", 500);

//Prism
try {
    console.log(owner1.deposit(1000));
} catch(error) {
    console.log("Error:", error.message);
}

try {
    console.log(owner1.withdraw(3000));
} catch(error) {
    console.log("Error:", error.message);
}

try {
    console.log(owner1.getBalance());
} catch(error) {
    console.log("Error:", error.message);
}

//Blur
try {
    console.log(owner2.deposit(150));
} catch(error) {
    console.log("Error:", error.message);
}

try {
    console.log(owner2.deposit(-3000));
} catch(error) {
    console.log("Error:", error.message);
}

try {
    console.log(owner2.getBalance());
} catch(error) {
    console.log("Error:", error.message);
}

//Halwi
try {
    console.log(owner3.withdraw(1000));
} catch(error) {
    console.log("Error:", error.message);
}

try {
    console.log(owner3.deposit(3000));
} catch(error) {
    console.log("Error:", error.message);
}

try {
    console.log(owner3.getBalance());
} catch(error) {
    console.log("Error:", error.message);
}
