function printAndSum(m, n){
    let sum = 0;
    let printString = "";

    for (let i = m; i <= n; i++) {
        printString += i + " ";
        sum += i;
    }

    console.log(printString.trim());
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);