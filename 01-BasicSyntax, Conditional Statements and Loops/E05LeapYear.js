function isLeapYear(year){
    let isLeapYear = false;

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        isLeapYear = true;
    }

    console.log(isLeapYear ? "yes" : "no");
}

isLeapYear(2003);