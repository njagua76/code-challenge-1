// chai.js

// Function to calculate chai ingredients
function calculateChaiIngredients(numberOfCups) {
    const waterPerCup = 200; // ml
    const milkPerCup = 50;   // ml
    const teaPerCup = 1;     // tablespoon
    const sugarPerCup = 2;   // teaspoons

    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTea = teaPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;

    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTea} tablespoons`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
    console.log("Enjoy your Chai Bora!");
}

// Prompt user for number of cups
const cupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(cupsInput);

// Call the function
calculateChaiIngredients(numberOfCups);
