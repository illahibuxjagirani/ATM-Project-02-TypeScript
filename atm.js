import inquirer from "inquirer";
const userInput = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Enter User ID"
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter your Pin"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select Your Account Type"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Cash Withdraw", "Balance Inquiry"],
        message: "Select your transaction"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter amount you want to withdraw",
        when(userInput) {
            return userInput.transactionType === "Cash Withdraw";
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 5000, 10000, 20000, 25000],
        message: "Select amount you want to withdraw",
        when(userInput) {
            return userInput.transactionType === "Fast Cash";
        }
    }
]);
// making variables of user input data
const userID = userInput.userID;
const userPin = userInput.userPin;
const enteredAmount = userInput.amount;
if ((userID && userPin) && userInput.transactionType === "Balance Inquiry") {
    const userBalance = Math.floor(Math.random() * 100000);
    console.log(`Your current balance is Rs ${userBalance}\n`);
}
else if (userID && userPin) {
    const userBalance2 = Math.floor(Math.random() * 100000);
    if (userBalance2 > enteredAmount) {
        console.log(`Your account has been debited with Rs ${enteredAmount} and your remaining balance is ${userBalance2 - enteredAmount}`);
    }
    else {
        console.log(`\n Unsufficient Balance`);
    }
}
