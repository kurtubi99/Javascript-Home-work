    // Problem 01: Find out the smaller number
    // Solution 1
    var num1 = 5;
    var num2 = 57;
    var num3 = 52;

    if (num1<num2 && num1<num3) {
        console.log('Num1 is  smaller number');
    }else if (num2<num1 && num2<num3) {
        console.log('Num2 is  smaller number');
    }
    else{
        console.log('Num3 is  smaller number');
    }

    // Or Solution 2
    if (num1<num2) {
        if (num1<num3) {
            console.log('Number 1 is smaller!');
        }else{
            console.log('Number 3 is  smaller!');
        }
    }
    else{
        if (num2<num3) {
            console.log('Number 2 is  smaller!');
        }else{
            console.log('Number 3 is smaller!');
        }    
    }


    // Problem 02: Show the both bigger values 
    var num1 = 56;
    var num2 = 64;
    var num3 = 64

    if (num1>num2) {
        if (num1>num3) {
            console.log('Number 1 is bigger!');
        }else{
            console.log('Number 3 is bigger');
        }
    }
    else{
        if (num2>num3) {
            console.log('Number 2 is bigger');
        }else{
            if (num2 = num3) {
                console.log('Both values are same');
            }else{
                console.log('number 3 is bigger!');
            }
        }
    }


    // Problem 03: Show Your Grade
    var marks = 85;

    if (marks>=0 && marks<=39) {
        console.log('Your Grade is: F');
    }else if (marks>=40 && marks<=49) {
        console.log('Your Grade is: D');
    }else if (marks>=50 && marks<=59) {
        console.log('Your Grade is: C');
    }else if (marks>=60 && marks<=69) {
        console.log('Your Grade is: B');
    }else if (marks>=70 && marks<=79) {
        console.log('Your Grade is: A');
    }else if (marks>=80 && marks<=100) {
        console.log('Your Grade is: A+');
    }else{
        console.log('Your are not attend the exam!');
    }


    // Problem 05: 1+3+5+7+9+11
    var sum = 0;

    for (let index = 1; index < 12; index = index + 2) {
        sum = sum + index;
    }
    console.log(sum);


    // Problem 06: 2+4+6+8+10+12
    var sum = 0;

    for (let index = 0; index < 13; index = index + 2) {
        sum = sum + index;
    }
    console.log(sum);


    //Solution of Problem 06: Show the * sign to your own name
    var strArray = ['Pial', 'Aliraj', 'Junaid', 'Feroz'];

    for (let index = 0; index < strArray.length; index++) {
        
        if (strArray[index] == 'Junaid') {
            console.log(strArray[index] + '*');
        }else{
            console.log(strArray[index]);
        }
    }