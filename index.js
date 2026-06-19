const account = {
    owner: "Blur",
    balance: 0,
    deposit: function(num){
        if (num <= 0) return "Invalid amount";
        else this.balance += num;
    },
    withdraw: function(num){
        if (num <= 0) return "Invalid amount";
        else if (num > this.balance) return "Insufficient funds";
        else this.balance -= num;
    },
    getBalance: function(){
        return `Owner: ${this.owner} | Balance: $${this.balance}`;
    }
}

account.deposit(1000);
console.log(account.deposit(-50));
account.withdraw(200);
console.log(account.withdraw(900));
console.log(account.withdraw(900));
console.log(account.withdraw(0));
console.log(account.getBalance());