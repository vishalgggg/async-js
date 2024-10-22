function orderFood() {
    return new Promise((resolve,reject) =>{
    setTimeout(()=>{
        let foodDelivered = Math.random() > .5;
        if(foodDelivered){
            resolve("Food delivered");
        }
        else{
            reject("Food not delivered");
        }
    },2000)

    });
  
}

function orderDessert() {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            let desertDelivered = Math.random() > .5;
            if(desertDelivered){
                resolve("Dessert delivered");
            }
            else{
                reject("Dessert not delivered");
            }
        },2000)
    
        });
}
orderFood().then((foodMsg) => {
    console.log(foodMsg);
    return orderDessert();
})
.then((dessertMsg) =>{
    console.log(dessertMsg);
    console.log("Dream Meal fulfilled");
})
.catch((err)=>{
    console.log(err);
    console.log("Dream Meal failed");
});

