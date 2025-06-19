// fare.js

// Function to calculate boda boda fare
function calculateBodaFare(distanceInKm) {
    const baseFare = 50; // KES
    const chargePerKm = 15; // KES per km

    const totalFare = baseFare + (distanceInKm * chargePerKm);

    console.log(`For a distance of ${distanceInKm} km:`);
    console.log(`Your total boda boda fare is: KES ${totalFare}.`);
    console.log("Thank you for choosing our Boda Service! 🛵");
}

// Prompt the user for distance
const distanceInput = prompt("Karibu! Enter the distance of your trip in kilometers:");
const distanceInKm = Number(distanceInput);

// Call the function
calculateBodaFare(distanceInKm);
