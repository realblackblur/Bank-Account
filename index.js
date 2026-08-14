const owner = {
    name: "Blur",
    balance: 0,

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        } else {
            this.balance += amount;
            return `Deposit successful. New balance: $${this.balance}`;
        }
    },
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        } else if (this.balance < amount) {
            throw new Error("Insufficient funds");
        } else {
            this.balance -= amount;
            return `Withdrawal successful. New balance: $${this.balance}`;
        }
    },
    getBalance() {
        return `Owner: ${this.name} | Balance: $${this.balance}`;
    }       
};


console.log(owner.deposit(500));

try {
    console.log(owner.deposit(-100));
} catch (error) {
    console.log("Error:", error.message);
}

console.log(owner.withdraw(500));

try {
    console.log(owner.withdraw(500));
} catch (error) {
    console.log("Error:", error.message);
}

console.log(owner.getBalance());
