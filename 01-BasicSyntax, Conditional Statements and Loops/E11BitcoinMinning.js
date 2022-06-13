function bitcoinMining(input){
    let bitcoin = 0;
    let money = 0;

    let dayOfFirstBitcoin = -1;

    let priceOfGold = 67.51;
    let priceOfBitcoin = 11949.16;

    for (let i = 0; i < input.length; i++) {
        let goldMined = Number(input[i]);

        if ((i + 1) % 3 === 0){
            goldMined *= 0.7;
        }

        money += goldMined * priceOfGold;

        while (money >= priceOfBitcoin){
            if (bitcoin === 0){
                dayOfFirstBitcoin = i + 1;
            }

            money -= priceOfBitcoin;
            bitcoin++;
        }
    }

    console.log(`Bought bitcoins: ${bitcoin}`);

    if (dayOfFirstBitcoin !== -1){
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

bitcoinMining([100, 200, 300]);