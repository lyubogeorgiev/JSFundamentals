function printTriangleOfNumbers(number){
    for (let i = 0; i <= number; i++) {
        let currentString = "";

        for (let j = 0; j < i; j++) {
            currentString += i + " ";
        }

        console.log(currentString.trim());
    }
}

printTriangleOfNumbers(5);