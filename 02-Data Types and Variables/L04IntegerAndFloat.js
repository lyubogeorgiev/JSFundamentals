function integerOrFloat(firstNumber, secondNumber, thirdNumber){
    let sum = firstNumber + secondNumber + thirdNumber;

    let type ;

    if (Number.isInteger(sum)){
        type = "Integer";
    } else {
        type = "Float";
    }

    console.log(`${sum} - ${type}`);
}

integerOrFloat(-9, 100, 1.1);