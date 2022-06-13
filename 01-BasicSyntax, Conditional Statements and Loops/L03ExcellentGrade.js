function excellentGrade(grade){

    let gradeType = "Not excellent";

    if(grade >= 5.50){
        gradeType = "Excellent";
    }

    console.log(`${gradeType}`);
}

excellentGrade(5.50);