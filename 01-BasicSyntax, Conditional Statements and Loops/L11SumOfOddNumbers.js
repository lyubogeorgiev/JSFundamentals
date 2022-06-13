function sumOfOddNumbers(n){
    let sum = 0;
    let number = 1;

    for (let i = 1; i <= n; i++) {
        console.log(number);

        sum += number;
        number += 2;
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);