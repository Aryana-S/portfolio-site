//Scentopia Budget Assistant

let startupName = "Scentopia";

let initialCapital = 50000;
let monthlyRevenue = 5000;
let monthlyExpenses = 4500;

let netCashFlow = monthlyRevenue - monthlyExpenses;

let currentBalance = initialCapital + netCashFlow;

let isProfitable = netCashFlow > 0;


console.log("Startup Name: " + startupName);
console.log("Net Monthly Cash Flow: $" + netCashFlow);
console.log("Current Balance: $ " + currentBalance);
console.log("Profitability Status: " + isProfitable);
