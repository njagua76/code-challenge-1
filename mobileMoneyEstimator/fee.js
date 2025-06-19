function estimateTransactionFee(amountToSend) {
    // Calculate the basic fee as 1.5% of the amount
    let fee = amountToSend * 0.015;

    // Apply minimum and maximum fee limits
    if (fee < 10) {
        fee = 10;
    } else if (fee > 70) {
        fee = 70;
    }

    // Calculate total amount to be debited
    let totalAmount = amountToSend + fee;

    // Print the results
    console.log(`Sending KES ${amountToSend}`);
    console.log(`Calculated transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}`);
}

// Prompt user to enter the amount
let userInput =window.prompt("Enter the amount you wish to send:");
let amountToSend = Number(userInput);

estimateTransactionFee(amountToSend);
