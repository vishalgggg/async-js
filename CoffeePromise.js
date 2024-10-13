function boilWater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Water boiled");
            resolve();
        }, 2000); // 2 seconds delay
    });
}

function addCoffeePowder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Added coffee powder");
            resolve();
        }, 500); // 0.5 seconds delay
    });
}

function brewCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Brewed coffee");
            resolve();
        }, 1000); // 1 second delay
    });
}

function haveCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Enjoying my coffee");
            resolve();
        }, 3000); // 3 seconds delay
    });
}

// Chaining the promises
boilWater()
    .then(addCoffeePowder)
    .then(brewCoffee)
    .then(haveCoffee)
    