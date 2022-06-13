function vacation(numberOfPeople, typeOfGroup, day){
    let price = -1;
    let totalPrice = -1;

    if (typeOfGroup === "Students"){
        if (day === "Friday"){
            price = 8.45;
        } else if (day === "Saturday"){
            price = 9.80;
        } else if (day === "Sunday"){
            price = 10.46;
        }

        totalPrice = price * numberOfPeople;

        if (numberOfPeople >= 30){
            totalPrice = totalPrice * (1 - 0.15);
        }
    } else if (typeOfGroup === "Business"){
        if (day === "Friday"){
            price = 10.90;
        } else if (day === "Saturday"){
            price = 15.60;
        } else if (day === "Sunday"){
            price = 16;
        }

        if (numberOfPeople >= 100){
            numberOfPeople -= 10;
        }

        totalPrice = price * numberOfPeople;
    } else if (typeOfGroup === "Regular"){
        if (day === "Friday"){
            price = 15;
        } else if (day === "Saturday"){
            price = 20;
        } else if (day === "Sunday"){
            price = 22.50;
        }

        totalPrice = price * numberOfPeople;

        if (numberOfPeople >= 10 && numberOfPeople <= 20){
            totalPrice = totalPrice * (1 - 0.05);
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(30, "Students", "Sunday");