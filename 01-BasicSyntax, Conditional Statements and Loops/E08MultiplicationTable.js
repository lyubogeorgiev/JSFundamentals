function multiplicationTable(n){
    let number = Number(n);

    for (let i = 1; i <= 10; i++) {
        let localResult = number * i;

        console.log(`${number} X ${i} = ${localResult}`);
    }
}

multiplicationTable(5);