function rounding(number, precision){
    if (precision > 15){
        precision = 15;
    }

    console.log(parseFloat(number.toFixed(precision)));
}

rounding(3.14159265326456546987463514, 2);