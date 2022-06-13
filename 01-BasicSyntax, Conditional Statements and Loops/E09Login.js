function login(input){
    let userName = input[0];
    let password = reverseString(userName);

    for (let i = 1; i < input.length; i++) {
        if (password === input[i]){
            console.log(`User ${userName} logged in.`)
            break;
        } else {
            if (i === input.length - 1){
                console.log(`User ${userName} blocked!`);
            } else {
                console.log("Incorrect password. Try again.")
            }
        }
    }

    function reverseString(string){
        let arr = string.split("");
        arr = arr.reverse();
        return arr.join("");
    }
}

login(['Acer','login','go','let me in','recA']);