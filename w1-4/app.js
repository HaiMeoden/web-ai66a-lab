let bedrooms = 3;
const taxRate = 0.08;

if (bedrooms > 2) {
    console.log("This is a large house.");
} else {
    console.log("This is a small house.");
    console.error("Error: The number of bedrooms is less than or equal to 2.");
}


let house = [85, 90, 78, 92, 88];
let housesample = {id : 1, name: "House A", predictedPrice: 250000, actualPrice: 260000};
house [ 0 ] ; 
housesample.name ; 


//LAB 1 :
let samples = [
    { id: 1, result: 84 },
    { id: 2, result: 70 },
    { id: 3, result: 78 },
    { id: 4, result: 62 },
    { id: 5, result: 98 }
];

for (let i = 0; i < samples.length; i++) {
    if (samples[i].result >= 80) {
        console.log("ID:", samples[i].id, "- Good score");
    } else {
        console.log("ID:", samples[i].id, "- Bad score");
    }
}

function sumScore(samples) {
    let total = 0;

    for (let i = 0; i < samples.length; i++) {
        total += samples[i].result;
    }

    return total;
}

console.log("Total score:", sumScore(samples));


function findHighest(samples) {
    let highest = samples[0];

    for (let i = 1; i < samples.length; i++) {
        if (samples[i].result > highest.result) {
            highest = samples[i];
        }
    }

    return highest;
}

let highest = findHighest(samples);

console.log("Highest score:", highest);
