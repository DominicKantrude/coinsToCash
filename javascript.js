



                                           //Coins to Cash
const piggyBank = {
    quarters: 3,
    nickels: 5,
    dimes: 7,
    pennies: 32,

    getOverallBankMoney: function() {
        quarterAmount = this.quarters * 25;
        nickelAmount = this.nickels * 5;
        dimesAmount = this.dimes * 10;

        return quarterAmount + nickelAmount + dimesAmount + this.pennies;
    }
}

let dollarAmount = piggyBank.getOverallBankMoney();
console.log(dollarAmount);







