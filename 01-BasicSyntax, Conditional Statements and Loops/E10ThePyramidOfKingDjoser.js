function pyramid(base, increment){
    //stone, marble, lapis lazuli, gold
    //every next step is reduced by 2 blocks ( 1 from each side )
    //height of every step is equal to the increment
    //white steps - covered in marble
    //blue steps - covered in lapuslazuli - every 5th step from the bottom
    //yellow steps are made entirely out of gold (topmost step)
    //outer layer of each step is covered with decorative material
    //to find the required stone for one step,reduce the width and length by 2 blocks and multiply it by the increment

    let stoneAmount = 0;
    let marbleCount = 0;
    let lapisLazuliCount = 0;
    let goldCount = 0;

    let pyramidHeight = 0;

    for (let i = base; i > 0 ; i -= 2) {

        pyramidHeight++;

        //calculate the stone for each step
        if (i > 2){
            let sizeForStone = i - 2;
            let stoneAmountCurrentStep = sizeForStone * sizeForStone * increment;
            stoneAmount += stoneAmountCurrentStep;
        }

        let numberDecorativeSteps = -1;

        if (i > 2){
            numberDecorativeSteps = i * 4 - 4;
        } else if (i === 2){
            numberDecorativeSteps = i * 2;
        } else {
            numberDecorativeSteps = i;
        }

        //calculate decorative material
        if (pyramidHeight % 5 !== 0 && i - 2 > 0){
            //marble here
            marbleCount += numberDecorativeSteps;
        } else if (pyramidHeight % 5 === 0){
            //lapis lazuli here
            lapisLazuliCount += numberDecorativeSteps;
        } else {
            //gold here
            goldCount += numberDecorativeSteps;
        }
    }

    stoneAmount = Math.ceil(stoneAmount);
    let marbleAmount = Math.ceil(marbleCount * increment);
    let lapisLazuliAmount = Math.ceil(lapisLazuliCount * increment);
    let goldAmount = Math.ceil(goldCount * increment);

    pyramidHeight = Math.floor(pyramidHeight * increment);

    console.log(`Stone required: ${stoneAmount}`);
    console.log(`Marble required: ${marbleAmount}`);
    console.log(`Lapis Lazuli required: ${lapisLazuliAmount}`);
    console.log(`Gold required: ${goldAmount}`);
    console.log(`Final pyramid height: ${pyramidHeight}`)
}

pyramid(12, 1);