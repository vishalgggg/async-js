function boilWater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log();
            resolve("Water boiled");
        }, 2000); // 2 seconds delay
    });
}

function addCoffeePowder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log();
            resolve("Added coffee powder");
        }, 500); // 0.5 seconds delay
    });
}

function brewCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log();
            resolve("Brewed coffee");
        }, 1000); // 1 second delay
    });
}

function haveCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log();
            resolve("Enjoying my coffee");
        }, 3000); // 3 seconds delay
    });
}

// Chaining the promises
boilWater()
    .then(addCoffeePowder)
    .then(brewCoffee)
    .then(haveCoffee)
    