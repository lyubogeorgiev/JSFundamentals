function amazingNumbers(number){

    console.log(`${number} Amazing? ${isAmazing(number) ? "True" : "False"}`);

    function isAmazing(number){
        let sumOfDigits = 0;

        let numberString = number.toString();

        for (let i = 0; i < numberString.length; i++) {
            sumOfDigits += Number(numberString[i]);
        }

        let sumDigitsString = sumOfDigits.toString();

        for (let i = 0; i < sumDigitsString; i++) {
            if (Number(sumDigitsString[i]) === 9){
                return true;
            }
        }

        return false;
    }
}

amazingNumbers(1233);
amazingNumbers(999);
amazingNumbers(1099);