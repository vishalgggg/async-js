function buyBike() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Bought Royal Enfield Himalayan");
            resolve();
        }, 2000); // 2 seconds delay
    });
}

function planTrip() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Trip to Ladakh planned");
            resolve();
        }, 1000); // 1 second delay
    });
}

function reachLadakh() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Reached Ladakh");
            resolve();
        }, 1000); // 1 second delay
    });
}

function visitPangongLake() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Visited Pangong Lake");
            resolve();
        }, 500); // 0.5 seconds delay
    });
}

// Chaining the promises
buyBike()
    .then(planTrip)
    .then(reachLadakh)
    .then(visitPangongLake)
    
