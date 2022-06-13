function rightPlace(first, second, third){
    let result = first.replace("_", second);

    console.log(result === third ? "Matched" : "Not Matched");
}

rightPlace('Str_ng', 'I', 'Strong');