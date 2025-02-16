import inquirer from "inquirer";
// Initialize user balance and pin code
let myBalance = 5000;
let myPin = 1234;
//Print welcome message
console.log("Welcome to Code with laiba - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is Correct, Login Sussessfully!");
    //console.log(`Current Account Balance is ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["Withdraw Ammount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Ammount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Account Balance is: ${myBalance}`);
    }
    else {
        console.log("wrong choice");
    }
}
else {
    console.log("Pin is Incorrect, Try Again");
}
