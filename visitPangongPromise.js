function buyBike() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log();
            resolve("Bought Royal Enfield Himalayan");
        }, 2000); // 2 seconds delay
    });
}

function planTrip() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log();
            resolve("Trip to Ladakh planned");
        }, 1000); // 1 second delay
    });
}

function reachLadakh() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log();
            resolve("Reached Ladakh");
        }, 1000); // 1 second delay
    });
}

function visitPangongLake() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log();
            resolve("Visited Pangong Lake");
        }, 500); // 0.5 seconds delay
    });
}

// Chaining the promises
buyBike()
    .then(planTrip)
    .then(reachLadakh)
    .then(visitPangongLake)
    
